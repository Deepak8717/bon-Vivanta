import React from "react";
import Navbar from "../layout/Navbar";
import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillPhone,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiTwotoneMail,
} from "react-icons/ai";
import { MdEditLocation } from "react-icons/md";

const Contact = () => {
  return (
    <div className="relative w-full  max-w-screen-2xl font-Lora rounded-lg md:rounded-[30px] px-4 md:px-12  bg-white mx-auto my-0 py-4">
      <Navbar />
      <div className="w-[95%] max-w-[1200px]  mx-auto my-24 flex flex-col md:flex-row rounded-lg ">
        <div className="md:w-[40%] relative min-h-[500px] p-8 bg-green-600 text-white rounded-lg">
          <h2 className="text-4xl my-4">Contact Information</h2>
          <p className="text-xl text-slate-300">
            Fill Up the form and our team will get back to you within 24 hours.
          </p>
          <div className="my-8 flex">
            <div className="w-12">
              <AiFillPhone className="w-8 h-8 text-pink-700" />
            </div>
            <div className="text-xl">+91-123-456-7890</div>
          </div>
          <div className="my-8 flex">
            <div className="w-12">
              <AiTwotoneMail className="w-8 h-8 text-pink-700" />
            </div>
            <div className="text-xl">hello@bon-vivanta.com</div>
          </div>
          <div className="my-8 flex">
            <div className="w-12">
              <MdEditLocation className="w-8 h-8 text-pink-700" />
            </div>
            <div className="text-xl">102 street 2185 don</div>
          </div>
          <div className="absolute bottom-0 w-[80%] p-2 my-2 h-12 flex justify-around">
            <AiFillFacebook className="w-8 h-8 hover:text-pink-700 cursor-pointer" />
            <AiOutlineTwitter className="w-8 h-8 hover:text-pink-700 cursor-pointer" />
            <AiOutlineInstagram className="w-8 h-8 hover:text-pink-700 cursor-pointer" />
            <AiFillLinkedin className="w-8 h-8 hover:text-pink-700 cursor-pointer" />
          </div>
        </div>

        <div className="md:w-[60%] md:p-4  rounded-lg">
          <form className=" my-12 mx-4 md:mx-8">
            <div className="grid  grid-cols-4 gap-8">
              <div className="flex flex-col col-span-4 lg:col-span-2">
                <label className="text-xl">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  className="h-12 border-b-2 outline-none"
                />
              </div>
              <div className="flex flex-col col-span-4 lg:col-span-2">
                <label className="text-xl">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  className="h-12 border-b-2 outline-none"
                />
              </div>
              <div className="flex flex-col col-span-4 lg:col-span-2">
                <label className="text-xl">Email</label>
                <input
                  type="email"
                  name="email"
                  className="h-12 border-b-2 outline-none"
                />
              </div>
              <div className="flex flex-col col-span-4 lg:col-span-2">
                <label className="text-xl">Phone</label>
                <input
                  type="text"
                  name="email"
                  className="h-12 border-b-2 outline-none"
                />
              </div>
              <div className="flex flex-col col-span-4">
                <label className="text-xl">Message</label>
                <textarea
                  type="text"
                  name="message"
                  className="h-24 border-b-2 outline-none"
                />
              </div>
              <div className="flex  lg:justify-end col-span-4">
                <button className="p-2 font-bold text-lg bg-pink-700 rounded-lg text-white">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
