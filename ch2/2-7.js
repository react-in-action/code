var CommentBox = React.createClass({
    propTypes: {
        post: React.PropTypes.object,
        comments: React.PropTypes.arrayOf(React.PropTypes.object),
    },
    getInitialState: function() {
        return {
            comments: this.props.comments //#A
        };
    },
    handleCommentSubmit: function(comment) {
        var comments = this.state.comments; //#B
        // note that we didn’t directly modify state
        comment.id = Date.now(); //#B
        var newComments = comments.concat([comment]); //#B
        this.setState({ //#B
            comments: newComments //#B
        }); //#B
    },
    render: function() {
        return (
            React.createElement(‘div’, {
                    className: ‘commentBox’
                },
                React.createElement(Post, {
                    id: this.props.post.id, //#C
                    content: this.props.post.content, //#C
                    user: this.props.post.user, //#C
                }),
                this.state.comments.map(function(comment) { //#D
                    return React.createElement(Comment, { //#D
                        key: comment.id, //#D
                        content: comment.content, //#D
                        user: comment.user, //#D
                    })
                }),
                React.createElement(CreateComment, {
                    onCommentSubmit: this.handleCommentSubmit //#E
                })
            )
        )
    }
});
ReactDOM.render(React.createElement(CommentBox, {
    comments: data.comments,
    post: data.post,
}), mountTarget);
