import React, {Fragment} from 'react';
import styles from './article-headline.module.css';

const ArticleHeadline = ({
                             title,
                             subTitle,
                             hero,
                             heroCreds,
                             heroFrameClassName
                         }) => {

    return (

        <Fragment>
            <div className={styles.documentFrame}>
                <div className={styles.title}><span>{title}</span></div>
                <div className={styles.subtitle}><span>{subTitle}</span></div>
                <picture className={styles.heroPicture}>
                    <source media="(min-width: 769px)" srcSet={hero}/>
                    <img className={styles.hero} src={hero} alt="christopher-chedeau-react-origin"/>
                </picture>
                <div className={styles[heroFrameClassName]}>
                    <span className={styles.heroCredsTitle}>{heroCreds}</span>
                </div>
            </div>
            <div className={styles.distortedBackground}/>
        </Fragment>
    )

};

export default ArticleHeadline;