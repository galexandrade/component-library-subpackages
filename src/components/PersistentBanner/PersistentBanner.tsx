import React from 'react';
import { IconInfoCircle } from 'icons';
import styles from './persistent-banner.scss';

type Props = {
    children: React.ReactNode;
};
const PersistentBanner = ({ children }: Props) => (
    <div className={styles['persistent-banner']}>
        <IconInfoCircle />
        {children}
    </div>
);

export default PersistentBanner;
