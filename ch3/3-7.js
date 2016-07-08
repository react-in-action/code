function Greeting(props) {
  return <div>Hello {props.for}!</div>;
}

Greeting.propTypes = {
	for: React.PropTypes.string.isRequired
};

Greeting.defaultProps = {
  	for: 'hi'
};

ReactDOM.render(<Greeting for="Mark" />, mountNode);

// Or using the ES6 arrow syntax

const Greeting = (props) => <div>Hello {props.for}</div>;//#A
//... specify props and default props same as above

ReactDOM.render(<Greeting name="Mark" />, mountNode);
