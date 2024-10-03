import React from "react";
import ReactDom from "react-dom/client";

// React.createElement => Object => HTML Element (render)

/* React Fundamentals
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is h1 tag"),
    React.createElement("h2", {}, "This is h2 tag"),
  ]),
]);
*/

// JSX
const heading = <h1>React using JSX</h1>;

//* React Functional Components
const Header = () => <h1>Namaste React with Functional Component</h1>;

const Header2 = () => (
  <>
    {heading}
    <Header />
    <h1>Namaste React with Functional Component2</h1>;
  </>
);

const root = ReactDom.createRoot(document.getElementById("root"));

// root.render(parent);
// root.render(heading);
root.render(<Header2 />);
