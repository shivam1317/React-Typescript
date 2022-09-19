import React from "react";

type TextOwnProps<E extends React.ElementType> = {
  size?: "lg" | "sm" | "md";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  // if we want to render different html component on the basis of "as" prop then we will give it a type React.ElementType
  as?: E;
};
// we want to use the props also for that component which user passed in as prop so that's why we will use React.ComponentProps
type Props<E extends React.ElementType> = TextOwnProps<E> &
  // we want to omit the props defined in TextOwnProps from ComponentProps
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

// if we want to pass the default element then you can write it using "=" operator as shown below we have defined div as default
const Text = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: Props<E>) => {
  // here we will set div as default element if no props given from user
  const Component = as || "div";
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
};

export default Text;
