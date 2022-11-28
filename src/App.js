import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/Header";


// const heading2 = React.createElement("h2",{},"Hello React");
 const root2 = ReactDOM.createRoot(document.getElementById("root2"));

//Using CreateElement
// const header = React.createElement("div",{class:"title"},
// [React.createElement("h1",{},"Namaste Using CreateElement"),
// React.createElement("h2",{},"Namaste Using CreateElement"),
// React.createElement("h3",{},"Namaste Using CreateElement")
// ])
// root2.render(header);

//Using JSX
// const heading = (
//     <div className="title">
//         <h1>Namaste using JSX</h1>
//         <h2>Namaste using JSX</h2>
//         <h3>Namaste using JSX</h3>
//     </div>
// )
// root2.render(heading);

//Functional component

// Child Component
const Child = () =>
{
    return (<div>
        <h1>Inside Child</h1>
    </div>)
}
const HeadComponent = () =>
{
    return( <div className="parent">
        <Child/>
        <h1>Namaste inside Functional Component</h1>
         <h2>Namaste inside Functional Component</h2>
         <h3>Namaste inside Functional Component</h3>
    </div>)
   
    
}
root2.render(
<>
<HeaderComponent/>
<HeadComponent/>
</>);





