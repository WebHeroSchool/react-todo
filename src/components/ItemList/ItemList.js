import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import './ItemList.css';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
const ItemList = ({items}) => (<ul>
    {items.map((item) => (<li className={styles.item_list} key={item.value}>
        <FormControlLabel
        control={
            <Checkbox
                checked={item.isDone}
                value="checkedB"
                color="primary"
            />
        }
        label={<Item value={item.value} isDone={item.isDone}/>}
        />
        <Tooltip title="Удалить">
            <IconButton aria-label="delete" classes={{ label: 'button__delete' }}>
                <DeleteIcon fontSize="small" />
            </IconButton>
        </Tooltip>
    </li>))}
</ul>);
export default ItemList;