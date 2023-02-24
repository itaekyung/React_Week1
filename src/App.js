import logo from "./logo.svg";
import "./App.css"; //수입

function App() {
  // 여기가 자바스크립트를 쓸 수 있는 영역입니다.
  // const x = 1;
  // funcion test () {}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); // return 안이 JSX(JS+XML) 문법 사용
  // return 안에서 자바스크립트 요소 쓰고 싶으면 {} 사용할것
  // 컴포넌트의 이름은 무조건 대문자로 시작, 폴더는 소문자로 시작하는 카멜케이스
}

export default App; //수출
