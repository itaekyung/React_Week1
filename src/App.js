import React from "react";

function GrandFather() {
  return <Mother />;
}
function Mother() {
  return <Son />;
}

function Son() {
  return <div> 나는 아들 </div>;
}

function App() {
  return <GrandFather />;
}

export default App;
