import React, { useState } from "react";

function App() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <div>
      아이디 :{" "}
      <input
        type="text"
        value={id}
        onChange={(e) => {
          setId(e.target.value);
        }}
      />{" "}
      <br />
      비밀번호 :{" "}
      <input
        type="password"
        value={pw}
        onChange={(e) => {
          setPw(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          alert(
            `고객님이 입력하신 아이디는 ${id}이며, 비밀번호는 ${pw}입니다.`
          );
          setId("");
          setPw("");
        }}
      >
        로그인
      </button>
    </div>
  );
}

export default App;
