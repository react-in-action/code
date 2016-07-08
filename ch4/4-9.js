import fetch from 'isomorphic-fetch';

// …

componentDidMount() {
        fetch(‘http://localhost:3500/posts?_limit=25’)
                .then(res => res.json())
                .then(posts => {
                    this.setState({
                        posts: {
                            posts, //#B
                        },
                        loaded: true, //#C
                    });
                });
            }
            //…
