import React from "react";

function Destination({ type, title, message }) {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="p-6 md:mx-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`text-${
            type === "success" ? "green" : "red"
          }-600 w-20 h-20 mx-auto my-6`}
        >
          <path
            fill-rule="evenodd"
            d={
              type === "success"
                ? "M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                : "M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
            }
            clip-rule="evenodd"
          />
        </svg>

        <div className="text-center">
          <h3
            className={`md:text-2xl text-base text-${
              type === "success" ? "green" : "red"
            }-600 font-semibold text-center`}
          >
            {title}
          </h3>
          <p className="text-gray-600 my-2">{message}</p>
          <p> Have a great day! </p>
          <div className="py-10 text-center">
            <a
              href="/"
              className="px-12 bg-violet-600 hover:bg-indigo-50 hover:text-gray-500 text-white rounded-lg border-2 border-violet-600 font-semibold py-3"
            >
              GO BACK
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
