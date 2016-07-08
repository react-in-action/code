const ParentComponent = React.createClass({
    getDefaultProps: function() {
        console.log('ParentComponent: getDefaultProps');
    },
    getInitialState: function() {
        console.log('ParentComponent: getInitialState');
        return {text: ''};
    },
    componentWillMount: function() {
        console.log('ParentComponent: componentWillMount');
    },
    componentDidMount: function() {
        console.log('ParentComponent: componentDidMount');
    },
    componentWillUnmount: function() {
        console.log('ParentComponent: componentWillUnmount');
    },
    onInputChange: function(e) {
        this.setState({text: e.target.value});
    },
    render: function() {
        console.log('ParentComponent: render');
        return (
            <div className="container">
                <h2>Let's learn about rendering and lifecycle methods!</h2>
                <input value={this.state.text} onChange={this.onInputChange}/>
                <ChildComponent text={this.state.text}/>
            </div>
        );
    }
});
