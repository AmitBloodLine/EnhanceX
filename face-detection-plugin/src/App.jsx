import React, { useEffect, useRef } from 'react'
import * as blazeface from '@tensorflow-models/blazeface';

const App = () => {

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  let ctx;
  let model;

  useEffect(() => {
    // console.log(blazeface);
    if (!videoRef.current || !canvasRef.current) return;
    ctx = canvasRef.current.getContext("2d");
    setupCamera();
    videoRef.current.addEventListener("loadeddata", async () => {
      model = await blazeface.load();
      // call detect faces every 100 milliseconds or 10 times every second
      setInterval(detectFaces, 100);
    });
  }, [])


  const setupCamera = () => {
    // console.log(navigator.mediaDevices);
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({
          video: { width: 600, height: 400 },
          audio: false,
        })
        .then((stream) => {
          video.srcObject = stream;
        });
    } else {
      console.log("getUserMedia not supported");
    }
  };

  const detectFaces = async () => {
    const prediction = await model.estimateFaces(video, false);

    console.log(prediction);

    // draw the video first
    ctx.drawImage(video, 0, 0, 600, 400);

    prediction.forEach((pred) => {

      // draw the rectangle enclosing the face
      ctx.beginPath();
      ctx.lineWidth = "4";
      ctx.strokeStyle = "blue";
      // the last two arguments are width and height
      // since blazeface returned only the coordinates, 
      // we can find the width and height by subtracting them.
      ctx.rect(
        pred.topLeft[0],
        pred.topLeft[1],
        pred.bottomRight[0] - pred.topLeft[0],
        pred.bottomRight[1] - pred.topLeft[1]
      );
      ctx.stroke();

      // drawing small rectangles for the face landmarks
      ctx.fillStyle = "red";
      pred.landmarks.forEach((landmark) => {
        ctx.fillRect(landmark[0], landmark[1], 5, 5);
      });

    });
  };



  return (
    <>
      <video id="video" ref={videoRef} autoPlay style={{ display: 'none' }}></video>
      <canvas id="canvas" ref={canvasRef} width="600px" height="400px"></canvas>
    </>
  )
}

export default App