import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Brightness1OutlinedIcon from '@material-ui/icons/Brightness1Outlined';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import PropTypes from 'prop-types';
import FrameTodo from '../../img/FrameTodo.png';

class ItemList extends React.Component {
    render() {
        const {items, onClickDone, onClickDelete} = this.props;
        return (
            <div>
                {items.length !== 0
                    ? <ul className={styles.list}>
                        {items.map((item) => (<li className={styles.item_list} key={item.id}>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        icon={<Brightness1OutlinedIcon className={styles.checkbox_icon}/>}
                                        checkedIcon={<CheckCircleOutlineIcon className={styles.checkbox_icon}/>}
                                        checked={item.isDone}
                                        value='checkedB'
                                        color='primary'
                                        onClick={() => onClickDone(item.id)}
                                    />
                                }
                                label={<Item value={item.value}
                                             isDone={item.isDone}
                                             id={item.id}
                                />}
                            />
                            <Tooltip title='Удалить'>
                                <CancelIcon fontSize='small' onClick={() => onClickDelete(item.id)}
                                            className={styles.button__delete}/>
                            </Tooltip>
                        </li>))}
                    </ul>
                    : <div className={styles.noItems}>
                        <img src={FrameTodo} alt='/' className={styles.noItems__img}/>
                        <h4 className={styles.noItems__title}>Вы ещё не добавили ни одной задачи</h4>
                        <span className={styles.noItems__text}>Сделайте это прямо сейчас!</span>
                    </div>

                }
            </div>
        )
    }
}
ItemList.propTypes = {
    items: PropTypes.array,
    onClickDone: PropTypes.func.isRequired,
    onClickDelete: PropTypes.func.isRequired
};
export default ItemList;