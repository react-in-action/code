// ...
var mountTarget = document.getElementById('ourFirstApp');
var Post = React.createClass({
    propTypes: {
        user: React.PropTypes.string.isRequired, //#A
        content: React.PropTypes.string.isRequired, //#A
        id: React.PropTypes.number.isRequired, //#A
    },
    render: function() {
        return (
            React.createElement('div', {
                    className: 'post'
                },
                React.createElement('h2', {
                        className: 'postAuthor',
                        id: this.props.id
                    }, //#B
                    this.props.user, //#B
                    React.createElement('span', {
                            className: 'postBody'
                        },
                        this.props.content //#B
                    )
                ),
                this.props.children
            )
        );
    }
});

var Comment = React.createClass({
    propTypes: {
        id: React.PropTypes.number.isRequired,
        content: React.PropTypes.string.isRequired,
        user: React.PropTypes.string.isRequired,
    },
    render: function() {
        return (
            React.createElement('div', {
                    className: 'comment'
                },
                React.createElement('h2', {
                        className: 'commentAuthor'
                    },
                    this.props.user,
                    React.createElement('span', {
                            className: 'commentContent'
                        },
                        this.props.content
                    )
                )
            )
        );
    }
});

var App = React.createElement(Post, {
        id: 1,
        content: " said: This is a post!",
        user: 'mark',
    },
    React.createElement(Comment, {
            id: 2,
            user: 'bob',
            content: " commented: wow! how cool!"
        },
        null
    )
);

ReactDOM.render(App, mountTarget);
// ...
