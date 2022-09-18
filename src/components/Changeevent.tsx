import React from "react";

type Props = {
  value: string;
  // defining types for changeHandler
  changeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
// destructuring the props
const Changeevent = ({ value, changeHandler }: Props) => {
  return (
    /* 
    If you have event only as a parameter then no need to write it just write it like
    onChange = {props.changeHandler}
    but if you have more than one parameters then you have to write it
    */
    <input value={value} onChange={changeHandler} />
  );
};

export default Changeevent;
