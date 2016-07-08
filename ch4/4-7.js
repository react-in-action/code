import React from 'react';

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            posts: {
                all: [],
                filtered: []
            },
            category: null,
            filters: {
                image: null,
                link: null,
                categories: []
            },
            loaded: false,
            showBanner: false
        };
    }

    render() {
        return (
            <div className="app">
                Letters Social— coming soon!
            </div>
        );
    }
}
