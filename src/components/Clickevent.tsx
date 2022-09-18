import React from "react";

type Props = {
  // If your clickHandler don't return anything then just return void
  // the data type of mouse event is below and if you want to be specific about the event then write it between <>
  // defining types for clickHandler
  clickHandler: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => void;
};

const Clickevent = (props: Props) => {
  return (
    // calling the clickhandler with parameters
    <button onClick={(event) => props.clickHandler(event, 1)}>
      Clickevent
    </button>
  );
};

export default Clickevent;
