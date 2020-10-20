import * as React from "react";
import "./App.css";
import MyFuncComponent from "./MyFuncComponent";
import MyComponent from "./MyClassComponent";

function App(): mixed {
  return (
    <div className="App">
      <span className="App-header-text">Functional Component :</span>
      <br />
      <br />
      <span className="App-header-text">foo is supplied : </span>
      <MyFuncComponent foo={42} />
      <span className="App-header-text">default Value of foo prop : </span>
      <MyFuncComponent />
      <br />
      <span className="App-header-text">Class Component : </span>
      <br /> <br />
      <span className="App-header-text"> All default Values : </span>
      <MyComponent />
      <br />
      <span className="App-header-text">default Value of foo prop : </span>
      <MyComponent bar={"this is from App.js"} />
      <br />
      <span className="App-header-text"> default Value of bar prop : </span>
      <MyComponent foo={5000} />
    </div>
  );
}

export default App;
