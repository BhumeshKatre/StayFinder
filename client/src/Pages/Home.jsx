import React from "react";
import heroImg from "../assets/bg.jpg";
import { FaBars, FaSearch } from "react-icons/fa";
import CardsSectionLayout from "../Layout/CardsSectionLayout";
import { properties } from "../Utils/Data";

const Home = () => {


  return (
    <>
      <section
        className=" h-[80vh] bg-cover bg-center flex flex-col justify-start items-start text-center blur:lg"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className="searchbar w-[80%] md:w-[50%] bg-white mx-auto p-2  border border-gray-300 rounded-full  mt-4 flex justify-between align-middle items-center px-4">
          <input
            type="text"
            placeholder="Search for rooms, experiences, or services..."
            className="w-full p-2   outline-none "
          />
          <FaSearch className="w-10 p-2 h-10 text-white  rounded-full bg-[#FF5A5F]" />
        </div>

        <div
          className="mx-auto flex justify-center items-center flex-col h-full z-10 px-6 w-full max-w-3xl 
       "
        >
          <h1 className="text-white text-4xl md:text-6xl font-extrabold mb-4">
            Find Your Perfect Stay
          </h1>
          <p className="text-white text-lg mb-6 font-medium">
            Discover unique homes and experiences around the world — all in one
            place.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-[#FF5A5F] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e0484d] transition">
              Explore Stays
            </button>
            <button className="bg-[#484848] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 transition">
              Host Your Place
            </button>
          </div>
        </div>
      </section>
      <CardsSectionLayout head="Trending Properties" properties={properties} />
      <CardsSectionLayout head="Trending Properties" properties={properties} />
      <CardsSectionLayout head="Trending Properties" properties={properties} />
      <CardsSectionLayout head="Trending Properties" properties={properties} />
    </>
  );
};

export default Home;
