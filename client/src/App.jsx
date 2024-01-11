import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App ">
        <Topbar />
        <div className="containers flex mt-3">
          <Sidebar />
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
