const UserProfile = (props) => {
    return (<img src={`https://cdn.example.com/${this.props.username}`}/>);
};
UserProfile.propTypes = {
    pagename: React.PropTypes.string
};

UserProfile.defaultProps = {
    pagename: 'Mark'
};

const UserProfileLink = (props) => {
    return (
        <a href={`https://ifelse.io/${this.props.username}`}>
            {this.props.username}
        </a>
    );
};

const UserCard = (props) => {
    #C
    return (
        <div>
          <UserProfile username={this.props.username}/>
          <UserProfileLink username={this.props.username}/>
        </div>
    );
};

ReactDOM.render(
  <UserProfile username="Mark"/>,
  document.getElementById('container')
);
