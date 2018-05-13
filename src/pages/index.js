import React from 'react'
import '../common_styles/common.css';
import styles from './index.module.css';
import rootNavIcon from '../images/root-nav-icon.png';
import connectViewToControllers from "../framework/alto/data/controller/connect_controller";
import rootNavigationController from "../controllers/root-navigation-controller";
import RootNavigationView from "../framework/tcb/ui/rootNavigationView/root-navigation-view";
import LandingScreen from "../framework/tcb/ui/landingScreen/landing-screen";
import IntroScreen from "../framework/tcb/ui/introScreen/intro-screen";
import EngineeringScreen from "../framework/tcb/ui/engineeringScreen/engineering-screen";
import TrainingScreen from "../framework/tcb/ui/trainingScreen/training-screen";
import OpenSourceScreen from "../framework/tcb/ui/openSourceScreen/open-source-screen";
import CredoScreen from "../framework/tcb/ui/credoScreen/credo-screen";

const IndexPage = ({
                       data
                   }) => (
    <div className={styles.base}>

        <img className={styles.rootNavIcon} src={rootNavIcon} onClick={() => {
            rootNavigationController.showRootNavigation()
        }}/>

        <div className={styles.scrollView}>
            <LandingScreen/>
            <IntroScreen/>
            <EngineeringScreen/>
            <TrainingScreen/>
            <OpenSourceScreen/>
            <CredoScreen/>
        </div>

        <RootNavigationView isVisible={data.isVisible}/>

    </div>
);

export default connectViewToControllers(IndexPage, {data: rootNavigationController});
