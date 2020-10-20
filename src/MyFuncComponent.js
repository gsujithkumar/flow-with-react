import React from "react";

type Props = {
  foo: number,
  bar?: string,
};

function MyFuncComponent(props: Props):any {
  // props.doesNotExist; // Error! You did not define a `doesNotExist` prop.

  return <div><span className="App-header-text">foo : </span>{props.foo}</div>;
}

 MyFuncComponent.defaultProps = {
    foo: 10,
   };

export default MyFuncComponent;
