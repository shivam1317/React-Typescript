import React from "react";
// importing types
import { Props } from "./PersonList.types";

const Personlist = (props: Props) => {
  return (
    <div>
      <p>Person names list:</p>
      {props.names.map((ele) => {
        return (
          <p>
            {ele.first} {ele.last}
          </p>
        );
      })}
    </div>
  );
};

export default Personlist;
