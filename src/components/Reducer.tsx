import React, { useReducer } from "react";
const initialstate = { count: 0 };
type Props = {};
type CounterState = {
  count: number;
};
// we are defining the possible values for type and making it strict about type
type UpdateAction = {
  type: "increment" | "decrement";
  payload: number;
};
type ResetAction = {
  type: "reset";
};
// this is called descriminated unions
type CounterAction = UpdateAction | ResetAction;

// state will have our object containing only one property "count" and action is our object which we passed during dispatch
const reducer = (state: CounterState, action: CounterAction) => {
  if (action.type === "increment") {
    return { count: state.count + action.payload };
  } else if (action.type === "decrement") {
    return { count: state.count - action.payload };
  } else if (action.type === "reset") {
    return initialstate;
  } else {
    return state;
  }
};

const Reducer = (props: Props) => {
  const [state, dispatch] = useReducer(reducer, initialstate);
  return (
    <>
      <p>Count: {state?.count}</p>
      {/* During dispatch we are providing our params for action which we will use in reducer function */}
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment by 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement by 10
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
};

export default Reducer;
