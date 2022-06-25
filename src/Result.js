import React, { useState, useEffect } from "react";
import "./Result.css";
import Message from "./message";
import useInterval from "@use-it/interval";

const Chart = (props) => {
  const data = props.data;
  const label = data.label;

  const [send, setSend] = useState(false);

  useInterval(() => {
    if (label == "No Face") {
      setSend(true);
    }
  }, 100);

  return (
    <div>
      <Message result={label} isSend={send} />
      <div className="ResultCard">
        <h3 className="resultText">Classification Confidence: {label}</h3>
      </div>
    </div>
  );
};
export default Chart;
