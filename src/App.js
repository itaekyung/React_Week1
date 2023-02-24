import React, { useState } from "react";

function App() {
  // hook , 리액트에서 제공하는 함수
  // const [state, setState] = useState("초기값");
  // const [count, setCount] = useState(0);
  // const [todoList, setTodoList] = useState([]);
  // useState, useEffect, useContext, useMemo
  // useDispatch,
  // const [name, setName] = useState("김할아버지");
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  return (
    <div>
      <form
        onSubmit={function () {
          alert(
            `고객님이 입력하신 아이디는 ${id}이며, 비밀번호는 ${pw} 입니다.`
          );
          setId(""); // 초기화
          setPw(""); // 초기화
        }}
      >
        아이디 :{" "}
        <input
          type="text"
          required
          value={id}
          onChange={function (event) {
            // console.log(event.target.value);
            setId(event.target.value);
          }}
        />
        <br />
        비밀번호 :{" "}
        <input
          type="password"
          value={pw}
          required
          onChange={function (event) {
            setPw(event.target.value);
          }}
        />
        <br /> <input type="submit" value="로그인" />
      </form>
    </div>
  );
}

export default App;
