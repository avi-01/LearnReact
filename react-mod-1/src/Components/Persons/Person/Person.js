import React, { Component } from "react";
import classes from "./Person.css";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";
import PropTypes from "prop-types";
import AuthContext from "../../../Context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  static contextType = AuthContext;

  componentDidMount() {
    // this.inputElement.focus();
    this.inputElementRef.current.focus();
  }

  render() {
    console.log("[Person.js] rendering....");
    return (
      <Aux>
        {this.context.authenticated ? (
          <p> Authenticated! </p>
        ) : (
          <p> Please Login</p>
        )}

        <p onClick={this.props.click}>
          Hi!!, I am {this.props.name} and I am {this.props.age} years old.
        </p>
        <p> {this.props.children} </p>
        <input
          type="text"
          // ref={(inputEL) => {this.inputElement = inputEL}}
          ref={this.inputElementRef}
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func,
};

export default withClass(Person, classes.Person);
