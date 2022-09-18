import React from "react";

// You have to define types for props
type Props = {
  name: string;
  // ? after prop name defines that the prop is optional
  age?: number;
  // Object type prop
  fname: {
    first: string;
    last: string;
  };
};

const Hello = (props: Props) => {
  // destructuring the props
  const { name, age } = props;
  return (
    <div>
      <p>
        Hello {props.name} your age is {props.age}
      </p>
      <p>
        Your Full name is {props.fname.first} {props.fname.last}
      </p>
    </div>
  );
};

export default Hello;
