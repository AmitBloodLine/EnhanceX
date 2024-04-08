"use client";
import React from "react";

const page = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[500px]"
        style={{
          backgroundImage: `url('https://miro.medium.com/v2/resize:fit:1400/1*d4k-PRw-warACDpklCh1mw.png')`,
        }}
      ></div>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <h3 className="text-6xl p-10 font-medium text-white">
            Text Toxicity Detection
          </h3>
          <p className="text-xl p-10 font-normal text-white">
            Text toxicity detection entails recognizing harmful or offensive
            language. Text toxicity detection models are designed to
            automatically identify and classify text inputs that contain
            harmful, offensive, or toxic language. These models play a crucial
            role in maintaining safe and respectful online environments by
            flagging inappropriate content in social media platforms, forums,
            comment sections, and other online communities.
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
