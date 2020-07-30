import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import styles from './Todo.module.css';
import Card from '@material-ui/core/Card';

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.buttonAll = React.createRef();
    }

    state = {
        items: JSON.parse(localStorage.getItem('items') ||
            '[]'),
        count: 0,
        open: false,
        filterItems: 'all'
    };
    onClickDone = id => {
        const newItemList = this.state.items.map(item => {
            const newItem = {...item};
            if (item.id === id) {
                newItem.isDone = !item.isDone;
            }
            return newItem;
        });
        this.setState({items: newItemList});
    };
    onClickDelete = id => {
        const itemListDel = this.state.items.filter(item => item.id !== id);
        this.setState({items: itemListDel});
    };
    onClickAdd = (value) => {
        this.setState(state => ({
            items: [
                ...state.items,
                {
                    value,
                    isDone: false,
                    id: state.count + 1
                }
            ],
            count: state.count + 1
        }));
    };
    selectAll = () => {
        this.setState({
            filterItems: 'all'
        });
    };
    selectDone = () => {
        this.setState({filterItems: 'done'});
    };
    selectUndone = () => {
        this.setState({
            filterItems: 'undone'
        });
    };

    componentDidMount() {
        this.buttonAll.current.focus();
    };

    render() {
        let itemsStorage = JSON.stringify(this.state.items);
        localStorage.setItem('items', itemsStorage);
        const allItems = this.state.items;
        const itemsDone = this.state.items.filter(item => item.isDone === true);
        const itemsUndone = this.state.items.filter(item => item.isDone === false);
        let items;
        switch (this.state.filterItems) {
            case('all'):
                items = allItems;
                break;
            case ('done'):
                items = itemsDone;
                break;
            case('undone'):
                items = itemsUndone;
                break;
            default:
                items = allItems;
        }
        return (
            <Card>
                <section className={styles.wrap}>
                    <div className={styles.title__wrap}>
                        <h1 className={styles.title}>Список дел:</h1>
                        <div>
                            <button onClick={this.selectDone} className={styles.filter}>
                                Завершенные {itemsDone.length !== 0 &&
                            <span className={styles.filteredItems}>{itemsDone.length}</span>}
                            </button>
                            <button onClick={this.selectUndone} className={styles.filter}>
                                Незавершенные {itemsUndone.length !== 0 &&
                            <span className={styles.filteredItems}>{itemsUndone.length}</span>}
                            </button>
                            <button onClick={this.selectAll} className={styles.filter} ref={this.buttonAll}>Все</button>
                        </div>
                    </div>
                    <div className={styles.todoList}>
                        <ItemList items={items} onClickDone={this.onClickDone} onClickDelete={this.onClickDelete}/>
                        <InputItem onClickAdd={this.onClickAdd} items={items}/>
                    </div>
                </section>
            </Card>);
    }
}

export default Todo;