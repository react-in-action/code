const ChildComponent = React.createClass({
    propTypes: {
        name: React.PropTypes.string
    },
    getInitialState: function() {
        console.log('ChildComponent: getInitialState');
        return {name: 'Mark'};
    },
    render: function() {
        console.log('ChildComponent: render');
        return (
            <div>
                Props: {this.props.name}
            </div>
        );
    }
});

const ParentComponent = React.createClass({
    getDefaultProps: function() {
        console.log('ParentComponent: getDefaultProps');
    },
    getInitialState: function() {
        console.log('ParentComponent: getInitialState');
        return {text: ''};
    },
    render: function() {
        console.log('ParentComponent: render');
        return (
            <div className="container">
                <h2>Learn about rendering and lifecycle methods!</h2>
                <input value={this.state.text} onChange={this.onInputChange}/>
                <ChildComponent text={this.state.text}/>
            </div>
        );
    }
});

ReactDOM.render(
  <ParentComponent/>,
  document.getElementById('container')
);
