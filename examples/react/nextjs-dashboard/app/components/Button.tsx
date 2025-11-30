import React from 'react'
import styles from './Button.module.css'
import classNames from 'classnames'

interface ButtonProps {
    setCount: React.Dispatch<React.SetStateAction<number>>;
    count: number;
    buttonSize?: 'small' | 'large';
    buttonColor?: 'primary' | 'secondary' | 'success' | 'warning' | 'info' | 'light' | 'dark';
}

function Button({ setCount, count, buttonSize, buttonColor }: ButtonProps) {

    const buttonClass = classNames(styles.btn, {
        [styles['btn-large']]: buttonSize === 'large',
        [styles['btn-small']]: buttonSize === 'small',
        [styles['btn-primary']]: buttonColor === 'primary',
        [styles['btn-secondary']]: buttonColor === 'secondary',
        [styles['btn-success']]: buttonColor === 'success',
        [styles['btn-warning']]: buttonColor === 'warning',
        [styles['btn-info']]: buttonColor === 'info',
        [styles['btn-light']]: buttonColor === 'light',
        [styles['btn-dark']]: buttonColor === 'dark',
    });



    return (
        <button className={buttonClass} onClick={() => setCount(count + 1)}>Increment</button>
    )
}

export default Button