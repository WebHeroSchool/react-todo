import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
const Item = ({value, isDone, onClickDone, id}) => (
    <span className={classnames({
        [styles.item]:true,
        [styles.done]:isDone
    })} onClick={() => onClickDone(id)}>
        {value}
    </span>
);

export default Item;