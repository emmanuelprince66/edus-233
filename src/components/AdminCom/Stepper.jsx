import React from "react";

const Stepper = ({ btnStatus }) => {
  return (
    <div className="flex flex-col gap-0 items-center justify-start w-[20%]">
      <div
        className={`horizontal_layout p-3 rounded-full border border-primary_blue_4 ${
          btnStatus ? "bg-primary_blue_2" : "bg-white"
        } `}
      >
        <p className="text-bold text-lg mx-3">1</p>
      </div>
      <div className="h-[2.5rem] w-[2px] bg-primary_blue_4 " />
      <div
        className={`horizontal_layout p-3 rounded-full border border-primary_blue_4 ${
          btnStatus ? "bg-primary_blue_2" : "bg-white"
        } `}
      >
        <p className="text-bold text-lg mx-[10px]">2</p>
      </div>
      <div className="h-[2.4rem] w-[2px] bg-primary_blue_4 " />
      <div
        className={`horizontal_layout p-3 rounded-full border border-primary_blue_4 ${
          btnStatus ? "bg-primary_blue_2" : "bg-white"
        } `}
      >
        <p className="text-bold text-lg mx-[10px]">3</p>
      </div>
      <div className="h-[2.3rem] w-[2px] bg-primary_blue_4 " />
      <div
        className={`horizontal_layout p-3 rounded-full border border-primary_blue_4 ${
          btnStatus ? "bg-primary_blue_2" : "bg-white"
        } `}
      >
        <p className="text-bold text-lg mx-[10px]">4</p>
      </div>
      <div className="h-[2rem] w-[2px] bg-primary_blue_4 " />
      <div
        className={`horizontal_layout p-3 rounded-full border border-primary_blue_4 ${
          btnStatus ? "bg-primary_blue_2" : "bg-white"
        } `}
      >
        <p className="text-bold text-lg mx-[10px]">5</p>
      </div>
    </div>
  );
};

export default Stepper;
