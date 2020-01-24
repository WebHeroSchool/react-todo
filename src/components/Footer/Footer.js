import React from 'react';
import styles from './Footer.module.css';
const Footer = ({count}) => (
    <span className={styles.footer}>Осталось выполнить: {count}</span>
);
export default Footer;