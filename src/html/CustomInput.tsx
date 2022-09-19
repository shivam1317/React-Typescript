import React from "react";

type Props = React.ComponentProps<"input">;

const CustomInput = ({ ...props }: Props) => {
  return (
    <div>
      <p>Input using React.ComponentProps</p>
      <input {...props} placeholder="Enter your name" />
    </div>
  );
};

export default CustomInput;
