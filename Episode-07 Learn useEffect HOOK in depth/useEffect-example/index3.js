import React, { useEffect, useState } from "react";
import "./App.css";

// There are two button, when you click only first then counter-update
// Then only for first button useEffect is called
// NOTE: useEffect is called only when the state is updated
// [CURRENT STATE] => [NEW STATE] => [USEEFFECT]
// [0] => [1] => [useEffect]
// [1] => [2] => [useEffect]

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

  // Both first and second button are clicked
  // Both updated state,useEffect is called for both state update
  //   useEffect(() => {
  //     console.log("useFffect is called!");
  //   }, [firstCounter,secondCounter]);

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
