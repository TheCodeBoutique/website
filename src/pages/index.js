import React from 'react'
import '../common_styles/common.css';
import styles from './index.module.css';
import rootNavIcon from '../images/root-nav-icon.png';
import connectViewToControllers from "../framework/alto/data/controller/connect_controller";
import rootNavigationController from "../controllers/root-navigation-controller";
import RootNavigationView from "../components/rootNavigationView/root-navigation-view";
import LandingScreen from "../components/landingScreen/landing-screen";
import IntroScreen from "../components/introScreen/intro-screen";
import EngineeringScreen from "../components/engineeringScreen/engineering-screen";
import TrainingScreen from "../components/trainingScreen/training-screen";
import OpenSourceScreen from "../components/openSourceScreen/open-source-screen";
import CredoScreen from "../components/credoScreen/credo-screen";

const IndexPage = ({
                       data
                   }) => (
    <div className={styles.base}>

        <img className={styles.rootNavIcon} src={rootNavIcon} alt="root-nav" onClick={() => {
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
