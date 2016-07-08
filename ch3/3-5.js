const Counter = React.createClass({
    getInitialState: function() {
        return {
          count: 0
        };
    },
    onButtonClick: function() {
        this.setState(function(previousState, currentProps) {
            return {
                count: previousState.count + currentProps.incrementBy
            };
        });
    },
    render: function() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.onButtonClick}>+</button>
            </div>
        )
    }
})

ReactDOM.render(
  <Counter incrementBy={1}/>,
  document.getElementById('container')
);
