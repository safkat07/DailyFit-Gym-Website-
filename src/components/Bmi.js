"use client";

import React, { useState } from "react";
import Mainbutton from "./Mainbutton";
import Title from "./Useable/Title";
import BigTitle from "./Useable/BigTitle";


export default function Bmi() {
  const [weight, setweight] = useState(0);
  const [height, setheight] = useState(0);
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState(" ");

  const Submithandler = () => {
    if (weight <= 0 || height <= 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = weight / ((height * height) / 10000);
      setBmi(bmi);

      // logic for message
      if (bmi < 20) {
        setMessage("Underweight");
      } else if (bmi >= 20 && bmi < 27) {
        setMessage("Normal");
      } else {
        setMessage("Overweight");
      }
    }
  };
  const changehandler = (e) => {
    // console.log(e.target.name ,e.target.value);
    if (e.target.name === "weight") {
      // console.log("w");
      setweight(e.target.value);
    } else if (e.target.name === "height") {
      // console.log("h");

      setheight(e.target.value);
    }

    //   console.log(height ,weight);
  };

  return (
    <div className=" h-auto py-20 pb-28 bg-primary-0 text-optional-0 ">
      {/* heading div starts */}
      <div className="text-center flex justify-center ">
        {/* <BigTitle titleText={"Calculate Your bmi here"}></BigTitle> */}
        <h1 className="lg:text-[3vw]  uppercase md:text-[5vw] text-[7vw] md:w-[30%] text-center px-5 leading-none">
          Calculate Your bmi here
        </h1>
      </div>
      {/* heading div ends */}

      {/* input goes here */}
      <div className=" flex-col justify-between pt-20 flex max-w-[90rem] mx-auto">
        <div className="flex md:px-5 px-7 justify-between md:flex-row flex-col gap-5 w-full mx-auto">
          <div className="flex-1">
            <Title text={"Height / Cm"}></Title>
            <input
              type="number"
              placeholder="Height / cm"
              className=" p-3 glass w-full focus:outline-none bg-secondary-0"
              name="weight"
              onChange={changehandler}
            ></input>
          </div>
          <div className="flex-1">
            <Title text={"Weight / kg"}></Title>
            <input
              type="number"
              placeholder="Weight / kg"
              className=" p-3 glass w-full  focus:outline-none bg-secondary-0"
              name="weight"
              onChange={changehandler}
            ></input>
          </div>
          <div className="flex-1">
            <Title text={"AGE OF YOU"}></Title>
            <input
              type="number"
              placeholder="Age of you"
              className=" p-3 glass  w-full focus:outline-none bg-secondary-0"
              name="weight"
              onChange={changehandler}
            ></input>
          </div>
          <div className="flex-1">
            <Title text={"Gender"}></Title>
            <input
              type="number"
              placeholder="Select a gender"
              className=" p-3 glass w-full focus:outline-none bg-secondary-0"
              name="weight"
              onChange={changehandler}
            ></input>
          </div>
        </div>
        {/* bottom 2 input */}
        <div className="w-full md:px-5 px-7 items-center md:flex-row flex-col flex gap-5 md:gap-10  mx-auto">
          <div className="md:flex-1 md:w-auto w-full">
            <Title text={"ACTIVITY FACTOR"}></Title>
            <input
              type="number"
              placeholder="Select an activity factor"
              className=" p-3 glass w-full  focus:outline-none bg-secondary-0"
              name="weight"
              onChange={changehandler}
            ></input>
          </div>
          <div className="md:flex-1 md:w-auto w-full">
            <Title text={"I want...."}></Title>
            <input
              type="number"
              placeholder="i want (choose an option)"
              className=" p-3 w-full glass  focus:outline-none bg-secondary-0"
              name="weight"
              onChange={changehandler}
            ></input>
          </div>
          <div onClick={Submithandler} className="pt-9">
            <div className="relative  group">

              <button className="text-xl z-[10] bg-secondary-0 p-3 rounded-lg flex relative items-center gap-x-5 uppercase font-sans from-optional-0">
                Calculate BMI
              </button>
              <div className="transition-all duration-500 border-2 rounded-lg w-full  h-full border-optional-0 left-4 group-hover:left-0  group-hover:border-secondary-0 group-hover:bottom-0 bottom-4  absolute ">

              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
