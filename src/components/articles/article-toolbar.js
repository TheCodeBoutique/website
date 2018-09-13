import React from 'react';
import lookback from '../../images/look-back.png';
import styles from './article-toolbar.module.css';
import Link from "gatsby-link";

const ArticleToolbar = ({
                            date,
                            author
                        }) => (

    <div className={styles.toolbar}>
        <Link to='/articles'>
            <picture className={styles.lookbackPicture}>
                <source media="(min-width: 769px)" srcSet={lookback}/>
                <img className={styles.lookback} src={lookback} alt="lookback"/>
            </picture>
        </Link>
        <div className={styles.title}><span>{`Article Date: ${date} - Author: ${author}`}</span></div>
    </div>
);

export default ArticleToolbar;