import React from "react";

//props를 통해 부모 -> 자식 데이터가 전달됐다.
function Son(props) {
  return <div>나는 {props.gFatherName}의 손자예요!</div>;
}

function Mother(props) {
  const name = "흥부인";
  const gFatherName = props.grandFatherName;
  return <Son motherName={name} gFatherName={gFatherName} />; // 자식 컴포넌트에게 정보 전달
}

function GrandFather() {
  const name = "나할범";
  return <Mother grandFatherName={name} />;
}

function App() {
  return <GrandFather />;
}

export default App;
