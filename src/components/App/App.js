import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
const items = [
     {value: 'Изучить материал по пропсам'},
     {value: 'Сделать задание по пропсам'},
     {value: 'Отправить задание на проверку'}
];
const App = () => (
    <div>
        <h1>Todos</h1>
        <InputItem/>
        <ItemList items={items}/>
        <Footer count={items.length}/>
    </div>
);
export default App;