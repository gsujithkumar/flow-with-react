import React from "react";
import "./App.css";
import MyFuncComponent from './MyFuncComponent';



function App():mixed {
  return (
    <div className="App">
      <MyFuncComponent foo={42} />
      {/* <MyFuncComponent  />  */}
      {/*  above component will works when default props are provided */}
    </div>
  );
}


export default App;
