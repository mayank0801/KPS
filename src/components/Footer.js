import React from "react";
import { BsPhoneVibrate, BsGlobe } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pl-2 pr-2 ">
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Keep Passion Smart</h3>
            <p className="p-0 m-0">Dhansingaaree Sadan ,Mahadev Nagar,</p>
            <p className="p-0 m-0">Near by RamdalaluNagar Bridge,</p>
            <p className="p-0 m-0">Bhikanpura Dih,MuzaffarPur,</p>
            <p className="p-0 m-0">Bihar 842002</p>
          </div>
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="flex items-center ">
              <BsPhoneVibrate /> <span className="ml-2">+91 7761939241</span>
            </p>
            <p className="flex items-center gap-y-6px">
              <AiOutlineMail />{" "}
              <span className="ml-2">kpswithsd@gmail.com</span>
            </p>
            <p className="flex items-center gap-y-6px">
              <BsGlobe /> <span className="ml-2">www.teammateshop.com</span>
            </p>
          </div>
          <div className="w-full lg:w-1/3 px-4">
            <h3 className="text-2xl font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-2 ">
              <a href="#" className="text-white mr-3">
                <i className="fab fa-facebook font-lg"></i>
              </a>
              <a href="#" className="text-white mr-3">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white mr-3">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
