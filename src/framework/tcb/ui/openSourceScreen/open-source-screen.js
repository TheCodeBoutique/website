import React from 'react'
import styles from './open-source-screen.module.css';

const OpenSourceScreen = () => (
    <section className={styles.base}>
        <header className={styles.header}>Open Source</header>
        <div className={styles.body}>
            <header className={styles.emphasis}>
                We love Open Source.
            </header>
            <span className={styles.description}>
                From our humble begining with SproutCore and to this very day, The Code Boutique's been involved
                in Open Source communities.  We have always valued open collaboration, community
                development, and creating economic growth by providing top tier tools for engineers.

                It is with utmost pride that we present Alto.js, Alto.http, and Alto.swift.
            </span>
        </div>
    </section>
);

export default OpenSourceScreen;