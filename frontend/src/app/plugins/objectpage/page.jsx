"use client";
import React from "react";

const page = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-96"
        style={{
          backgroundImage: `url('https://media.hackerearth.com/blog/wp-content/uploads/2018/08/shutterstock_668209624-1.jpg')`,
        }}
      ></div>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <h3 className="text-6xl p-10 font-medium text-white">
            Object Detection
          </h3>
          <p className="text-xl p-10 font-normal text-white">
            An Object Detection Module is a component of a system or software
            application that is designed to identify and locate objects within
            an image or a video. Object detection modules have a wide range of
            applications across various industries, including autonomous
            vehicles for identifying pedestrians, cyclists, and other vehicles
            on the road, surveillance systems for detecting intruders or
            suspicious behavior, retail for tracking inventory and customer
            behavior, and healthcare for analyzing medical images and assisting
            in diagnoses.
          </p>
        </div>
        <div className="col-span-8">
          <div className="col-span-8 p-10">
            <div className="mockup-code p-10">
              <pre data-prefix="$">
                <code>npm i tailwind</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
