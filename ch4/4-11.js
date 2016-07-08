// …
render(){
  return (
    <div className="posts">
      {
        this.state.loaded ?
        this.state.posts.map(post => {
          return (
            <div className="post">
              {post.content}
            </div>
          );
        })
        :
        <div className="loader">
          Loading!
        </div>
      }
    </div>
  );
}
//…
