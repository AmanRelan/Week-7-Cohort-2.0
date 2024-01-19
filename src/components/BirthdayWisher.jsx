import { useState } from "react";
import { useRef } from "react";
import BirthdayCards from "./BirthdayCards";

const BirthdayWisher = () => {
  const [isBirthdayWishSent, setIsBirthdayWishSent] = useState(false);
  const inputName = useRef();

  const handleBirthdayWishSend = () => {
    setIsBirthdayWishSent(true);
  };

  if (isBirthdayWishSent) {
    return <BirthdayCards inputName={inputName.current.value} />;
  }
  return (
    <div className="flex flex-col justify-center items-center box-border border-4 w-6/12 mx-auto my-2">
      <h1 className="font-bold text-3xl">Birthday Wisher</h1>
      <input
        ref={inputName}
        placeholder="Enter Your Name"
        className="m-4 text-center w-[100%] border-2 border-black  focus:border-black focus:outline-none rounded-lg"
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg m-4"
        onClick={handleBirthdayWishSend}
      >
        Create wish
      </button>
    </div>
  );
};

export default BirthdayWisher;
