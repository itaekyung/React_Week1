import React from "react";

function GrandFather() {
  return <Mother />;
}

function Mother() {
  return <Son />;
}

function Son() {
  return <div> 나는 아들입니다.</div>;
}

function App() {
  return (
    <div>
      <GrandFather />
    </div>
  );
}
export default App;
