import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import './App.css';
const items = [
     {value: 'Изучить материал по пропсам'},
     {value: 'Сделать задание по пропсам'},
     {value: 'Отправить задание на проверку'}
];
const App = () => (
    <div className="wrap">
        <h1 className="wrap__title">Todos</h1>
        <InputItem/>
        <ItemList items={items}/>
        <Footer count={items.length}/>
    </div>
);
export default App;