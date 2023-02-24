import React, { Children } from "react";

function Child({ age, name, children }) {
  console.log(age);
  console.log(name);
  console.log(children);
  return <div>Child</div>;
}

Child.defaultProps = {
  age: "기본 나이",
};

export default Child;

// props 찢기, 구조분해할당으로 명시적으로 찢어놓는게 좋다
// 컴포넌트는 JSX 파일로 보는게 보다 정확하다
// js 확장자랑 jsx는 다르지 않지만 어떤 파일이 컴포넌트 파일인지 한눈에 보기 편하게 하기 위해
// 컴포넌트 파일은 jsx파일로 명명한다.
