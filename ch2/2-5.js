var CreateComment = React.createClass({
    propTypes: {
        handleCommentSubmit: React.PropTypes.func.isRequired,
        content: React.PropTypes.string,
    },
    getInitialState: function() {
        return {
            content: '',
            author: ''
        };
    },
    handleAuthorChange: function(event) {
        this.setState({
            author: event.target.value
        });
    },
    handleTextChange: function(event) {
        this.setState({
            content: event.target.value
        });
    },
    handleSubmit: function(event) {
        event.preventDefault();
        this.props.onCommentSubmit({
            author: this.state.author.trim(),
            content: this.state.content.trim()
        });
        this.setState({
            author: '',
            text: ''
        });
    },
    render: function() {
        return React.createElement('form', {
                className: 'createComment',
                onSubmit: this.handleSubmit
            },
            React.createElement('input', {
                type: 'text',
                placeholder: 'Your name',
                value: this.state.author,
                onChange: this.handleAuthorChange
            }),
            React.createElement('input', {
                type: 'text',
                placeholder: 'Thoughts?'
            }),
            React.createElement('input', {
                type: 'submit',
                value: 'Post'
            })
        );
    }
});
