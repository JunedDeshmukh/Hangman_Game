import { Link } from "react-router-dom";
import Level8 from '../assets/Images/8.svg'

export const GameOver = () => {
  return (
    <div className=" flex flex-col items-center justify-center text-white text-center space-y-6">
        
            <img className="h-50 w-50" src={Level8} alt="gameover"/>
    
      <h1 className="text-6xl font-extrabold text-red-600 animate-pulse">
        Game Over
      </h1>
      <p className="text-xl text-black">You failed to guess the word.</p>
 <Link to="/">
      <button className="bg-red-500 hover:bg-red-700 cursor-pointer px-6 py-2 rounded text-lg font-semibold text-white">
        Home
      </button></Link>
    </div>
  );
};
