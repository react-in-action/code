// ChildComponent : getDefaultProps
// ParentComponent - getDefaultProps
// ParentComponent - getInitialState
// ParentComponent - componentWillMount
// ParentComponent - render
// ChildComponent : componentWillMount
// ChildComponent - render
// ChildComponent : componentDidMount
// ParentComponent - componentDidMount
// ParentComponent - render
// ChildComponent : componentWillReceiveProps()
// Object {text: "Mark"}  //A
// <ChildComponent/> - shouldComponentUpdate()
// nextProps:  Object {text: "Mark"}
// nextnextState:  Object {name: "Mark"}
// <ChildComponent/> - componentWillUpdate
//  nextProps:  Object {text: "Mark"}
//  nextState:  Object {name: "Mark"}
//  ChildComponent - render
//  ChildComponent - componentDidUpdate
//  previousProps:  Object {text: ""}
//  previousState:  Object {name: "Mark"}
