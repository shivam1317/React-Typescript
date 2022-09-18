import React from "react";
// You can also pass the styles as props
type Props = {
  // data type of css properties is React.CSSProperties
  style: React.CSSProperties;
};

const StylesAsProp = (props: Props) => {
  return <div style={props.style}>StylesAsProp</div>;
};

export default StylesAsProp;
