import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import pin from '../../img/pin.svg';
const items = [
     {
         value: 'Изучить материал по пропсам',
        isDone: true
     },
     {
         value: 'Сделать задание по пропсам',
         isDone: false
     },
     {
         value: 'Отправить задание на проверку',
         isDone: false
     }
];
const App = () => (
    <div className={styles.wrap}>
        <img src={pin} className={styles.pin} alt="pin" />
        <h1 className={styles.title}>Todos:</h1>
        <InputItem/>
        <ItemList items={items}/>
        <Footer count={items.length}/>
    </div>
);
export default App;