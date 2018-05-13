import React from 'react'
import styles from './intro-screen.module.css';
import tcbLogo from '../../../../images/the-code-boutique-logo.png';

const IntroScreen = () => (
    <section className={styles.base}>
        <header className={styles.header}>Introduction</header>
        <picture className={styles.picture}>
            <source media="(min-width: 769px)" srcSet={tcbLogo}/>
            <img className={styles.icon} src={tcbLogo}/>
        </picture>
        <div className={styles.body}>
            <span>
                We are a premier engineering firm that specializes in application development.
                Our work can be found in early stage start-ups, medium sized companies, and
                within Silicon Valley giants.
                <br/><br/>
                From Design, Front-End, to Back-End.  We deliver.
            </span>
        </div>
    </section>
);

export default IntroScreen;