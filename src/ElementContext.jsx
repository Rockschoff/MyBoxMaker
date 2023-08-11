import React from "react";

export default function ElementContext(props) {
  console.log("here2");
  console.log(props);
  var contextmenu = document.getElementById("contextmenu");
  console.log(contextmenu.style.display);
  contextmenu.style.display = "auto";
  props.preventDefault();
  return null;
}
