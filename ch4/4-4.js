const ChildComponent = React.createClass({
    //...
    shouldComponentUpdate: function(nextProps, nextState) {
        console.log('<ChildComponent/> - shouldComponentUpdate()');
        console.log('nextProps: ', nextProps);
        console.log('nextnextState: ', nextState);
        return true;
    },
    componentWillUpdate: function(nextProps, nextState) {
        console.log('<ChildComponent/> - componentWillUpdate');
        console.log('nextProps: ', nextProps);
        console.log('nextState: ', nextState);
    },
    componentDidUpdate: function(previousProps, previousState) {
        console.log('ChildComponent: componentDidUpdate');
        console.log('previousProps:', previousProps);
        console.log('previousState:', previousState);
    },
    //...
});
