const ChildComponent = React.createClass({
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
    onInputChange: function(e) {
        this.setState({text: e.target.value}); //#A
    },
    render: function() {
        console.log('ParentComponent: render');
        return (
            <div className="container">
                <h2>
                    Learn about rendering and lifecycle methods!
                </h2>
                <input value={this.state.text} onChange={this.onInputChange}/>
                <ChildComponent text={this.state.text}/>
            </div>
        );
    }
});

ReactDOM.render(<ParentComponent/>, document.getElementById('container'));
