import React from 'react';
import styles from './contents.module.css';
import connectViewToControllers from "../../framework/alto/data/controller/connect_controller";
import webArticlesController from "../../controllers/web-articles-controller";
import appleNativeArticlesController from "../../controllers/apple-native-articles-controller";
import computerScienceArticlesController from "../../controllers/computer-science-articles-controller";
import ListView from "../../framework/alto/ui/list_view";
import ContentsCell from "./contents-cell";

const Contents = ({
                      webArticlesData,
                      computerScienceArticlesData,
                      appleNativeArticlesData
                  }) => (

    <div className={styles.contents}>
        <div className={styles.documentFrame}>
            <header className={styles.header}>
                <div className={styles.contentFrame}><span className={styles.contentTitle}>Contents</span></div>
            </header>

            <section className={styles.section}>
                <div className={styles.sectionHeader}><span>Web</span></div>
                <ListView className={styles.listView} data={webArticlesData} id="url">
                    <ContentsCell/>
                </ListView>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}><span>Apple Native</span></div>
                <ListView className={styles.listView} data={appleNativeArticlesData} id="url">
                    <ContentsCell/>
                </ListView>
            </section>

            <section className={styles.section}>
                <div className={styles.sectionHeader}><span>Computer Science</span></div>
                <ListView className={styles.listView} data={computerScienceArticlesData} id="url">
                    <ContentsCell/>
                </ListView>
            </section>

        </div>
    </div>
);

export default connectViewToControllers(Contents, {
    webArticlesData: webArticlesController,
    computerScienceArticlesData: computerScienceArticlesController,
    appleNativeArticlesData: appleNativeArticlesController
});