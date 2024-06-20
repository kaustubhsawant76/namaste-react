{/* <div id="parent">
      <div id="child">
        <h1>my name is kaustubh</h1>
        <h2>i am h2 tag</h2>
      </div>
      <div id="child2">
      <h1>my name is kaustubh</h1>
      <h2>i am h2 tag</h2>
      </div>
      </div> */}
const headin=React.createElement(
        "div",
        {id:"parent"},
        [React.createElement("div",{id:"child"},[
                React.createElement("h1",{},"my name is kaustubh"),
                React.createElement("h2",{},"i am h2")
        ]),React.createElement("div",{id:"child2"},[
                React.createElement("h1",{},"my name is kaustubh"),
                React.createElement("h2",{},"i am h2")
        ])])


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(headin);




// const headin=React.createElement("h1",{id:"element",xyz:"abc"},"hi from react");
    
// // console.log(headin); //it is an object
//         const root=ReactDOM.createRoot(document.getElementById("root"));
//         root.render(headin);