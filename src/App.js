import React from "react";

// props를 통해 부모 -> 자식 데이터가 전달됐다.
function Son(props) {
  return <div>나는 {props.GrandFatherName}의 손자에요!</div>;
}

function Mother(props) {
  return <Son GrandFatherName={props.GrandFatherName} />; // 부모 컴포넌트에서 자식 컴포넌트에게 정보를 내려줌
}

function GrandFathr() {
  const name = "나할범";
  return <Mother GrandFatherName={name} />;
}

function App() {
  return <GrandFathr />;
}

export default App;
