import React from 'react';
import styles from './Footer.module.css';
const Footer = ({count}) => (
    <span className={styles.footer}>Left to do: {count}</span>
);
Footer.defaultProps = {
    count: 0
};
export default Footer;