import React, { useEffect } from "react";
import "./App.css";

// useEffect is a hook that allows you to perform side effects in function components
// useEffect is a replacement for componentDidMount, componentDidUpdate, and componentWillUnmount
// useEffect is a function that takes two arguments, a callback function and an array of dependencies
// useEffect runs after every render of the component
// UseEffect runs after the first render and after every update

// useEffect(() => {,[]}

const App = () => {
  useEffect(() => {
    console.log("useEffect is called");
  });
  console.log("App body is called!");

  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
};

export default App;