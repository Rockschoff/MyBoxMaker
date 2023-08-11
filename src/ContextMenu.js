import React from "react";
import EditProperty from "./EditProperty";
import "./styles.css";

export default function ContextMenu({ currentElement }) {
  if (currentElement) {
    console.log(currentElement.style.top);
    console.log(currentElement.style.left);
  }
  function handleOnSubmit(event) {
    // console.log(event)
    event.preventDefault();
    console.log(event.target.childNodes[0].value, event.target.id);

    var value = event.target.childNodes[0].value;
    var valueType = event.target.childNodes[0].placeholder;
    var property = event.target.id;

    if (valueType == "px") {
      value = `${value}px`;
    }

    if (currentElement) {
      console.log(currentElement.style.getPropertyValue(event.target.id));
      currentElement.style.setProperty(property, value);
    }
  }

  return (
    <div className="contextmenu" id="contextmenu">
      {/* <div className="contextmenu-ele">Position x </div>
      <div className="contextmenu-ele">Position y </div>
      <div className="contextmenu-ele">Length </div>
      <div className="contextmenu-ele">Width</div> */}
      <EditProperty name="top" submitHandle={handleOnSubmit} type="px" />
      <EditProperty name="left" submitHandle={handleOnSubmit} type="px" />
      <EditProperty name="width" submitHandle={handleOnSubmit} type="px" />
      <EditProperty name="height" submitHandle={handleOnSubmit} type="px" />
      {/* <Property name={} submitHandle={}/> */}
      <EditProperty
        name="background-color"
        submitHandle={handleOnSubmit}
        type="text"
      />
      {/* <div className="contextmenu-ele" id="background-color">
        BG-color
        <form onSubmit={handleOnSubmit} id="background-color">
          <input name="color" type="text" placeholder="red" required style={{'width':"75px"}}/>
          <input type="submit" />
        </form>
      </div> */}
      <div className="contextmenu-ele">
        X {currentElement ? currentElement.id : "None"}
      </div>
    </div>
  );
}
