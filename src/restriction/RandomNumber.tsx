import React from "react";
type RandomNumberType = {
  value: number;
};
// these types will allow us to use only 1 prop at a time while calling this component
type PositiveNumberType = RandomNumberType & {
  isPositive: boolean;
  // never will define that this prop should never be used here
  isNegative?: never;
  isZero?: never;
};
type NegativeNumberType = RandomNumberType & {
  isPositive?: never;
  isNegative: boolean;
  isZero?: never;
};
type ZeroType = RandomNumberType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type Props = PositiveNumberType | NegativeNumberType | ZeroType;

const RandomNumber = ({ value, isPositive, isNegative, isZero }: Props) => {
  return (
    <div>
      {value} {isPositive && "Positive"} {isNegative && "negative"}{" "}
      {isZero && "zero"}
    </div>
  );
};

export default RandomNumber;
