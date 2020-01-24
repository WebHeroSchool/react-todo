import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
const ItemList = ({items, onClickDone, onClickDelete}) => (<ul className={styles.list}>
    {items.map((item) => (<li className={styles.item_list} key={item.id}>
        <FormControlLabel
            control={
                <Checkbox
                    checked={item.isDone}
                    value="checkedB"
                    color="primary"
                    onClick={() => onClickDone(item.id)}
                />
            }
        label={<Item value={item.value}
                     isDone={item.isDone}
                     id={item.id}
                />}
        />
        <Tooltip title="Удалить">
            <IconButton aria-label="delete" classes={{ label: [styles.button__delete] }}>
                <DeleteIcon fontSize="small" onClick={() => onClickDelete(item.id)} />
            </IconButton>
        </Tooltip>
    </li>))}
</ul>);
export default ItemList;