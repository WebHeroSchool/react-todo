import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import {deals} from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
const App = () => (
    <div>
        <h1>Todos</h1>
        <InputItem/>
        <ItemList />
        <Footer count={deals.length}/>
    </div>
);
export default App;