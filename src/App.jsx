import React from "react";

function App() {
  const number = 11;
  const pTagstyle = { color: "red" }; // 스타일 따로 뺄 수도 있음
  return (
    <div className="test-class">
      <p>안녕하세요 리액트입니다.</p>
      {/* 주석을 사용하는 방법입니다. */}
      {/* 삼항 연산자를 사용하는 방법입니다. */}
      <p style={pTagstyle}>
        {number > 10 ? number + "은 10보다 크다" : number + "은 10보다 작다"}
      </p>
    </div>
  );
}

export default App;
