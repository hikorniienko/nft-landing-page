import React from 'react';
import styles from './index.module.scss';

import { Header } from '../../organisms/header';
import { Title } from '../../organisms/title';
import { Moon } from '../../atoms/moon';

export const Home: React.FC = () => {
    return (
        <main>
            <Header />
            <Moon />
            <Title />
        </main>
    );
};