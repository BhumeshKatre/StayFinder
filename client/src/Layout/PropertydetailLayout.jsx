import React, { useState } from "react";
import roomImg from "../assets/rooms/room-1.jpg";
import { useParams } from "react-router-dom";
import { properties } from "../Utils/Data";
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { FiShare2 } from "react-icons/fi";
import CardsSectionLayout from "./CardsSectionLayout";
const PropertydetailLayout = () => {
  const id = useParams().id;
  const [addWishList, setAddWishList] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const selectedProperty = properties.find(
    (property) => Number(property.id) === Number(id)
  );

  const sharePage = () => {
    if (navigator.share) {
      navigator
        .share({
          title: document.title,
          text: "Check out this tool on SmartBox!",
          url: window.location.href,
        })
        .then(() => console.log("Thanks for sharing!"))
        .catch((err) => console.error("Error sharing:", err));
    } else {
      alert("Sharing is not supported in this browser. Copy the URL manually.");
    }
  };
  return (
    <>
      <section className=" bg-white pt-6 p-5  ">
        <div className="flex justify-between items-center p-2  ">
          <h1 className="md:text-3xl font-bold ">{selectedProperty.location}</h1>
          <div className="flex gap-4 items-center">
            {addWishList ? (
              <FaHeart
                onClick={() => setAddWishList(!addWishList)}
                className=" text-red-600 md:text-2xl z-10  group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
              />
            ) : (
              <CiHeart
                onClick={() => setAddWishList(!addWishList)}
                className="text-black md:text-2xl z-10 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
              />
            )}

            <FiShare2
              onClick={sharePage}
              className="text-black ml-0 text-2xl cursor-pointer hover:text-gray-600 transition"
              title="Share Property"
            />
            <button className="bg-[#FF5A5F] text-white md:px-6 md:py-1.5 py-1 px-3 mt-1 rounded-full font-semibold hover:bg-[#e0484d] transition">
              Book Now
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-4 ">
          <div className="md:col-span-6 gap-2 grid  order-2 md:order-1  ">
            <div className="flex gap-2">
              <img
                src={roomImg}
                alt="Property"
                className="w-[50%]  object-cover rounded-lg shadow-md"
              />
              <img
                src={roomImg}
                alt="Property"
                className="w-[50%] object-cover rounded-lg shadow-md"
              />
            </div>
            <div className="flex gap-2">
              <img
                src={roomImg}
                alt="Property"
                className="w-[50%]  object-cover rounded-lg shadow-md"
              />
              <img
                src={roomImg}
                alt="Property"
                className="w-[50%]  object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
          <div className="md:col-span-6 gap-2 w-full order-1 md:order-2 ">
            <img
              src={roomImg}
              alt="Property"
              className="w-full  h-full  rounded-lg shadow-md"
            />
          </div>
          {/* <div className="">
            <img src={roomImg} alt="" />
            <img src={roomImg} alt="" />
            <img src={roomImg} alt="" />
            <img src={roomImg} alt="" />
          </div> */}
        </div>
      </section>

      <section className="bg-white p-4  md:grid grid-cols-12 gap-2">
        <div className="description-box col-span-8  ">
          <div className="p-4">
            <h2>title</h2>
            <p>{selectedProperty.location}</p>
            <p>{selectedProperty.description}</p>
          </div>

          <div className="p-4 border-t-1 border-gray-200">
            <h2 className="text-2xl font-bold py-2">Amenities</h2>
            <ul className="list-disc pl-5">
              {selectedProperty.amenities?.map((amenity, index) => (
                <li key={index} className="">
                  {amenity}
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 border-t-1 border-gray-200">
            <h2 className="text-2xl font-bold py-2 ">House Rules</h2>
            <ul className="list-disc pl-5">
              {selectedProperty.houseRules?.map((rule, index) => (
                <li key={index} className="">
                  {rule}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-2 items-center p-4 border-t-1 border-gray-200">
            <img src={roomImg} alt="" className="w-12 h-12 rounded-full" />
            <div>
              <h2>Host name</h2>
              <p>date</p>
            </div>
          </div>
        </div>
        <div className="check-avalibility-box col-span-4">
          <div className="w-90 bg-white border-1 border-gray-300 shadow-lg p-3 rounded-lg">
            <h1 className="text-center font-bold text-2xl p-2 ">
              Check Avaibility{" "}
            </h1>
            <div className="flex gap-2 p-2 justify-center border ">
              <div>
                <p className="font-semibold">check-in</p>
                <input type="date" className="w-full p-2 border rounded-md" />
              </div>
              <div>
                <p className="font-semibold">check-out</p>
                <input type="date" className="w-full p-2 border rounded-md" />
              </div>
            </div>
            <div className="flex gap-2 p-2 justify-center border ">
              <div className="w-[50%]">
                <p className="font-semibold">kids</p>
                <select className="w-full p-2 border rounded-md">
                  <option value="1">1 kids</option>
                  <option value="2">2 kids</option>
                  <option value="3">3 kids</option>
                  <option value="4">4 kids</option>
                </select>
              </div>
              <div className="w-[50%]">
                <p className="font-semibold">adult</p>
                <select className="w-full p-2 border rounded-md">
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adult</option>
                  <option value="3">3 Adult</option>
                  <option value="4">4 Adult</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <button className="bg-[#FF5A5F] mt-2  text-white  px-6 py-1.5  rounded-full font-semibold hover:bg-[#e0484d] transition">
                Check Avaiblity
              </button>
              <p>Price: {selectedProperty.price}</p>
            </div>
          </div>
        </div>
      </section>

      {/* review section  */}
      <section className="bg-white p-6 rounded-lg shadow-md">
      

        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
          <h2 className="text-2xl font-bold mb-4 sm:mb-0 flex gap-2 ">Reviews
            <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full text-sm font-medium text-gray-700">
              <span>
                4.5
              </span>
              <span className="text-yellow-500">★</span>
              <span>({selectedProperty.reviews?.length || 0})</span>
            </div>
          </h2>
        
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-[#FF5A5F] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#e0484d] transition"
          >
            {showForm ? "Cancel" : "Leave Review"}
          </button>
        </div>

        {showForm && (
          <div className="bg-gray-50 p-4 mb-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Leave a Review</h3>
            <form className="space-y-4">
              <textarea
                className="w-full p-2 border rounded-md"
                rows="4"
                placeholder="Write your review here..."
              ></textarea>
              <button
                type="submit"
                className="bg-[#FF5A5F] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#e0484d] transition"
              >
                Submit Review
              </button>
            </form>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {selectedProperty.reviews?.map((review, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg shadow-sm bg-white"
            >
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={review.profileIcon}
                  alt={review.user}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h3 className="font-semibold">{review.user}</h3>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-2">{review.comment}</p>
              <div className="flex items-center">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-500">
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Smart Suggestion */}

      <CardsSectionLayout head="Smart Suggestin For you" properties={properties}/>
    </>
  );
};

export default PropertydetailLayout;
