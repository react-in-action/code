import Post from ‘./Post’;
// ..
render() {
  return (
    <div className=”posts”>
      this.state.loaded ?
      state.posts.map(post => <Post post={post}/>)
      :
      <div>Loading!</div>
    <div />
  );
}
