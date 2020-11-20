// import React, {Component, useState} from "react";
import ReactDOM from "react-dom";
// import ReactDOM, {useState} from "./kreact/react-dom";
// import Component from "./kreact/Component";
import React, {Component, useCallback, useMemo,  PureComponent, useState} from "react";

import "./index.css";

class ClassComponent extends Component {
  render() {
    return (
      <div className="border">
        <p>{this.props.name}</p>
      </div>
    );
  }
}

function FunctionComponent(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="border">
      <button
        onClick={() => {
          console.log("count", count); //sy-log
          setCount(count + 1);
        }}>
        {count + ""}
      </button>
      {count % 2 ? <p>{props.name}</p> : <span>omg</span>}
    </div>
  );
}

// key01 第9次作业，暗号： 椰子
function UseCallbackPage(props) {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");

  // 不缓存时候的对比
  // const addClick = () => {
  //   let sum = 0;
  //   for(let i = 0; i < count; i++) {
  //     sum += i;
  //   }
  //   return sum;
  // }
  
  const addClick = useCallback( () => {
    let sum = 0;
    for(let i = 0; i < count; i++) {
      sum += i;
    }
    return sum;
  }, [value]) // 依赖可以用改成 value, 观察与count时的不同



  return (
    <div className="border">
      <h3>UseCallbackPage</h3>
      <p>{count}</p>
      <button onClick={ () => {setCount(count + 1)}}>add</button>
      <input value={value}  onChange={event => setValue(event.target.value)} />
      <Child addClick = {addClick} />
    </div>
  )
}

class Child extends PureComponent {
  render() {
    console.log("child render");
    const {addClick} = this.props;
    return (
      <div>
        <h3>Child</h3>
        <button onClick={ () => console.log(addClick())}>add</button>
      </div>
    )
  }
}

// key02 第9次作业，暗号： 椰子
function UseMemoPage(props) {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  // 不缓存时候的对比
  // const expensive = () => {
  //   console.log("compute");
  //   let sum = 0;
  //   for (let i = 0; i < count; i++) {
  //   sum += i;
  //   }
  //   return sum;
  // };

  const expensive = useMemo( () => {
    console.log("compute");
    let sum = 0;
    for (let i = 0; i < count; i++) {
    sum += i;
    }
    return sum;
  }, [value]) // 依赖可以用改成 value, 观察与count时的不同
  return (
  <div className="border">
    <h3>UseMemoPage</h3>
    <p>expensive:{expensive}</p>
    <p>{count}</p>
    <button onClick={() => setCount(count + 1)}>add</button>
    <input value={value} onChange={event => setValue(event.target.value)} />
    </div>
  );
}

const jsx = (
  <div className="border">
    <p>全栈</p>
    <a href="https://www.kaikeba.com/">开课吧</a>
    {/* <FunctionComponent name="函数组件" />
    <ClassComponent name="类组件" /> */}
    <UseCallbackPage />
    <UseMemoPage />
  </div>
);

ReactDOM.render(jsx, document.getElementById("root"));

// 文本标签
// 原生标签
// 函数组件
// 类组件
