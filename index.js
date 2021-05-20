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

// class Heading extends React.Component {
//   render() {
//     const { name, className, children } = this.props;
//     return React.createElement(
//       "h1",
//       {
//         title: "Hello react",
//         className: className,
//       },
//       `hello ${name}`,
//       ...children
//     );
//   }
// }
// const reactElement = React.createElement(
//   Heading,
//   { name: "js", className: "heading" },
//   "test lorem",
//   "children"
// );
// ReactDOM.render(reactElement, container);

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    // this.decrement = this.decrement.bind(this);
    // this.increment = this.increment.bind(this);
  }
  increment = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
    // ++this.state.counter;
  };
  decrement = () => {
    const { counter } = this.state;
    if (counter > 0) {
      this.setState({ counter: counter - 1 });
    }
  };
  render() {
    return React.createElement(
      React.Fragment,
      null,
      React.createElement("h1", null, this.state.counter),
      React.createElement("button", { onClick: this.decrement }, "-"),
      React.createElement("button", { onClick: this.increment }, "+")
    );
  }
}

ReactDOM.render(React.createElement(Counter), container);
