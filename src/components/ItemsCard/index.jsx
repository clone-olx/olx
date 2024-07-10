// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function ItemsCard(props) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchApi();
//   }, []);

//   const fetchApi = () => {
//     const url = `https://dummyjson.com/products/category/${props.apiCategory}?limit=4`;
//     axios
//       .get(url)
//       .then((response) => setData(response.data.products))
//       .catch((err) => console.log(err));
//   };

//   const getRandomDays = (createdAt) => {
//     const randomDays = Math.floor(Math.random() * 30 + 1);
//     return `${randomDays} days ago`;
//   };

//   return (
//     <div className="mx-auto max-w-7xl px-2 pt-3 sm:px-6 lg:px-8">
//       <h1 className="font-bold pt-4 pb-4 text-2xl">{props.title}</h1>
//       <div className=" ">
//       <div className="flex md:grid md:grid-cols-4 overflow-x-auto md:overflow-visible space-x-4 md:space-x-0 gap-6 items-start">
//         {data.map((item, index) => {
//           return (
//             <div
//               key={index}
//               className="max-w-xs rounded  border border-[#d8dfe0] bg-white"
//             >
//               <img
//                 className="w-full h-48 object-cover"
//                 src={item.images[0]}
//                 alt={""}
//               />
//               <div className="px-6 py-4">
//                 <div className="font-bold text-xl mb-2">{`$ ${item.price}`}</div>
//                 <p className="text-gray-700 text-base">{item.title}</p>
//               </div>
//               <div className="px-6 pt-4 pb-2">
//                 <p className="text-gray-700 text-base">{"address"}</p>
//                 <p className="text-gray-700 text-base">
//                   {getRandomDays(item.meta.createdAt)}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       </div>
//       </div>
//   );
// }
// export default ItemsCard;
import React, { useEffect, useState } from "react";
import axios from "axios";

function ItemsCard(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  const fetchApi = () => {
    const url = `https://dummyjson.com/products/category/${props.apiCategory}?limit=4`;
    axios
      .get(url)
      .then((response) => setData(response.data.products))
      .catch((err) => console.log(err));
  };

  const getRandomDays = (createdAt) => {
    const randomDays = Math.floor(Math.random() * 30 + 1);
    return `${randomDays} days ago`;
  };

  return (
    <div className="mx-auto max-w-7xl px-2 pt-3 sm:px-6 lg:px-8">
      <h1 className="font-bold pt-4 pb-4 text-2xl">{props.title}</h1>
      <div className="overflow-x-auto">
        <div className="flex space-x-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-none w-72 rounded border border-[#d8dfe0] bg-white"
              style={{ minWidth: "280px" }} // Adjust as needed for mobile view
            >
              <img
                className="w-full h-48 object-cover"
                src={item.images[0]}
                alt=""
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{`$ ${item.price}`}</div>
                <p className="text-gray-700 text-base">{item.title}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <p className="text-gray-700 text-base">{"address"}</p>
                <p className="text-gray-700 text-base">
                  {getRandomDays(item.meta.createdAt)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ItemsCard;
