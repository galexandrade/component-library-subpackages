import React from 'react';
import styles from './button.scss';

type Props = {
    children: React.ReactNode;
};
const Button = ({ children }: Props) => (
    <button className={styles['button']}>{children}</button>
);

export default Button;
