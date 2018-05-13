import React from 'react'
import styles from './landing-screen.module.css';
import tcbGlobe from '../../../../images/tcb-globe.png';
import lookBelow from '../../../../images/look-below.png';

const LandingScreen = () => (
    <section className={styles.base}>
        <div className={styles.pictureFrame}>
            <picture className={styles.picture}>
                <source media="(min-width: 769px)" srcSet={tcbGlobe}/>
                <img className={styles.icon} src={tcbGlobe}/>
            </picture>
        </div>
        <footer className={styles.footer}>
            <picture className={styles.footerPicture}>
                <source media="(min-width: 769px)" srcSet={lookBelow}/>
                <img className={styles.lookBelowIcon} src={lookBelow}/>
            </picture>
        </footer>
    </section>
);

export default LandingScreen;