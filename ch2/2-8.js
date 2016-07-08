// ...
var CreateComment = React.createClass({
    // ...
    render: function() {
        return (
            <form onSubmit={this.handleSubmit} className="createComment">
                <input type="text" placeholder="Your name" value={this.state.user} onChange={this.handleUserChange}/>
                <input type="text" placeholder="Thoughts?" value={this.state.content} onChange={this.handleContentChange}/>
                <input type="submit" value="Post"/>
            </form>
        )
    }
});

var CommentBox = React.createClass({
    // ...
    render: function() {
        return (
            <div className="commentBox">
                <Post id={this.props.post.id} content={this.props.post.content} user={this.props.post.user}/> {this.state.comments.map(function(comment) {
                    return (<Comment key={comment.id} content={comment.content} user={comment.user}/>)
                })
}
                <CreateComment onCommentSubmit={this.handleCommentSubmit}/>//#D
            </div>
        )
    }
});

var mountTarget = document.getElementById('ourFirstApp');

ReactDOM.render(<CommentBox comments={data.comments}post={data.post}/>, mountTarget);
