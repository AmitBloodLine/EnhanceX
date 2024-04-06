import React from "react";
import Navbar from "@/components/navbar";

const page = () => {
  return (
    <div>
      <div className="grid gap-x-8 gap-y-4 grid-cols-1 md:grid-cols-3 object-cover p-20">
        <div className="card bg-base-100 shadow-xl ">
          <figure>
            <img
              src="https://www.datasciencecentral.com/wp-content/uploads/2021/10/9712908078.jpeg"
              alt="Object Detection"
            />
          </figure>
          <div className="card-body bg-zinc-100">
            <h2 className="card-title text-slate-950">Object Detection</h2>
            <p className="text-slate-950">
              Object detection aims to develop a computational model that offers
              the most basic information like what and where of the objects.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Plugin</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://lh5.googleusercontent.com/0tRwW_N8aqEBR2F-a6ggpbveaBw-20mYHdKA_EIPWfIHz7QisxcIJUdMtMYfC6g3u-1GuCOgeXd4nBfdzv9oYxprL_roc2msDIu5HrBVNlnybw_gnLP-jLo279pAi7MU5JppM7FlQuvROjvWDexxQxc"
              alt="Image Classification"
            />
          </figure>
          <div className="card-body bg-zinc-100">
            <h2 className="card-title text-slate-950">Image Classfication</h2>
            <p className="text-slate-950">
              An image classification module is designed to recognize different
              types or classes of images.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Plugin</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://d17ocfn2f5o4rl.cloudfront.net/wp-content/uploads/2020/08/Hand-Tracking-and-Gesture-Recognition-Using-AI_-Applications-and-Challenges.jpg"
              alt="Gesture Recognition"
            />
          </figure>
          <div className="card-body bg-zinc-100">
            <h2 className="card-title text-slate-950">Gesture Recognition</h2>
            <p className="text-slate-950">
              Gesture recognition is a specialized field within computer vision
              and machine learning. It revolves around the identification and
              interpretation of human gestures.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Plugin</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://i.pinimg.com/564x/54/8e/86/548e86df3f8e0e1e8c5dacdd0b419205.jpg"
              alt="Text Toxicity"
            />
          </figure>
          <div className="card-body bg-zinc-100">
            <h2 className="card-title text-slate-950">Text Toxicity</h2>
            <p className="text-slate-950">
              Text toxicity detection entails recognizing harmful or offensive language.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Plugin</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://murf.ai/resources/media/posts/87/5-Best-Speech-to-Text-APIs-in-2021-1.png"
              alt="Speech Recognition"
            />
          </figure>
          <div className="card-body bg-zinc-100">
            <h2 className="card-title text-slate-950">Speech Recognition</h2>
            <p className="text-slate-950">
              This plugin operates as a program capable of recognizing spoken words and transforming them into readable text.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">View Plugin</button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default page;
