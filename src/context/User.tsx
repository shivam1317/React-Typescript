import { useContext } from "react";
import { UserContext } from "../context/UserContext";

type Props = {};

const User = (props: Props) => {
  // using context
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    userContext.setUser({
      name: "shivam",
      email: "shivam@hacker.com",
    });
  };
  const handleLogout = () => {
    userContext.setUser(null);
  };
  return (
    // Using the context values
    <div>
      <p>Defining types to context API</p>
      <p>Your username is: {userContext?.user?.name}</p>
      <p>Your username is: {userContext?.user?.email}</p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default User;
