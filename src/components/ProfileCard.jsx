// Question.1 : create a profile component in reactJS.
// {
//   profilePicture, name, age, city, followers, Likes, photos;
// }
import BlueBokeh from "../assets/blue-bokeh.webp";

const ProfileCard = ({
  name,
  age,
  city,
  followers,
  likes,
  photos,
  profilePicture,
}) => {
  return (
    <div className="border border-solid mx-auto w-80 rounded-xl overflow-hidden relative">
      <img src={BlueBokeh} alt="blue-bokeh" className="w-80" />
      <hr />
      <div className="absolute top-40 left-28">
        <img
          src={profilePicture}
          alt="user-profile"
          className="w-24 h-24 rounded-full mx-auto relative border-white"
        />
      </div>
      <div className="flex gap-1 justify-center mt-10">
        <h2 className="font-bold mb-1">{name}</h2>
        <span>{age}</span>
      </div>
      <div className="text-center mb-4">
        <p>{city}</p>
      </div>
      <hr />
      <div className="flex gap-10 justify-between">
        <div className="p-4">
          <p>
            <b>{followers}</b>
          </p>
          <p>Followers</p>
        </div>
        <div className="p-4">
          <p>
            <b>{likes}</b>
          </p>
          <p>Likes</p>
        </div>
        <div className="p-4">
          <p>
            <b>{photos}</b>
          </p>
          <p>Photos</p>
        </div>
      </div>
    </div>
  );
};
export default ProfileCard;
