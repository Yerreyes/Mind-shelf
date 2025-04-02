import React from 'react';
import styles from './footer.module.css';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <p className={styles.text}>© {new Date().getFullYear()} Mind Shelf. All rights reserved.</p>
        </footer>
    );
};

export default Footer;