import React from "react";

type horizontal = "left" | "center" | "right";
type vertical = "top" | "center" | "bottom";

// just hover over "position" and you will see the power of template literal
type Props = {
  // we want to exclude center-center position so we can do it using Exclude functionality provided by typescript
  // also we want to allow 'center' position also so we will union that
  position: Exclude<`${horizontal}-${vertical}`, "center-center"> | "center";
};

const Toast = (props: Props) => {
  return <div>Toast</div>;
};

export default Toast;
