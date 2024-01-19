const BirthdayCards = ({ inputName }) => {
  const birthdayWishes = [
    {
      id: 1,
      text: "Wish you a very Happy Birthday",
      name: inputName,
      wisher: "Aman Relan",
    },
    {
      id: 2,
      text: "Greetings on your Birthday",
      name: inputName,
      wisher: "Aman Relan",
    },
    {
      id: 3,
      text: "Hope all the happiness flows your way this coming year is my only wish for you this birthday. Happy Birthday, mate.",
      name: inputName,
      wisher: "Aman Relan",
    },
  ];
  const cardColors = ["bg-red-200", "bg-blue-200", "bg-purple-200"];

  return (
    <div className="flex flex-wrap -m-3">
      {birthdayWishes.map((birthdayWish, index) => {
        const colorClass = cardColors[index % cardColors.length];

        return (
          <div key={birthdayWish.id} className="w-full md:w-1/3 p-3">
            <div
              className={`${colorClass} h-full flex flex-col rounded-lg shadow-lg overflow-hidden border-2 border-gray-300`}
            >
              <div className="p-5">
                <h2 className="text-lg font-bold mb-2">
                  Hey {birthdayWish.name},
                </h2>
                <p className="text-base mb-4">{birthdayWish.text}</p>
              </div>
              <div className="mt-auto p-5 border-t border-gray-300">
                <h3 className="text-base font-medium">Your Friend,</h3>
                <h3 className="text-base font-medium">{birthdayWish.wisher}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BirthdayCards;
