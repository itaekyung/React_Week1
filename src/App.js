import React, { useState } from "react";

function App() {
  // hook , 리액트에서 제공하는 함수
  // const [state, setState] = useState("초기값");
  // const [count, setCount] = useState(0);
  // const [todoList, setTodoList] = useState([]);
  // useState, useEffect, useContext, useMemo
  // useDispatch,
  const [name, setName] = useState("김할아버지");

  return (
    <div>
      {name}
      <br />
      <button
        onClick={function () {
          setName("박할아버지");
        }}
      >
        클릭
      </button>
    </div>
  );
}

export default App;
