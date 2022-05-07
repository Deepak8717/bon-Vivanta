import React from "react";

export default function PopularRecipes() {
  return (
    <div className=" my-8 ">
      <h3 className="text-2xl md:text-3xl capitalize text-center">
        Get Meal ideas
      </h3>
      <div className="grid   grid-cols-2 md:grid-cols-3 xl:grid-cols-6 mx-auto lg:w-5/6  my-2 md:my-4 ">
        <div className="w-[150px] h-44 md:h-52 mx-auto m-2 bg-green-600 rounded-tr-[70px] rounded-bl-[20px] relative ">
          <img
            src="https://www.acouplecooks.com/wp-content/uploads/2020/12/How-to-Make-Eggs-Sunny-Side-Up-051.jpg"
            className=" w-full h-40 md:h-44 rounded-tr-[70px] object-cover object-center   opacity-80"
            alt="breakfast"
          />

          <p className="absolute bottom-0 text-center   w-full text-2xl py-2  text-white bg-green-600">
            Breakfast
          </p>
        </div>
        <div className=" w-[150px] h-44 md:h-52 mx-auto  m-2 bg-green-600 rounded-tr-[70px] rounded-bl-[20px] relative ">
          <img
            src="https://wallpaperaccess.com/full/1843936.jpg"
            className=" w-full h-40 md:h-44 rounded-tr-[70px] object-cover object-center   opacity-80"
            alt="Lunch"
          />

          <p className="absolute bottom-0 text-center   w-full text-2xl py-2  text-white bg-green-600">
            Lunch
          </p>
        </div>
        <div className="w-[150px] h-44 md:h-52  mx-auto m-2 bg-green-600 rounded-tr-[70px] rounded-bl-[20px] relative ">
          <img
            src="https://img.taste.com.au/ol2Jq8ZQ/taste/2016/11/rachel-87711-2.jpeg"
            className=" w-full h-40 md:h-44 rounded-tr-[70px] object-cover object-center   opacity-80"
            alt="snaks"
          />

          <p className="absolute bottom-0 text-center   w-full text-2xl py-2  text-white bg-green-600">
            Snaks
          </p>
        </div>
        <div className=" w-[150px] h-44 md:h-52  mx-auto m-2 bg-green-600 rounded-tr-[70px] rounded-bl-[20px] relative ">
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/0a/41/2e/3b/dinner-night.jpg"
            className=" w-full h-40 md:h-44 rounded-tr-[70px] object-cover object-center   opacity-80"
            alt="Dinner"
          />

          <p className="absolute bottom-0 text-center   w-full text-2xl py-2  text-white bg-green-600">
            Dinner
          </p>
        </div>
        <div className=" w-[150px] h-44 md:h-52 mx-auto  m-2 bg-green-600 rounded-tr-[70px] rounded-bl-[20px] relative ">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNfaUQOCSxOkGRK466SLiWXpXylc3feIV1_w&usqp=CAU"
            className=" w-full h-40 md:h-44 rounded-tr-[70px] object-cover object-center   opacity-80"
            alt="dessert"
          />

          <p className="absolute bottom-0 text-center   w-full text-2xl py-2  text-white bg-green-600">
            Dessert
          </p>
        </div>
        <div className=" w-[150px] h-44 md:h-52 mx-auto  m-2 bg-green-600 rounded-tr-[70px] rounded-bl-[20px] relative ">
          <img
            src="https://www.acouplecooks.com/wp-content/uploads/2021/02/Raspberry-Martini-010.jpg"
            className=" w-full h-40 md:h-44 rounded-tr-[70px] object-cover object-center   opacity-80"
            alt="dessert"
          />

          <p className="absolute bottom-0 text-center   w-full text-2xl py-2  text-white bg-green-600">
            Drinks
          </p>
        </div>
      </div>
    </div>
  );
}
