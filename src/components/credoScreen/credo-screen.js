import React from 'react'
import styles from './credo-screen.module.css';

const CredoScreen = () => (
    <section className={styles.base}>
        <header className={styles.header}>Credo</header>
        <div className={styles.body}>
            <header className={styles.emphasis}>
               No two firms are alike.
            </header>
            <span className={styles.description}>
                All of our Engineers are deeply rooted and influenced by Apple Inc.  In fact, the majority of
                The Code Boutique are former Apple employees.  Chances are if you enjoy Apple products, their keen
                attention to detail, and engineering quality, then we are a good fit for your needs.
                <br/><br/>
                We are obsessed with fluid, clean, easy to use User Interfaces.  Our code reads like a well written
                novel - carefully crafted with the highest degree and appreciation for software architectural design.
                We test vigorously to ensure stability.  Above all, when we build software solutions. We strive to
                achieve the highest level of performance on all platforms.
                <br/><br/>
                When you work with us, you get World Class Engineering Solutions and White Glove Customer Service.
            </span>
        </div>
    </section>
);

export default CredoScreen;