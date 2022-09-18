import React from "react";

type Props = {
  // this is the data type of component
  children: React.ReactNode;
};

const Comp1 = (props: Props) => {
  return <div>{props.children}</div>;
};

export default Comp1;
