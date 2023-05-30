import React from 'react';
import classNames from 'classnames/bind';
import styles from './header.scss'

const cx = classNames.bind(styles)

function Header() {
    return  (
        <>
            <h1 className={cx('header')}>Phuchoy</h1> 
        </>

        
    )
} 

export default Header;