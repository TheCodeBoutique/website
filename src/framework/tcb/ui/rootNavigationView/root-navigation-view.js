import React from 'react'
import styles from './root-navigation-view.module.css';
import closeIcon from '../../../../images/close-icon.png';
import rootNavigationController from "../../../../controllers/root-navigation-controller";
import connectViewToControllers from "../../../alto/data/controller/connect_controller";

const RootNavigationView = ({
                                isVisible
                            }) => {
    return isVisible ? (
        <div className={styles.base}>
            <div className={styles.masterView}>
                <section className={styles.topToolbar}>
                    <img className={styles.closeIcon} src={closeIcon} onClick={() => {
                        rootNavigationController.hideNavigationController()
                    }}/>
                    <span className={styles.title}>Menu</span>
                </section>
            </div>
        </div>
    ) : null;
};

export default connectViewToControllers(RootNavigationView, {data: rootNavigationController});



