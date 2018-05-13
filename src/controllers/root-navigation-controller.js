import Controller from "../framework/alto/data/controller/controller";

const rootNavigationController = Controller.create({

    data: {
        isVisible: false
    },

    showRootNavigation: () => {
        rootNavigationController.set('isVisible', true);
    },

    hideNavigationController: () => {
        rootNavigationController.set('isVisible', false);
    }

});

export default rootNavigationController;
