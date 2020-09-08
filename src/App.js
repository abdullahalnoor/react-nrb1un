import React, { useState } from "react";
import "./style.css";

export default function App() {
  const inputEl = React.useRef(null);
  const textArr = [
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  ];

  const [text, setText] = useState(textArr[0]);

  const [height, setHeight] = useState(0);

  React.useEffect(() => {
    console.log(inputEl.current.offsetHeight);
    setHeight(inputEl.current.offsetHeight)
  }, [text]);


  return (
    <div>
      <div className="nav">
        <button onClick={() => setText(textArr[0])}>One</button>
        <button onClick={() => setText(textArr[1])}>Two</button>
        <button onClick={() => setText(textArr[2])}>Three</button>
        <button onClick={() => setText(textArr[3])}>Four</button>
      </div>
      <div
        style={{
          height: `${height}px`,
          minHeight: `${height}px`,
          maxHeight: `${height}px`,
          overflow: "hidden",
          transition: "all 0.3s ease-in-out",
          backgroundColor: "rgba(21, 13, 0, 0.3)",
        }}
        >
        <div ref={inputEl} className="text">
          {text}
        </div>
      </div>
    </div>
  );
}
