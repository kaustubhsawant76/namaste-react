// {/* <div id="parent">
//       <div id="child">
//         <h1>my name is kaustubh</h1>
//         <h2>i am h2 tag</h2>
//       </div>
//       <div id="child2">
//       <h1>my name is kaustubh</h1>
//       <h2>i am h2 tag</h2>
//       </div>
//       </div> */}
      import React from "react";
      import ReactDOM from "react-dom/client";
const headin=React.createElement(
        "div",
        {id:"parent"},
        [React.createElement("div",{id:"child"},[
                React.createElement("h1",{},"my name is kaustubh"),
                React.createElement("h2",{},"this is react")
        ]),React.createElement("div",{id:"child2"},[
                React.createElement("h1",{},"my name is kaustubh"),
                React.createElement("h2",{},"this is react")
        ])])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(headin);




// const headin=React.createElement("h1",{id:"element",xyz:"abc"},"hi from react");
    
// // console.log(headin); //it is an object
//         const root=ReactDOM.createRoot(document.getElementById("root"));
//         root.render(headin);


// // in node modules folder parcel have many other dependencies and those may have other that is known as transitive dependencies and that is why the folder size is huge
// // each dependencies have their own package.json and package-lock.json
// ^=caret updates smaller changes in latest version
// ~=tilda upgrades to bigger changes in latest version
//if you have package.json and package-lock.json you can regenerate node modules
// npx means executing a package