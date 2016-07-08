// ...
		var Post = React.createClass({
		    propTypes: {
		        user: React.PropTypes.string.isRequired, //#A
		        content: React.PropTypes.string.isRequired, //#A
		        postID: React.PropTypes.string.isRequired, //#A
		    },
		    render: function() {
		        return (
		            React.createElement('div', {
		                    className: 'post'
		                },
		                React.createElement('h2', {
		                        className: 'postAuthor',
		                        postID: this.props.postID
		                    }, //#B
		                    this.props.user, //#B
		                    React.createElement('span', {
		                            className: 'postBody'
		                        },
		                        this.props.content //#B
		                    )
		                )
		            )
		        );
		    }
		});

		var Comment = React.createClass({
		    propTypes: {
		        id: React.PropTypes.string.isRequired,
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
		                    this.props.user, //#B
		                    React.createElement('span', {
		                            className: 'commentContent'
		                        },
		                        this.props.content //#B
		                    )
		                )
		            )
		        )
		    }
		});
// ...
