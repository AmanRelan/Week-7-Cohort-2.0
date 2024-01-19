import { useRef, useEffect } from "react";

const OtpInput = ({ mobileNumber }) => {
  const firstInput = useRef();
  const secondInput = useRef();
  const thirdInput = useRef();
  const fourthInput = useRef();

  const focusNextInput = (currentRef) => {
    if (currentRef.current && currentRef.current.nextElementSibling) {
      currentRef.current.nextElementSibling.focus();
    }
  };

  const focusPrevInput = (currentRef, event) => {
    if (
      event.key === "Backspace" &&
      currentRef.current &&
      currentRef.current.previousElementSibling
    ) {
      currentRef.current.previousElementSibling.focus();
    }
  };

  useEffect(() => {
    firstInput.current.focus();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="box-border w-3/12 p-4 mx-auto border-4 flex flex-col items-center">
        <h2 className="text-center font-bold mb-4">Login Via OTP</h2>
        <p> OTP sent to {mobileNumber} </p>

        <div className="otp-inputs flex mt-4 mb-4">
          <input
            ref={firstInput}
            type="text"
            maxLength="1"
            onKeyUp={(e) => e.target.value && focusNextInput(firstInput)}
            onKeyDown={(e) => focusPrevInput(firstInput, e)}
            className="w-10 h-10 border-2 border-black text-center focus:border-black focus:outline-none m-2"
          />
          <input
            ref={secondInput}
            type="text"
            maxLength="1"
            onKeyUp={(e) => e.target.value && focusNextInput(secondInput)}
            onKeyDown={(e) => focusPrevInput(secondInput, e)}
            className="w-10 h-10 border-2 border-black text-center focus:border-black focus:outline-none m-2"
          />
          <input
            ref={thirdInput}
            type="text"
            maxLength="1"
            onKeyUp={(e) => e.target.value && focusNextInput(thirdInput)}
            onKeyDown={(e) => focusPrevInput(thirdInput, e)}
            className="w-10 h-10 border-2 border-black text-center focus:border-black focus:outline-none m-2"
          />
          <input
            ref={fourthInput}
            type="text"
            maxLength="1"
            onKeyUp={(e) => e.target.value && focusNextInput(fourthInput)}
            onKeyDown={(e) => focusPrevInput(fourthInput, e)}
            className="w-10 h-10 border-2 border-black text-center focus:border-black focus:outline-none m-2"
          />
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg">
          Login
        </button>
      </div>
    </div>
  );
};

export default OtpInput;
