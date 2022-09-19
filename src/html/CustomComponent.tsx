import React from "react";
import Hello from "../components/Hello";

type Props = {};
// If you want to import the props of another component then you can use React.componentProps followed by the component name
const CustomComponent = (props: React.ComponentProps<typeof Hello>) => {
  return <div>{props.fname.first}</div>;
};

export default CustomComponent;
