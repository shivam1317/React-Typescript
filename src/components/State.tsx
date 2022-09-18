import React, { useState } from "react";
type Props = {};
// defining types for state variables
type Authuser = {
  name: string;
  email: string;
};

const State = (props: Props) => {
  // Here we don't have to explicitely define the data type for state variable as typescript will automatically know it by initial value
  const [loggedin, setLoggedIn] = useState(false);
  // If you don't know the initial type of your state variable or you want to initialise it with null then you have to explicitly specify the type
  // You can specify the type for useState like this:
  const [loggedin1, setLoggedIn2] = useState<null | Authuser>(null);
  const loginHandler = () => {
    setLoggedIn(true);
  };
  const logoutHandler = () => {
    setLoggedIn(false);
  };
  const loginHandler1 = () => {
    setLoggedIn2({
      name: "shivam",
      email: "shivam@xyz.com",
    });
  };
  const logoutHandler1 = () => {
    setLoggedIn2(null);
  };
  return (
    <div>
      <h2>{loggedin ? "Logged in" : "Logged out"}</h2>
      <button onClick={loginHandler}>Login</button>
      <button onClick={logoutHandler}>Logout</button>
      <br />
      <h2>Your name is: {loggedin1?.name}</h2>
      <h2>Your email is: {loggedin1?.email}</h2>
      <button onClick={loginHandler1}>Login</button>
      <button onClick={logoutHandler1}>Logout</button>
    </div>
  );
};

export default State;
