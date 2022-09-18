import React from "react";
import Login from "./Login";
import { ProfileProps } from "./Profile";

type Props = {
  LoggedIn: boolean;
  // datatype for react component is React.ComponentType
  // here we have to also define the type for props of this component which it's going to use
  Component: React.ComponentType<ProfileProps>;
};
// here we will render the Component if user is logged in otherwise we will render the Login component
const Private = ({ LoggedIn, Component }: Props) => {
  if (LoggedIn) {
    return <Component name="shivam" />;
  } else {
    return <Login />;
  }
};

export default Private;
