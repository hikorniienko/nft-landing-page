import React from 'react';
import styles from './index.module.scss';

import { Header } from '../../organisms/Header';
import { Title } from '../../organisms/Title';

export const Home: React.FC = () => {
    return (
        <main>
            <Header />
            <Title />
        </main>
    );
};