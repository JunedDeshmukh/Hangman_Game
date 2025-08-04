import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const NextLevel = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    // You can fetch a new word or increase difficulty
    navigate('/play'); // back to game or next word
  };

  return (
    <div className="flex flex-col items-center justify-center  ">
      <h1 className="text-4xl font-bold text-green-600 mb-4">Congratulations!</h1>
      <p className="text-lg text-gray-800 mb-6">You guessed the word correctly!</p>
      <button
        onClick={handleNext}
        className="bg-green-500 hover:bg-green-600 text-white m-5 w-2xs px-6 py-2 rounded-lg text-lg font-semibold cursor-pointer"
      >
        Next Word
      </button>
      <Link to="/">
      <button className="bg-red-500 hover:bg-red-700 cursor-pointer px-6 py-2 w-2xs rounded-lg text-lg font-semibold text-white">
        Home
      </button></Link>
    </div>
  );
};

export default NextLevel;
