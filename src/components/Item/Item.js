import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './Item.module.css';
const Item = ({value, isDone}) => (
    <span className={classnames({
        [styles.item]:true,
        [styles.done]:isDone
    })}>
        {value}
    </span>
);
Item.defaultProps = {
    value: 'Задача не найдена',
    isDone: false,
    id: 0
};
Item.propTypes = {
    value: PropTypes.string.isRequired,
    isDone: PropTypes.bool,
    id: PropTypes.number.isRequired
};
export default Item;