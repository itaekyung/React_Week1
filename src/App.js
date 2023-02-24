import React, { useState } from "react";

function App() {
  // hook , 리액트에서 제공하는 함수
  // const [state, setState] = useState("초기값");
  // const [count, setCount] = useState(0);
  // const [todoList, setTodoList] = useState([]);
  // useState, useEffect, useContext, useMemo
  // useDispatch,
  // const [name, setName] = useState("김할아버지");
  const [fruit, setFruit] = useState("");
  return (
    <div>
      과일 :{" "}
      <input
        value={fruit}
        onChange={function (event) {
          // console.log(event.target.value);
          setFruit(event.target.value);
        }}
      />
      <br />
      {fruit}
    </div>
  );
}

export default App;
