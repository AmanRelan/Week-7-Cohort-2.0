import { useState, useCallback } from "react";

const BackgroundChanger = () => {
  console.log("Component rendered");
  const [style, setStyle] = useState("white");

  // Using useCallback to memoize the function, so that it does not re render the component if there is no change in the button clicked.
  // For example, if you click on yellow two times, the component won't re-render.
  const changeColor = useCallback(
    (e) => {
      console.log(e.target.value);
      if (style !== e.target.value) {
        setStyle(e.target.value);
      }
    },
    [style]
  );
  const buttonDetails = [
    { text: "Red", value: "red", className: "w-20 bg-red-100 rounded-lg" },
    {
      text: "Yellow",
      value: "yellow",
      className: "w-20 bg-yellow-300 rounded-lg",
    },
    {
      text: "Black",
      value: "black",
      className: "w-20 bg-black rounded-lg text-white",
    },
    {
      text: "Purple",
      value: "purple",
      className: "w-20 bg-purple-500 rounded-lg",
    },
    {
      text: "Green",
      value: "green",
      className: "w-20 bg-green-600 rounded-lg",
    },
    {
      text: "Blue",
      value: "blue",
      className: "w-20 bg-blue-700 rounded-lg",
    },
    {
      text: "Default",
      value: "white",
      className: "w-20 bg-orange-500 rounded-lg",
    },
  ];

  return (
    <div
      className="flex justify-evenly border border-solid mx-auto mt-20 py-20"
      style={{ backgroundColor: style }}
    >
      {buttonDetails.map((singleButton) => {
        return (
          <button
            key={singleButton.text}
            className={singleButton.className}
            value={singleButton.value}
            onClick={changeColor}
          >
            {singleButton.text}
          </button>
        );
      })}
    </div>
  );
};

export default BackgroundChanger;
