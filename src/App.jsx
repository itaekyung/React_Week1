import React from "react";

function App() {
  return <User>안녕하세요!</User>;
}

function User(props) {
  return <div>{props.children}</div>;
}

export default App;
