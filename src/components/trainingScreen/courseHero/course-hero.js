import React from 'react'
import ButtonView from "../../../framework/alto/ui/button_view";
import styles from './course-hero.module.css';

const CourseHero = ({
    image,
    secondaryImage,
    title,
    action
                    }) => {
    return secondaryImage ? (
        <li className={styles.listview}>
            <img className={styles.image} src={image} alt="training-main"/>
            <img className={styles.secondaryImage} src={secondaryImage} alt="training-secondary"/>
            <ButtonView className={styles.moreButton} title={'More'} action={action}/>
        </li>
    ) : (
        <li className={styles.listview}>
            <img className={styles.image} src={image} alt="training-main"/>
            <div className={styles.title}>{title}</div>
            <ButtonView className={styles.moreButton} title={'More'} action={action}/>
        </li>
    )
}

export default CourseHero;