     import React from "react";
      import ReactDOM from "react-dom/client";

   //React.createElement ==>ReactElement-JS Object ==> HTMLElement (render)  
      const headin=React.createElement("h1",
        {id:"heading"},
        "my name is kaustubh sawant")
      const root=ReactDOM.createRoot(document.getElementById("root"))
      root.render(headin);

      //JSX ==>React.createElement ==>ReactElement-JS Object ==> HTMLElement (render) 
      //React element
      const jsxHeading=<h1 id="heading" tabIndex="1">This is Jsx</h1>
      root.render(jsxHeading);


        //React componenet
      
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
// const headin=React.createElement(
//         "div",
//         {id:"parent"},
//         [React.createElement("div",{id:"child"},[
//                 React.createElement("h1",{},"my name is kaustubh"),
//                 React.createElement("h2",{},"this is react")
//         ]),React.createElement("div",{id:"child2"},[
//                 React.createElement("h1",{},"my name is kaustubh"),
//                 React.createElement("h2",{},"this is react")
//         ])])


// const root=ReactDOM.createRoot(document.getElementById("root"));
// root.render(headin);




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
//npm doesnot have a full form though some say node package manager it manages packet it is not its full form 
//React element is an object once it renders it becomes html
//JSX is not html inside javascript it is different its just html like syntax
//JSX is different and react is different
//JSX is different than javascript
//JSX is transpiled into js by parcel using babel
//in JSX for class name we give className=""  and in HTML we give class="" both are different
//In JSX Attributes are given using camel case
//IF you are writng multiple lines of JSX code then it should be wrapped in ();
//IF you write single line of JSX code then you can use (); or without bracket both are valid JSX 
 //React have basically two types of components Class based components-OLD and Functional componenets-NEW