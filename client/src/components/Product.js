import React from "react";

function Product({ name, description, price, orderedQty }) {
  return (
    <div className="mt-16 md:mt-0 flex justify-start flex-col md:flex-row  items-start md:items-center space-y-4  md:space-x-6 xl:space-x-8 w-full ">
      <div className="my-8 flex justify-between items-start w-full flex-col md:flex-row space-y-4 md:space-y-0  ">
        <div className="w-full flex flex-col justify-start items-start space-y-4">
          <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-violet-500">
            {name}
          </h3>
          <div className="flex justify-start items-start flex-col space-y-2">
            <p className="text-sm leading-none text-gray-500">
              <span className="text-gray-500 font-semibold">Description: </span>{" "}
              {description}
            </p>
          </div>
        </div>
        <div className="flex justify-between space-x-8 items-start w-full">
          <p className="text-base xl:text-lg leading-6 text-violet-500">
            LKR {(price / 100).toFixed(2)}
          </p>
          <p className="text-base xl:text-lg leading-6 text-violet-500">
            {orderedQty}
          </p>
          <p className="text-base xl:text-lg font-semibold leading-6 text-violet-500">
            LKR {((price * orderedQty) / 100).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Product;
