import './App.css';
import {useState} from 'react';

function TodoApp() {
  const [inputText, setInputText] = useState('');
  const [nextId, setNextId] = useState(1);
  const [todos, setTodos] = useState([]);

  const onChangeHandler = (e) => setInputText(e.target.value);

  const onClickHandler = () => {
      const todosCopy = todos.concat({id: nextId, todo: inputText, isChecked: false, isPriority: false});
      setTodos(todosCopy);
      setNextId(nextId + 1);
      setInputText('');
      reorder(todosCopy);
  };

  const onClickRemove = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id)
    setTodos(updatedTodos);
  };

  const onChecked = (id) => {
    // isChecked 상태 변경
    const updatedTodos = todos.map(todo => todo.id === id ? {...todo, isChecked: !todo.isChecked} : todo);
    reorder(updatedTodos);
  };

  function reorder(updatedTodos) {
    updatedTodos.sort((a, b) => {
      if (a.isChecked !== b.isChecked) {
        return a.isChecked ? 1 : -1;
      } else if (a.isPriority !== b.isPriority) {
        return a.isPriority ? -1 : 1;
      } else {
        return a.id - b.id;
      }
    });

    setTodos(updatedTodos);
  }

  // 방법 1
  // const onClickAddImportance = (id) => {
  //   // isPriority 상태 변경
  //   setTodos(prevTodos => {
  //     const updatedTodos = prevTodos.map(todo =>
  //       todo.id === id ? { ...todo, isPriority: !todo.isPriority } : todo
  //     );
      
  //     reorder(updatedTodos);
  //     return updatedTodos;
  //   });
  // };
  
  // function reorder(updatedTodos) {
  //   const todosCopy = [...updatedTodos];
  
  //   todosCopy.sort((a, b) => {
  //     if (a.isPriority !== b.isPriority) {  // priority가 서로 다르면 true를 먼저
  //       return a.isPriority ? -1 : 1;
  //     } else if (a.isChecked !== b.isChecked) { 
  //       return a.isChecked ? 1 : -1;
  //     } else {  // priority가 서로 같으면 id로 순서 정하기
  //       return a.id - b.id;
  //     }
  //   });
  
  //   setTodos(todosCopy);
  // }
  
  // 방법 2
  const onClickAddImportance = (id) => {
    // isPriority 상태 변경
    const updatedTodos = todos.map(todo => todo.id === id ? {...todo, isPriority: !todo.isPriority} : todo);
    // setTodos(updatedTodos);  // XXX => set함수는 한 번만 사용 가능(reorder 후)
    reorder(updatedTodos);
  };

  const enterKeyDown = (e) => {
    if (e.key === 'Enter' && inputText.trim() !== '') {
      onClickHandler();
    }
  };

  // 방법 1
  // const todosList = todos.map(todo => (<>
  //           <input type='checkbox' key={todo.id} checked={todo.isChecked} onClick={() => onChecked(todo.id)}/>
  //           <span style={{'textDecoration':`${todo.isChecked ? 'line-through' : 'none'}`}}> {todo.todo}</span>
  //           <span onClick={() => onClickRemove(todo.id)}> ❌</span>
  //           <br/>
  //         </>));

  // 방법 2
  const todosList = todos.map(todo => (<TodoCheckbox todo={todo}/>));

  function TodoCheckbox({todo}) {
    return  <div key={todo.id} style={{marginBottom: 10 + 'px'}}>
              <input type='checkbox' checked={todo.isChecked} onChange={() => onChecked(todo.id)}/>
              <span style={{'textDecoration':`${todo.isChecked ? 'line-through' : 'none'}`}} onClick={() => onClickAddImportance(todo.id)}> {todo.todo}</span>
              {`${todo.isPriority ? ' ❤' : ''}`}
              <span onClick={() => onClickRemove(todo.id)}> ❌</span>
              <br/>
            </div>
  }
  
  // function TodoCheckbox(props) {
  //   return  <>
  //             <input type='checkbox' key={props.todo.id} checked={props.todo.isChecked} onClick={() => onChecked(props.todo.id)}/>
  //             <span style={{'textDecoration':`${props.todo.isChecked ? 'line-through' : 'none'}`}}> {props.todo.todo}</span>
  //             <span onClick={() => onClickRemove(props.todo.id)}> ❌</span>
  //             <br/>
  //           </>
  // }

  return (
    <div className='flex-wrapper'>
      <header><h1>오늘의 할 일!</h1></header>
      
      <div className='content'>
        <h2>ToDo-List</h2>
        <ul className='list-box'>{todosList}</ul>
        <div className='add-list-box'>
          <input className='input-text' value={inputText} onChange={onChangeHandler} onKeyDown={enterKeyDown}/>
          <button className='add-btn' onClick={onClickHandler} disabled={inputText.trim() === ''}>추가하기</button>
        </div>
      </div>

      <footer>Copyright 2022. team-greedy all rights reserved.</footer>
    </div>
  );
}

export default TodoApp;
