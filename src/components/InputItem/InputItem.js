import React from 'react';
import Input from '@material-ui/core/Input';
import styles from './InputItem.module.css'
const InputItem = () => (
    <Input placeholder="Что нужно сделать?" classes={{ input: [styles.input] }} inputProps={{ 'aria-label': 'description' }} />
);
export default InputItem;