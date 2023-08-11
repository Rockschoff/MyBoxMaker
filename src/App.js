import React from "react";
import "./styles.css";
import ElementContext from "./ElementContext";

import ContextMenu from "./ContextMenu";

export default function App() {
  const name = "Rishi";
  var [current, setCurrent] = React.useState(null);

  React.useEffect(() => {
    var canvas = document.getElementById("canvas");
    var startPosition = [];
    var isDown = false;
    var newElement = null;
    canvas.addEventListener("mousedown", (event) => {
      event.preventDefault();
      isDown = true;
      newElement = document.createElement("div");
      newElement.className = "new2";
      newElement.id = `new2-${Math.random()}`;
      newElement.addEventListener("click", (event) => {
        setCurrent(event.target);
      });
      startPosition = [event.offsetX, event.offsetY];
      newElement.style.top = `${startPosition[1]}px`;
      newElement.style.left = `${startPosition[0]}px`;
      canvas.appendChild(newElement);
      console.log("banaya");
    });

    canvas.addEventListener("mouseup", (event) => {
      isDown = false;
      console.log(canvas);
    });

    canvas.addEventListener("mousemove", (event) => {
      if (isDown) {
        newElement.style.width = `${event.offsetX - startPosition[0]}px`;
        newElement.style.height = `${event.offsetY - startPosition[1]}px`;
        // console.log(newElement, startPosition, event.offsetX);
      } else {
        return;
      }
    });
  }, []);

  return (
    <div className="App">
      <h1>Hello {name}</h1>
      <div className="canvas" id="canvas"></div>
      <ContextMenu currentElement={current} />
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
