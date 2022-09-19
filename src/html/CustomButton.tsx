import React from "react";

// if you want to pass the children to button then you have to use React.ComponentProps which will contain all the props for that HTML component
type Props = {
  variant: "primary" | "secondary";
  // we want children to be only string rather than any other html element of any other types
  children: string;
  // If you want to omit the children type from React.ComponentProps then you can use it like this
} & Omit<React.ComponentProps<"button">, "children">;

// here ...rest will be rest of the props
const CustomButton = ({ variant, children, ...rest }: Props) => {
  return (
    <div>
      <button className={`class-with-${variant}`} {...rest}>
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
