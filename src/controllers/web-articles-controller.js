import ArrayController from "../framework/alto/data/controller/array_controller";
import reactOriginHero from '../images/christopher-chedeau-react-origin.png';
import glimmerOriginHero from '../images/tom-dale-glimmer-origin.png';

const webArticlesController = ArrayController.create({

    data: [{
        title: "React's Architecture",
        subTitle: "Origin",
        hero: reactOriginHero,
        heroCreds: "Christopher Chedeau | Facebook",
        date: "05/29/2018",
        author: "Chad Eubanks",
        url: "/articles/react-architecture"
    },{
        title: "Making the jump: Glimmer",
        subTitle: "Origin",
        hero: glimmerOriginHero,
        date: "05/20/2018",
        heroCreds: "Tom Dale | LinkedIn",
        author: "Chad Eubanks",
        url: "/articles/glimmer"
    },{
        title: "Redux",
        date: "05/11/2018",
        author: "Chad Eubanks",
        url: "/articles/redux"
    },{
        title: "Diving Into Browsers",
        date: "04/16/2018",
        author: "Chad Eubanks",
        url: "/articles/diving-into-browsers"
    },{
        title: "CSS Modules",
        date: "04/16/2018",
        author: "Chad Eubanks",
        url: "/articles/css-modules"
    }]

});

export default webArticlesController;

/*
    {
        title: "React's Architecture",
        subTitle: "Origin",
        hero: null,
        heroCreds: "Christopher Chedeau | Facebook"
    }
 */