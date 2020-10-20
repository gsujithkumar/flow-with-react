import React from "react";

type Props = {
  foo: number,
  bar?: string,
};

function MyFuncComponent(props: Props):any {
  // props.doesNotExist; // Error! You did not define a `doesNotExist` prop.

  return <div>{props.bar}</div>;
}

// MyFuncComponent.defaultProps = {
//     foo: 42, // ...but we have a default prop for foo.
//   };

export default MyFuncComponent;
