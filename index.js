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
    return React.createElement(
      "h1",
      {
        title: "Hello react",
        className: "heading",
      },
      "hello react js"
    );
  }
}
const reactElement = React.createElement(Heading)
ReactDOM.render(reactElement, container);