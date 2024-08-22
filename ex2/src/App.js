import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  // const [menu, setMenu] = useState([{
  //     menuName: '열무김치라떼',
  //     menuPrice: 4500,
  //     category: '커피',
  //     orderableStatus: 'Y'
  //   },{
  //     menuName: '열무김치라떼',
  //     menuPrice: 4500,
  //     category: '커피',
  //     orderableStatus: 'Y'
  // }]);
  const [menu, setMenu] = useState({
    menuName: '열무김치라떼',
    menuPrice: 4500,
    category: '커피',
    orderableStatus: 'Y'
  });

  const [tabom, setTabom] = useState({
    number: 0
  });

  const {number} = tabom;

  const onClickChangeMenu = (e) => {
    const changedMenu = {
      ...menu,
      menuName: '바닐라 플랫 화이트'
    }
    setMenu(changedMenu);
  }

  const onClickAddTabom = (e) => {
    const addTabom = {
      ...tabom,
      number: number + 1
    }
    setTabom(addTabom);
  }

  const {menuName, menuPrice, category, orderableStatus} = menu;

  // const MenuNameCard = () => <h2>메뉴명: {menu.menuName}<span onClick={onClickAddTabom}> 👍 {tabom.number}</span></h2>;
  // const MenuPriceCard = () => <h3>가격: {menuPrice}</h3>;
  // const CategoryCard = () => <h3>카테고리: {category}</h3>;
  // const OrderableStatusCard = () => <h4>주문가능여부: {orderableStatus}</h4>;

  function MenuNameCard(){
    return <h2>메뉴명: {menu.menuName}
              <span onClick={onClickAddTabom}> 👍 {tabom.number}</span>
           </h2>;
  }

  function MenuPriceCard(){
    return <h3>가격: {menuPrice}</h3>;
  }

  function CategoryCard(){
    return <h3>카테고리: {category}</h3>
  }

  function OrderableStatusCard(){
    return <h4>주문가능여부: {orderableStatus}</h4>
  }

  return (
    <div>
      <div className='black-nav'>
        <h1>메뉴리스트</h1>
      </div>

      <div className='menu'>
        {/* <h2>메뉴명: {menu.menuName}<span onClick={onClickAddTabom}> 👍 {tabom.number}</span></h2>
            <h3>가격: {menu.menuPrice}</h3>
            <h3>카테고리: {menu.category}</h3>
            <h4>주문가능여부: {menu.orderableStatus}</h4> */}
        <MenuNameCard/>
        <MenuPriceCard/>
        <CategoryCard/>
        <OrderableStatusCard/>
      </div>

      <button onClick={onClickChangeMenu}>메뉴변경</button>
    </div>
  );
}

export default App;
