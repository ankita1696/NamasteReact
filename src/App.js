import React from "react";
import ReactDOM from "react-dom/client";

const heading2 = React.createElement("h2",{},"Hello React");
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(heading2)

console.log("Hi");