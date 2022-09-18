import { createContext, useState } from "react";
type userContextProvierProps = {
  children: React.ReactNode;
};
// types for user state
type AuthUser = {
  name: string;
  email: string;
};
// Defining types for UserContext which contains 2 things: state variable and setstate function
type UserContextType = {
  user: null | AuthUser;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};
// creating context and providing types to it
// export const UserContext = createContext<UserContextType | null>(null);
// If you are sure about the value of context will always change in future then you can do type assertion by specifying an empty object as UserContextType and with this you don't have to check for null value everytime
export const UserContext = createContext({} as UserContextType);

// Creating UserContext Provider
export const UserContextProvider = ({ children }: userContextProvierProps) => {
  // defining user state and we are gonna pass it in context
  const [user, setUser] = useState<null | AuthUser>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
