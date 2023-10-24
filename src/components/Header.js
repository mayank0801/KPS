import React from "react";
import logo from "../assets/logo.jpg";
import text from "../assets/text.jpg";
import { RxAvatar } from "react-icons/rx";
export const Header = () => {
  return (
    <div className="box-shadow1 p-2 relative justify-between flex w-[100vw] overflow-hidden ">
      <span className="flex gap-4 w-3/4 justify-between h-10 relative items-center">
        <img src={logo} className="h-full " alt="logo" />
        <img src={text} className="h-8" alt="logo" />
      </span>
      <RxAvatar size={40} color="#054494" />
    </div>
  );
};
