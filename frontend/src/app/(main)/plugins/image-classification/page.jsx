"use client";
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const page = () => {
  return (
    <div>
      <div
        className="bg-cover h-[500px]"
        style={{
          backgroundImage: `url('https://lh5.googleusercontent.com/0tRwW_N8aqEBR2F-a6ggpbveaBw-20mYHdKA_EIPWfIHz7QisxcIJUdMtMYfC6g3u-1GuCOgeXd4nBfdzv9oYxprL_roc2msDIu5HrBVNlnybw_gnLP-jLo279pAi7MU5JppM7FlQuvROjvWDexxQxc')`,
        }}
      ></div>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <h3 className="text-6xl p-10 font-medium text-white">
            Image Classification
          </h3>
          <p className="text-xl p-10 font-normal text-white">
            An image classification module is designed to recognize different
            types or classes of images. Its primary function involves labeling
            photographs based on their content. Image classification models play
            a crucial role in tasks such as identifying various objects depicted
            in pictures.
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
