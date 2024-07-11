import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Categories from "../Categories";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FaRegHeart } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${id}`
        );
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchApi();
  }, [id]);

  if (!data) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-medium">Loading...</p>
      </div>
    );
  }

  function getRandomDays() {
    const randomDays = Math.floor(Math.random() * 30 + 1);
    return `${randomDays} days ago`;
  }

  return (
    <>
      <Navbar />
      <Categories />
      <div className="pt-3 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex flex-col gap-4">
        <div className="border w-2/3 p-6 rounded-md ">
          <div className="flex flex-row items-center justify-between">
            <h3 className="text-4xl font-bold">{`$${data.price}`}</h3>
            <div>
              <FaRegHeart className="w-full h-5" />
            </div>
          </div>
          <div className="pt-4 flex flex-row items-center justify-between">
            <h1 className="text-3xl font-semibold">{data.title}</h1>
            <p>{getRandomDays()}</p>
          </div>
        </div>

        <div className="border w-2/3 p-6 rounded-md">
          <h1 className="text-2xl font-bold mb-4 text-left  ">Details</h1>
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            <div className="flex justify-between">
              <span className="font-medium">Is Deliverable:</span>
              <span>No</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Price:</span>
              <span>185,000</span>
            </div>
            <div className="flex justify-between ">
              <span className="font-medium">Brand:</span>
              <span>Apple iPhone</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Condition:</span>
              <span>New</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
