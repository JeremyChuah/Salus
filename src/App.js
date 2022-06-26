import React, { useEffect, useRef, useState } from "react";
import ml5 from "ml5";
import useInterval from "@use-it/interval";
import Message from "./message";
import logo from "./Salus.png";

import Chart from "./Result";

import "./App.css";

let classifier;

function App() {
  const videoRef = useRef();
  const [start, setStart] = useState(true);
  const [result, setResult] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    classifier = ml5.imageClassifier("./model/model.json", () => {
      navigator.mediaDevices
        .getUserMedia({ video: true, audio: false })
        .then((stream) => {
          videoRef.current.srcObject = stream;
          videoRef.current.play();
          setLoaded(true);
        });
    });
  }, []);

  useInterval(() => {
    if (classifier && start) {
      classifier.classify(videoRef.current, (error, results) => {
        if (error) {
          console.error(error);
          return;
        }
        setResult(results);
        // console.log(results)
      });
    }
  }, 500);

  const toggle = () => {
    setStart(!start);
    setResult([]);
  };

  return (
    <div>
      <div className="capture">
        <div className="logoBox">
          <img src={logo} height="125" width="125" className="Salus" />
          <div>
            {result.length > 0 && (
              <div>
                <Chart data={result[0]} />
              </div>
            )}
          </div>
        </div>
        <video
          ref={videoRef}
          style={{ transform: "scale(-1, 1)" }}
          width="1000"
          height="700"
        />
      </div>
    </div>
  );
}

export default App;
