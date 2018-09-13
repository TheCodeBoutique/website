import React from 'react'
import styles from './root-navigation-view.module.css';
// import closeIcon from '../../../../images/close-icon.png';
import rootNavigationController from "../../controllers/root-navigation-controller";
import connectViewToControllers from "../../framework/alto/data/controller/connect_controller";

const RootNavigationView = ({
                                isVisible
                            }) => {
    return isVisible ? (
        <div className={styles.base}>
            <div className={styles.masterView}>
                <section>
                    <ul>
                        <li>
                            <div><span>Home</span></div>
                        </li>
                        <li>
                            <div><span>Articles</span></div>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    ) : null;
};

export default connectViewToControllers(RootNavigationView, {data: rootNavigationController});



