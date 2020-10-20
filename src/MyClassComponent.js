import * as React from "react";
type Props = {
  bar: string,
  foo: number,
};
class MyComponent extends React.Component<Props> {
  props: Props;
  static defaultProps: { foo: number, bar: string };
  render(): any {
    return (
      <>
        <div><span className="App-header-text">foo : </span> {this.props.foo} </div> <br /> <div><span className="App-header-text">bar : </span> {this.props.bar} </div>
      </>
    );
  }
}
MyComponent.defaultProps = { foo: -100, bar: "this is the default text of bar prop" };

export default MyComponent;

// import * as React from "react";

// type Props = {
//   foo: number,
//   bar: string,
// };

// class MyComponent extends React.Component<Props> {
//   static defaultProps: { bar: string | "hi.....", foo: number | 10 };
//   render(): any {
//     return (
//       <div>
//    <span value="bar" />    {this.props.bar} <br />
//         {this.props.foo}
//       </div>
//     );
//   }
// }
// MyComponent.defaultProps = {bar :  'this is from default props of class'}
// export default MyComponent;
