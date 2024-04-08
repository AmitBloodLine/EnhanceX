"use client";
import React from "react";

const page = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[500px]"
        style={{
          backgroundImage: `url('https://www.econsight.com/wp-content/uploads/2022/12/gesture-recognition.jpg')`,
        }}
      ></div>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <h3 className="text-6xl p-10 font-medium text-white">
            Gesture Recognition
          </h3>
          <p className="text-xl p-10 font-normal text-white">
            Gesture recognition is a technology that enables computers or
            machines to interpret human gestures as commands or input. It
            involves capturing, analyzing, and understanding gestures made by
            humans using cameras, sensors, or other input devices. These
            gestures can include movements of the hands, body, face.
          </p>
        </div>
        <div className="col-span-8 p-10">
          <div className="mockup-code p-10">
            <pre data-prefix="$">
              <code>npm i tailwind</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
