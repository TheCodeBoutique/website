import React from 'react';
import styles from './cover.module.css';
import lightBlub from '../../images/light-bulb.png';
import tcbLogo from '../../images/the-code-boutique-logo.png';

const Cover = () => (
    <div className={styles.cover}>
        <picture className={styles.lbPicture}>
            <source media="(min-width: 769px)" srcSet={lightBlub}/>
            <img className={styles.lb} src={lightBlub}  alt="knowledge-bulb"/>
        </picture>
        <picture className={styles.tcbLogoPicture}>
            <source media="(min-width: 769px)" srcSet={tcbLogo}/>
            <img className={styles.tcbLogo} src={tcbLogo}  alt="knowledge-bulb"/>
        </picture>
        <div className={styles.seperator} />
    </div>
);

export default Cover;