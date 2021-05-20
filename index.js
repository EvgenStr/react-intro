"use strict";

const container = document.getElementById("root");
// const reactElement = React.createElement(
//   "h1",
//   {
//     title: "Hello react",
//     className: "heading",
//   },
//   "hello react js"
// );
// ReactDOM.render(reactElement, container);

class Heading extends React.Component {
  render() {
    const { name, className, children } = this.props;
    return React.createElement(
      "h1",
      {
        title: "Hello react",
        className: className,
      },
      `hello ${name}`,
      ...children
    );
  }
}
const reactElement = React.createElement(
  Heading,
  { name: "js", className: "heading" },
  "test lorem",
  "children"
);
ReactDOM.render(reactElement, container);
