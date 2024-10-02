import React from "react";
import ReactDom from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is h1 tag"),
    React.createElement("h2", {}, "This is h2 tag"),
  ]),
]);

console.log(parent);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(parent);
