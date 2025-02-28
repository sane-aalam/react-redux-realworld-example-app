import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [firstCounter, setFirstCounter] = useState(0);
  const [secondCounter, setSecondCounter] = useState(100);

  const incrementButtonClicker = () => {
    console.log("Button is clicked!");
    setFirstCounter(firstCounter + 1);
  };

  const decrementButtonClicker = () => {
    console.log("Button is clicked!");
    setSecondCounter(secondCounter - 1);
  };

  // first called hona chahiye
  // {component did mount- component did update - component will unmount}
  useEffect(() => {
    console.log("useFffect is called!");
  }, [firstCounter]);

  // useEffect(() => {
  //   console.log("useFffect is called!");
  // }, [firstCounter,secondCounter]);

  return (
    <div>
      <h1>{firstCounter}</h1>
      <h2>{secondCounter}</h2>
      <button onClick={() => incrementButtonClicker()}>click button</button>
      <button onClick={() => decrementButtonClicker()}>click button</button>
    </div>
  );
};

export default App;
