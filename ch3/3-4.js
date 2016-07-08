const ShallowMerge = React.createClass({
    getInitialState: function() {
        return {
            user: {
                name: 'Mark',
                colors: {
                    favorite: ''
                }
            }
        };
    },
    onButtonClick: function() {
        this.setState({
            user: {
                colors: {
                    favorite: 'blue'
                }
            }
        });
    },
    render: function() {
        return (
            <div>
                <h1>My favorite color is {this.state.user.colors.favorite}
                    and my name is
                </h1>
                <button onClick={this.onButtonClick}>show the color!</button>
            </div>
        )
    }
})

ReactDOM.render(
    <ShallowMerge incrementBy={1}/>,
    document.getElementById('container')
  );
