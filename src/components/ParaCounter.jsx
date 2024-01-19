import { useState } from "react";
const ParaCounter = () => {
  const [wordCount, setWordCount] = useState(0);
  const [paragraph, setParagraph] = useState("");

  const handleInputChange = (e) => {
    setWordCount(e.target.value);
  };
  const generateParagraph = () => {
    const words = [
      "This",
      "is",
      "a",
      "random",
      "word",
      "creator",
      "using",
      "words",
      "created",
      "by",
      "Aman",
      "Relan",
    ];
    let newParagraph = "";
    for (let i = 0; i < wordCount; i++) {
      newParagraph += words[Math.floor(Math.random() * words.length)] + " ";
    }
    setParagraph(newParagraph);
  };
  return (
    <div className="mt-10 box-border m-auto w-6/12 p-4 border overflow-auto">
      <h1 className="text-center font-bold">Paragraph Generator</h1>
      <input
        type="text"
        placeholder="Enter number of words"
        className="box-border m-auto border mx-auto w-80"
        onChange={handleInputChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold ml-5 px-2 rounded-lg"
        onClick={generateParagraph}
      >
        Generate Paragraph
      </button>
      <p className="mt-4">Your Paragraph will be generated below this line</p>
      <hr />
      <div>{paragraph}</div>
    </div>
  );
};

export default ParaCounter;
