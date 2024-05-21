{/* <div id="parent">
    <div id="child">
        <h1>This is a h1 tag.</h1>
    </div>
</div>
 */}

const heading = React.createElement(
    "div",
    {id:"parent"},
    React.createElement(
        "div",
        {id: "child"},
        React.createElement(
            "h1",
            {},
            "This is a h1 tag"
        )
    )
)


// const heading = React.createElement(
//     "h1", 
//     {id:"heading", xyz: "something"}, 
//     "Hello World from React!"
// );

console.log(heading); //object and has props and children

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);