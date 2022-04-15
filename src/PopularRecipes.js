import React from "react";

export default function PopularRecipes() {
  return (
    <div className=" my-4 ">
      <h3 className="text-2xl md:text-3xl capitalize text-center">
        Get Meal ideas
      </h3>
      <div className="flex flex-col md:flex-row  lg:w-5/6  mx-auto items-center my-4">
        <div className=" w-[80%] md:w-1/4 h-64   m-2 bg-green-600 rounded-tr-[70px] rounded-bl-[20px] relative ">
          <img
            src="https://www.acouplecooks.com/wp-content/uploads/2020/12/How-to-Make-Eggs-Sunny-Side-Up-051.jpg"
            className=" w-full h-52 rounded-tr-[70px] object-cover object-center   opacity-80"
            alt="breakfast"
          />

          <p className="absolute bottom-0 text-center   w-full text-2xl py-2  text-white">
            Breakfast
          </p>
        </div>
        <div className=" w-[80%] md:w-1/4 h-64   m-2 bg-green-600 rounded-tr-[70px] rounded-bl-[20px] relative ">
          <img
            src="https://wallpaperaccess.com/full/1843936.jpg"
            className=" w-full h-52 rounded-tr-[70px] object-cover object-center   opacity-80"
            alt="Lunch"
          />

          <p className="absolute bottom-0 text-center   w-full text-2xl py-2  text-white">
            Lunch
          </p>
        </div>
        <div className=" w-[80%] md:w-1/4 h-64   m-2 bg-green-600 rounded-tr-[70px] rounded-bl-[20px] relative ">
          <img
            src="https://img.taste.com.au/ol2Jq8ZQ/taste/2016/11/rachel-87711-2.jpeg"
            className=" w-full h-52 rounded-tr-[70px] object-cover object-center   opacity-80"
            alt="snaks"
          />

          <p className="absolute bottom-0 text-center   w-full text-2xl py-2  text-white">
            Snaks
          </p>
        </div>
        <div className=" w-[80%] md:w-1/4 h-64   m-2 bg-green-600 rounded-tr-[70px] rounded-bl-[20px] relative ">
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/0a/41/2e/3b/dinner-night.jpg"
            className=" w-full h-52 rounded-tr-[70px] object-cover object-center   opacity-80"
            alt="Dinner"
          />

          <p className="absolute bottom-0 text-center   w-full text-2xl py-2  text-white">
            Dinner
          </p>
        </div>
      </div>
    </div>
  );
}
