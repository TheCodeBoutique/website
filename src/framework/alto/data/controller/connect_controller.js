import React from 'react';

function connectViewToControllers(WrappedComponent, controllers) {
    let mappedControllers = {};
    let mappedControllerByGuid = {};

    return class extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            Object.keys(controllers).forEach((controller) => {
                mappedControllerByGuid[controllers[controller].guid] = controller;
                mappedControllers[controller] = controllers[controller].data;
            });

            this.state = mappedControllers;
        }

        componentDidMount() {
            Object.keys(controllers).forEach((controller) => {
                controllers[controller].addChangeListener(WrappedComponent.name, this.handleChange);
            });
        }

        componentWillUnmount() {
            Object.keys(controllers).forEach((controller) => {
                controllers[controller].removeChangeListener(WrappedComponent.name);
            });
        }

        handleChange(model, controllerGuid) {
            this.setState({
                [mappedControllerByGuid[controllerGuid]]: model
            });
        }

        render() {
            return <WrappedComponent {...this.state} {...this.props} />;
        }
    }

};

export default connectViewToControllers;