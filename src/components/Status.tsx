import Heading from "./Heading";
import Comp1 from "./Comp1";

type Props = {
  // You can specify specific values by using union operator
  status: "loading" | "success" | "error";
};

const Status = (props: Props) => {
  return (
    <div>
      <p>Status - {props.status}</p>
      {/* If you want to use any component like this then you have to pass children props and also define it's type */}
      <Heading>This is children</Heading>
      {/* If you want to pass a component as a children then do like this: */}
      <Comp1>
        <Heading>This is heading coming from nested component</Heading>
      </Comp1>
    </div>
  );
};

export default Status;
