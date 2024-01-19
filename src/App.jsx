// import { useState, useEffect } from "react";
// import BackgroundChanger from "./components/BackgroundChanger";
// import ProfileCard from "./components/ProfileCard";;
// import ParaCounter from "./components/ParaCounter";

import BirthdayWisher from "./components/BirthdayWisher";

// import OtpLogin from "./components/OtpLogin";

const App = () => {
  // const [userInfo, setUserInfo] = useState([]);
  // useEffect(() => {
  //   fetchGithubUser();
  // }, []);
  // const fetchGithubUser = async () => {
  //   const userData = await fetch("https://api.github.com/users/AmanRelan");
  //   const jsonData = await userData.json();
  //   setUserInfo(jsonData);
  // };
  return (
    <div>
      {/* <ProfileCard
        name={userInfo.name}
        age={26}
        city={userInfo.location}
        followers={userInfo.followers}
        likes={userInfo.following}
        photos={userInfo.public_repos}
        profilePicture={userInfo.avatar_url}
      />
      <BackgroundChanger />
      <ParaCounter /> */}
      {/* <OtpLogin /> */}
      <BirthdayWisher />
    </div>
  );
};

export default App;
