import React, { useEffect, useRef, useContext } from "react";
import AuthContext from "../../Context/auth-context";
import classes from "./Cockpit.css";

const cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    toggleBtnRef.current.click();
  }, []);

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
  });

  let assignedClasses = [];

  let btnClass = "";

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red);
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold);
  }

  console.log("Assigned Classes", assignedClasses);

  return (
    <div className={classes.Cockpit}>
      <h1 className="App-title">{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is working</p>
      <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
      <AuthContext.Consumer>
        {(context) => <button onClick={authContext.login}>Log in</button>}
      </AuthContext.Consumer>
    </div>
  );
};

export default React.memo(cockpit);
