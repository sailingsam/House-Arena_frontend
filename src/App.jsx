import { useState } from "react";
import "./Prelaunch";
import Prelaunch from "./Prelaunch";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <div className="w-1"> */}
        <Prelaunch />
      {/* </div> */}
    </div>
  );
}

export default App;
