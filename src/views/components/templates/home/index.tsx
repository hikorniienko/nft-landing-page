import React from 'react';
import styles from './index.module.scss';

import { Moon } from '../../atoms/moon';
import { Header } from '../../organisms/header';
import { Title } from '../../organisms/title';
import { Collections } from '../../organisms/collections';

export const Home: React.FC = () => {
    return (
        <main>
            <Header />
            <Moon />
            <Title />
            <Collections  />
        </main>
    );
};