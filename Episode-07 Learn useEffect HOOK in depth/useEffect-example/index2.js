import React, { useEffect } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = React.useState(0);

  const incrementButtonClicker = () => {
    console.log("Button is clicked!");
    setCounter(counter + 1);
  };

  // when you click on the button,Counter incrment by 1
  // App body is called again and again!
  console.log("App body is called!");

  useEffect(() => {
    console.log("only first render me call hoga bhai main!");
  }, []);

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => incrementButtonClicker()}>click button</button>
    </div>
  );
};

export default App;
