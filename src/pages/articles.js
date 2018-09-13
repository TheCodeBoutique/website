import React from 'react'
import '../common_styles/common.css';
import styles from './articles.module.css';
import rootNavIcon from '../images/root-nav-icon.png';
import rootNavigationController from "../controllers/root-navigation-controller";
import RootNavigationView from "../components/rootNavigationView/root-navigation-view";
import connectViewToControllers from "../framework/alto/data/controller/connect_controller";
import Cover from "../components/articles/cover";
import Contents from "../components/articles/contents";

const ArticlesPage = ({
                          data
                      }) => (
    <div className={styles.base}>
        <section className={styles.toolbar}>
            <img className={styles.rootNavIcon} src={rootNavIcon} alt="root-nav" onClick={() => {
                rootNavigationController.showRootNavigation()
            }}/>
            <div className={styles.title}>
                <span>Articles</span>
            </div>

            <div className={styles.subTitle}>
                <span>Latest:</span>
            </div>
        </section>

        <section className={styles.body}>

            <Cover />
            <Contents />
        </section>

        <RootNavigationView isVisible={data.isVisible}/>
    </div>
);

export default connectViewToControllers(ArticlesPage, {data: rootNavigationController});
