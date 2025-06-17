import React from "react";
import room1 from "../assets/rooms/room-1.jpg";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
const Card = ({ property }) => {
  const [addWishList, setAddWishList] = React.useState(false);
  const { id, image, location, price, description } = property || {};
  return (
    <div className="group relative w-[300px] h-[200px] rounded-[10px] bg-gradient-to-br from-[#f89b29] to-[#ff0f7b] flex items-center justify-center overflow-hidden transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:rotate-[-5deg] hover:scale-[1.1] shadow-lg snap-center">
      <Link
        to={`/property/${id}`}>
        {addWishList ? (
        <FaHeart
          onClick={() => setAddWishList(!addWishList)}
          className="absolute top-8 right-2 text-red-600 text-2xl z-10  opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
        />
        ) : (
        <CiHeart
          onClick={() => setAddWishList(!addWishList)}
          className="absolute top-8 right-2 text-black text-2xl z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
        />
        )}
        {/* Icon */}
        <img src={room1} alt="" />
        {/* Content */}
        <div className="absolute top-1/2 left-1/2 w-full h-full p-5 box-border bg-white opacity-0 transform -translate-x-1/2 -translate-y-1/2 rotate-[-45deg] transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-0 group-hover:opacity-100">
          <h2 className="m-0 text-2xl font-bold text-[#333]">{location}</h2>
          <p className="mt-2 text-sm text-[#777] leading-[1.4]">
            {description}
          </p>
          <p>price - {price} </p>
          <button className="bg-[#FF5A5F] text-white px-6 py-1.5 mt-1 rounded-full font-semibold hover:bg-[#e0484d] transition">
            Book Now
          </button>
        </div>
      </Link>
    </div>
  );
};

export default Card;
