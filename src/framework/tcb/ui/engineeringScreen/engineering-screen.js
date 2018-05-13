import React from 'react'
import ButtonView from "../../../alto/ui/button_view";
import styles from './engineering-screen.module.css';
import rightDesignLine from '../../../../images/right-design-lines.png';
import leftDesignLine from '../../../../images/left-design-lines.png';

const EngineeringScreen = () => (
    <section className={styles.base}>
        <header className={styles.header}>Engineering</header>
        <div className={styles.body}>
            <span>
                We offer expert level engineering services and <br/> specialize in the following languages:
                <span className={styles.emphasis}>  Swift, Objective-C, <span className={styles.normal}> and </span>
                    <span className={styles.emphasis}>Javascript.</span>
                </span>
                <br/><br/>
                <div className={styles.description}>
                    We excel at Native Applications for the iPhone, iPad, Apple Watch, and Apple TV.  But don’t get us wrong.
                    Our web applications are best in class as well.  And behind the scenes, our REST api’s are clean, fast, and
                    scale.
                </div>
            </span>
            <ButtonView className={styles.button} title={'Contact'} action={() => {window.location.href = "mailto:contact@thecodeboutique.com?subject=Engineer consulting services needed";}}/>
            <div className={styles.pictureFrame}>
                <picture className={styles.pictureLeft}>
                    <source media="(min-width: 769px)" srcSet={leftDesignLine}/>
                    <img className={styles.leftDesignLine} src={leftDesignLine}/>
                </picture>
                <picture className={styles.pictureRight}>
                    <source media="(min-width: 769px)" srcSet={rightDesignLine}/>
                    <img className={styles.rightDesignLine} src={rightDesignLine}/>
                </picture>
            </div>
        </div>
    </section>
);

export default EngineeringScreen;