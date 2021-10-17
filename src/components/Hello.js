// import React from "react";
import "./componentStyles.css";

export default function Hello({ name }) {
  return (
    <div className="container-inner">
      <h2>{`Hello ${name}`}</h2>
    </div>
  );
}

export function IsLoading({ condition }) {
  const loadingMessage = condition ? "Loading" : "Data Loaded";
  return (
    <div className="container-inner">
      <h2>{loadingMessage}</h2>
    </div>
  );
}
