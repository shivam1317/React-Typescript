import React, { useRef, useEffect } from "react";

type Props = {};

const UseRef = (props: Props) => {
  // we have to specify the type of input referance according to your html element
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default UseRef;
