import React, { useState } from "react";

function App() {
  // hook
  // useState, useEffect, useContext,
  const [fruit, setFruit] = useState("");

  return (
    <div>
      과일 :{" "}
      <input
        value={fruit}
        onChange={(e) => {
          setFruit(e.target.value);
        }}
        type="text"
      />
      {fruit}
    </div>
  );
}

export default App;
