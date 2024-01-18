import BackgroundChanger from "./components/BackgroundChanger";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  return (
    <div>
      <ProfileCard
        name="Aman Relan"
        age={26}
        city="Indore"
        followers={310}
        likes={100}
        photos={200}
        profilePicture={"https://avatars.githubusercontent.com/u/22621253?v=4"}
      />
      <BackgroundChanger />
    </div>
  );
};

export default App;
