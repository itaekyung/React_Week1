import React, { useState } from "react";

function App() {
  // hook , 리액트에서 제공하는 함수
  // const [state, setState] = useState("초기값");
  // const [count, setCount] = useState(0);
  // const [todoList, setTodoList] = useState([]);
  // useState, useEffect, useContext, useMemo
  // useDispatch,
  // const [name, setName] = useState("김할아버지");
  let [btn, setBtn] = useState(0);
  return (
    <div>
      <div>{btn}</div>
      <button
        onClick={() => {
          setBtn((btn += 1));
        }}
      >
        + 1
      </button>
      <button
        onClick={() => {
          setBtn((btn -= 1));
        }}
      >
        -1
      </button>
    </div>
  );
}

export default App;
