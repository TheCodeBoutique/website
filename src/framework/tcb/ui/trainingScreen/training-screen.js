import React from 'react'
import styles from './training-screen.module.css';
import CourseHero from "./courseHero/course-hero";
import AppleWatchIcon from '../../../../images/apple-watch-icon.png';
import AppleWatchLogo from '../../../../images/apple-watch-logo.png';
import AppleTVIcon from '../../../../images/apple-tv-icon.png';
import AppleTVLogo from '../../../../images/apple-tv-logo.png';
import AppleiOSIcon from '../../../../images/apple-ios-icon.png';
import FrontEndIcon from '../../../../images/front-end-icon.png';
import BackEndIcon from '../../../../images/back-end-icon.png';

const TrainingScreen = () => (
    <section className={styles.base}>
        <header className={styles.header}>Training</header>
        <div className={styles.body}>
            <header className={styles.emphasis}>
                Your Office.  Your Team.  Our Instructors.  Our Material.
            </header>
            <span className={styles.description}>
                From one-on-one training,  to large corporate groups,  our instructors can facilitate your needs.
            </span>
        </div>
        <div className={styles.courses}>
            <ul className={styles.list}>
                <CourseHero image={AppleWatchIcon} secondaryImage={AppleWatchLogo} action={() => {}}/>
                <CourseHero image={AppleTVIcon} secondaryImage={AppleTVLogo}action={() => {}}/>
                <CourseHero image={AppleiOSIcon} title={'iOS'} action={() => {}}/>
                <CourseHero image={FrontEndIcon} title={'Front-End'} action={() => {}}/>
                <CourseHero image={BackEndIcon} title={'Back-End'} action={() => {}}/>
            </ul>
        </div>
    </section>
);

export default TrainingScreen;