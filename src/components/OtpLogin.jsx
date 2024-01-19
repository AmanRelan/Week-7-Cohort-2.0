import { useRef, useState } from "react";
import OtpSent from "./OtpSent";

const OtpLogin = () => {
  const [otpSent, setOtpSent] = useState(false);
  const [mobileNumberValue, setMobileNumberValue] = useState("");

  const mobileNumber = useRef();
  const handleOtpSend = () => {
    setMobileNumberValue(mobileNumber.current.value);
    setOtpSent(true);
  };
  if (otpSent) {
    return <OtpSent mobileNumber={mobileNumberValue} />;
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="box-border w-3/12 p-4 mx-auto border-4 flex flex-col items-center">
        <h2 className="text-center font-bold mb-4">Login Via OTP</h2>
        <input
          ref={mobileNumber}
          type="text"
          placeholder="Enter your mobile number"
          className="w-80 mb-4"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded-lg"
          onClick={handleOtpSend}
        >
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default OtpLogin;
