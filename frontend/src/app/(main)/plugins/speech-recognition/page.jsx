"use client";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const page = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[500px] bg-no-repeat"
        style={{
          backgroundImage: `url('https://murf.ai/resources/media/posts/87/5-Best-Speech-to-Text-APIs-in-2021-1.png')`,
        }}
      ></div>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <h3 className="text-6xl p-10 font-medium text-white">
            Speech Recognition
          </h3>
          <p className="text-xl p-10 font-normal text-white">
            Speech Recognition converts spoken words into text, facilitating
            functions such as virtual assistants and live captioning. It
            operates as a program capable of recognizing spoken words and
            transforming them into readable text.
          </p>
        </div>
      </div>
      <div className="col-span-8">
          <div className="col-span-8 p-10">
            <div className="mockup-code p-10">
              <CopyBlock
                text={`<!doctype html>
                <html lang="en">
                  <head>
                    <meta charset="UTF-8" />
                    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Vite + React</title>
                  </head>
                  <body>
                    <div id="root"></div>
                    <script type="module" src="/src/main.jsx"></script>
                  </body>
                </html>
                `}
                language={'html'}
                theme={dracula}
                showLineNumbers={true}
                wrapLongLines={true}
              />
            </div>
          </div>
        </div>
    </div>
  );
};

export default page;
