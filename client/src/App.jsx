import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/NewUser/NewUser";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Topbar />
        <div className="containers flex mt-3">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/user/:userId" element={<User />} />
            <Route path="/newUser" element={<NewUser />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
