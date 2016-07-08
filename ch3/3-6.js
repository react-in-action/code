const Counter = React.createClass({
    propTypes: {
        incrementBy: React.PropTypes.number,
        name: React.PropTypes.string,
        counterStyle: React.PropTypes.shape({
            color: React.PropTypes.string,
            fontSize: React.PropTypes.number
        }),
        onIncrement: React.PropTypes.func.isRequired,

    },
    getDefaultProps: function() {
        return {incrementBy: 1};
    },
    getInitialState: function() {
        return {count: 0}
    },
    onButtonClick: function() {
        this.setState(function(previousState, currentProps) {
            return {
                count: previousState.count + currentProps.incrementBy
            };
        });
    },
    render: function() {
        // this.props.incrementBy = 2;
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.onButtonClick}>++</button>
            </div>
        )
    }
})

ReactDOM.render(
  <Counter incrementBy={1}/>,
  document.getElementById('container')
);
