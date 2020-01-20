import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';
import pin from '../../img/pin.svg';
class App extends React.Component {
    state = {
        items: [
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
        ]
    };
    render() {
        return (
            <div className={styles.wrap}>
                <img src={pin} className={styles.pin} alt="pin" />
                <h1 className={styles.title}>Todos:</h1>
                <InputItem/>
                <ItemList items={this.state.items}/>
                <Footer count={this.state.items.length}/>
            </div>);
    }
};

export default App;