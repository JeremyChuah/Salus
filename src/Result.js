import React, { useState, useEffect } from "react";
import "./Result.css";
import Message from "./message";
import useInterval from "@use-it/interval";
import { wait } from "@testing-library/user-event/dist/utils";

const Chart = (props) => {
  const data = props.data;
  const label = data.label;

  const [send, setSend] = useState(false);
  const [poolCrisis, setPoolCrisis] = useState("");

  useInterval(() => {
    if (label == "Person Underwater") {
      setSend(true);
      setPoolCrisis("Watch out person underwater!");
      const timer = setTimeout(() => {
        setSend(false);
      }, 50);
      return () => clearTimeout(timer);
    } else if (label == "Pet in the Water") {
      setSend(true);
      setPoolCrisis("Watch out Pet in the Water!");
      const timer = setTimeout(() => {
        setSend(false);
      }, 50);
      return () => clearTimeout(timer);
    } else if (label == "Unattended Toddler") {
      setSend(true);
      setPoolCrisis("Watch out Unattended Toddler!");
      const timer = setTimeout(() => {
        setSend(false);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, 5000);

  return (
    <div>
      <Message result={label} isSend={send} crisis={poolCrisis} />
      <div className="ResultCard">
        <h3 className="resultText">Current Status: {label}</h3>
      </div>
    </div>
  );
};
export default Chart;
