import { createContext, useState } from "react";
import Banner from "./components/Banner/Banner";
import Feed from "./components/Feed/Feed";
import Login from "./components/Login/Login";
import NavBar from "./components/Navbar/NavBar";
import Signup from "./components/Signup/Signup";

export const StateContext = createContext();

function App() {
  const [joinGroup, setJoinGroup] = useState(false);
  const states = { joinGroup, setJoinGroup };
  return (
    <StateContext.Provider value={states}>
      <div className="">
        <NavBar></NavBar>
        <Banner></Banner>
        <Feed></Feed>
        <Login></Login>
        <Signup></Signup>
      </div>
    </StateContext.Provider>
  );
}

export default App;
