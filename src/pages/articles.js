import React from 'react'
import '../common_styles/common.css';
import styles from './articles.module.css';
import rootNavIcon from '../images/root-nav-icon.png';
import lightBlub from '../images/light-bulb.png';
// import tcbLogo from '../images/the-code-boutique-logo.png';
import rootNavigationController from "../controllers/root-navigation-controller";
import RootNavigationView from "../framework/tcb/ui/rootNavigationView/root-navigation-view";
import connectViewToControllers from "../framework/alto/data/controller/connect_controller";

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

            <div className={styles.cover}>
                <img className={styles.lightBlub} src={lightBlub}  alt="knowledge-bulb"/>
                {/*<img className={styles.icon} src={tcbLogo}/>*/}
                <div className={styles.seperator} />
            </div>

        </section>

        <RootNavigationView isVisible={data.isVisible}/>
    </div>
);

export default connectViewToControllers(ArticlesPage, {data: rootNavigationController});
