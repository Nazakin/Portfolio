import React from 'react';
import styles from './Header.module.css'
import Logo from '../Logo/Logo';
import { NAVIGATION } from '../../consts';
import Button from '../UI/Button/Button';

const Header: React.FunctionComponent = () => {
    return (
        <header className={styles.headerContainer}>
            <Logo />
            <nav className={styles.navigationButtonsContainer}>
                {NAVIGATION.map(({name, id}, index) => (
                    <button
                  key={index}
                  className={styles.navigationButtons}
                >
                  {name}
                </button>
                ))}
                <Button text='Hire me' onClick={() => {}} />
            </nav>
        </header>
    );
};

export default Header;