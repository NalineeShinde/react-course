import React from "react";

class About extends React.Component {
  constructor() {
    super();
    console.warn(
      "Constructor Call used if we want to initialise variable before component load"
    );
    this.state = {
      name: "anil",
      age: 30,
    };
  }
  componentDidMount() {
    console.warn("Component Did Mount used to call api");
  }
  componentDidUpdate() {
    console.warn("Component Did Update used when sate is updated");
    alert("name updated");
  }
  render() {
    console.warn("render");
    return (
      <div>
        <h2>About Us Page</h2>
        <h3>{this.state.name}</h3>
        <h3>{this.state.age}</h3>

        <button
          onClick={() => {
            this.setState({ name: "anil chandgude" });
          }}
        >
          Update State
        </button>
      </div>
    );
  }
}

export default About;
// constructor(){}
// componentDidMount(){}
// componentDidUpdate(){}
// componentWillUnmount(){}
// state behaves like a variable we can store any data like array,string,nuber,obj
// when we insert/update any dada in state it will update whole component and the virtual DOM check data is updated/Not
