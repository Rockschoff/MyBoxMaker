import React from "react";
import "./styles.css";

export default function EditProperty({ name, submitHandle, type }) {
  return (
    <div className="contextmenu-ele">
      {name}
      <form onSubmit={submitHandle} id={name}>
        <input
          name="color"
          type="text"
          placeholder={type}
          required
          style={{ width: "75px" }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
