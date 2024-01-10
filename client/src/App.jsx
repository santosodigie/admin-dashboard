import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Topbar from "./components/topbar/Topbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <Topbar />
      </div>
    </>
  );
}

export default App;
