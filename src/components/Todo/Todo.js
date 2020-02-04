import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './Todo.module.css';
import pin from '../../img/pin.svg';
class Todo extends React.Component {
    state = {
        items: [
            {
                value: 'Изучить материал по пропсам',
                isDone: false,
                id: 1
            },
            {
                value: 'Сделать задание по пропсам',
                isDone: false,
                id: 2
            },
            {
                value: 'Отправить задание на проверку',
                isDone: false,
                id: 3
            }
        ],
        count: 3
    };
    onClickDone = id => {
        const newItemList = this.state.items.map(item => {
            const newItem = {...item};
            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }
            return newItem;
        });
        this.setState({ items : newItemList});
    };
    onClickDelete = id => {
        const itemListDel = this.state.items.filter(item => item.id !== id);
        this.setState({items : itemListDel});
    };
    onClickAdd = value => {
        this.setState(state => ({
            items : [
                ...state.items,
                {
                    value,
                    isDone: false,
                    id: state.count + 1
                }
            ],
            count: state.count + 1
        }))
    };
    render() {
        return (
            <div className={styles.wrap}>
                <img src={pin} className={styles.pin} alt="pin" />
                <h1 className={styles.title}>Todos:</h1>
                <InputItem onClickAdd={this.onClickAdd}/>
                <ItemList items={this.state.items} onClickDone={this.onClickDone} onClickDelete={this.onClickDelete}/>
                <Footer count={this.state.count}/>
            </div>);
    }
}

export default Todo;