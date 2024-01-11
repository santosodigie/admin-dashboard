import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Topbar />
        <div className="containers flex">
          <Sidebar />
          <div className="others flex-[4] ">other pages</div>
        </div>
      </div>
    </>
  );
}

export default App;
