import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 style={{backgroundColor: 'gold'}}>메뉴리스트</h1>
      <Menu/><hr/>
      <Menu/><hr/>
      <Menu/><hr/>
    </div>
  );
}

const menu = {
  menuName: '두바이 초콜릿',
  menuPrice: 50000,
  orderableStatus: 'Y',
  category: '디저트'
}

function Menu() {
  return (
    <div className='menu'>
      <h2>{menu.menuName}</h2>
      <h3>{menu.menuPrice}원</h3>
      <Category/>
      <h3>주문가능</h3>
    </div>
  )
}

function Category(){
  return (<h3>{menu.category}</h3>)
}

export default App;
