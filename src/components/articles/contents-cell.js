import React from 'react';
import styles from './contents-cell.module.css';
import Link from "gatsby-link";

const ContentsCell = ({
                  data
              }) => (
    <Link  to={data.url}>
        <div className={styles.header}><span>{data.title}</span></div>
        <div className={styles.subTItle}><span>{`Date: ${data.date} - Author: ${data.author}`}</span></div>
    </Link>
);

export default ContentsCell;