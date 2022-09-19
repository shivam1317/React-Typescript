import "./App.css";
import Changeevent from "./components/Changeevent";
import Clickevent from "./components/Clickevent";
import Hello from "./components/Hello";
import Personlist from "./components/Personlist";
import Reducer from "./components/Reducer";
import State from "./components/State";
import Status from "./components/Status";
import StylesAsProp from "./components/StylesAsProp";
import ThemeContextProvider from "./context/ThemeContext";
import Box from "./context/Box";
import { UserContextProvider } from "./context/UserContext";
import User from "./context/User";
import Mutableref from "./components/Mutableref";
import Private from "./Auth/Private";
import Profile from "./Auth/Profile";
import List from "./generics/List";
import RandomNumber from "./restriction/RandomNumber";
import Toast from "./TemplateLiteral/Toast";
import CustomButton from "./html/CustomButton";
import Text from "./Polymorphic/Text";

function App() {
  const fname = {
    first: "shivam",
    last: "boi",
  };
  const names = [
    {
      first: "shivam",
      last: "boi",
    },
    {
      first: "abhishek",
      last: "notreal",
    },
    {
      first: "hacker",
      last: "man",
    },
  ];
  return (
    <div className="App">
      <Hello name="shivam" age={20} fname={fname} />
      <Personlist names={names} />
      <Status status="success" />
      <Clickevent
        // Passing click event as a prop
        clickHandler={(event, id) => {
          console.log("Button clicked!", event, id);
        }}
      />
      <Changeevent changeHandler={(event) => console.log(event)} value="" />
      <StylesAsProp
        style={{
          backgroundColor: "#458c86",
          color: "#A5F1E9",
          padding: 10,
          width: 120,
        }}
      />
      <State />
      <Reducer />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
      <Mutableref />
      {/* Here we are passing a component as a prop and also that component have props */}
      <Private Component={Profile} LoggedIn={true} />
      {/* The below list component will only allow array of string as items and in future if we want to render array of numbers or objects then we can't do it in this way */}
      <List
        items={["s", "e", "g", "s"]}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3, 4]} onClick={(item) => console.log(item)} />
      <RandomNumber value={10} isPositive={true} />
      <Toast position="center" />
      <CustomButton variant="primary">Primary Button</CustomButton>
      <Text as="button" color="primary" size="md">
        Button
      </Text>
      <Text color="secondary" as="h1">
        Heading
      </Text>
      {/* Now we can use props of these html elements which we are passing in "as" prop */}
      <Text size="lg" as="label" htmlFor="test">
        Label
      </Text>
    </div>
  );
}

export default App;
