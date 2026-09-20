import React from "react";
import { useSelector } from "react-redux";

const Count = () => {
  const countValue = useSelector((state) => {
    state.counter.value;
  });
  console.log(countValue)
  return (
    <p
      className={`px-3 pb-1 text-center text-7xl font-bold text-gray-800 bg-white shadow-2xs rounded-4xl
        ${countValue < 0 ? "text-red-600" : "text-black" && countValue > 0 ? "text-green-600" : "text-black"}`}
    >
      {countValue}
    </p>
  );
};
export default Count;
