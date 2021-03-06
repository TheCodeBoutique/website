import React from 'react'
import ButtonView from "../../../../alto/ui/button_view";
import styles from './course-hero.module.css';

const CourseHero = ({
    image,
    secondaryImage,
    title,
    action
                    }) => {
    return secondaryImage ? (
        <li>
            <img className={styles.image} src={image}/>
            <img className={styles.secondaryImage} src={secondaryImage}/>
            <ButtonView className={styles.moreButton} title={'More'} action={action}/>
        </li>
    ) : (
        <li>
            <img className={styles.image} src={image}/>
            <div className={styles.title}>{title}</div>
            <ButtonView className={styles.moreButton} title={'More'} action={action}/>
        </li>
    )
}

export default CourseHero;