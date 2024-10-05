import React from "react";
import ReactDom from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

/** App Layout
 * Header
 * Body
 * - Search Box
 * - Restaurant Container List
 * - Restaurant Card
 *   - Image
 *   - Name
 *   - Cusine
 *    Rating
 * Footer
 * - Copyright
 * - Reference Links
 * - Address
 *  */

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
/* const heading = <h1>React using JSX</h1>;

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
root.render(<Header/>);

*/

// root.render(parent);
// root.render(heading);
// root.render(<Header2 />);

/* Swiggy APIs:
https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&page_type=DESKTOP_WEB_LISTING
https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING
https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&page_type=DESKTOP_WEB_LISTING
*/
