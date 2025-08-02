import { Link } from "react-router-dom";
import Maskedtext from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../components/Hangman/Hangman";
// import { WordContext } from "../context/WordContext";
import useWordStore from "../stores/WordStore";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./PlayGameMultiPlayer.css";

function PlayGame() {
  // const [searchParams] = useSearchParams();
  // console.log(searchParams.get("text"))

  // const { text, id } = useParams();

  const { state } = useLocation();

  const navigate = useNavigate();

  // const { wo rd } = useContext(WordContext);

  //const { wordList, word } = useWordStore();

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step, setStep] = useState(0);

  console.log("finding word", state.wordSelected);
  console.log("hint ", state.hint);

  function handleLetterClick(letter) {
    if (state.wordSelected?.toUpperCase().includes(letter)) {
      console.log("Correct");
    } else {
      console.log("Wrong");
      setStep(step + 1);
    }

    if (step >= 6) {
      navigate("/gameover");
    }

    setGuessedLetters([...guessedLetters, letter]);
  }

  return (
    <div className="container">
      <h1 className="heading">Guess the word given by your collegue</h1>
      <div className="hint max-h-15 max-w-100 border-4 p-1.5 m-3 border-double border-purple-500 rounded-lg">
        {" "}
        <b>Hint : </b>
        {state.hint}
      </div>

      {/* {wordList.map((word) => {
                return <li key={word.id}>{word.wordValue}</li>
            })} */}

      {state.wordSelected && (
        <>
          <div className="maskedText">
            <Maskedtext
              text={state.wordSelected}
              guessedLetters={guessedLetters}
            />
          </div>

          <div className="letters">
            <LetterButtons
              text={state.wordSelected}
              guessedLetters={guessedLetters}
              onLetterClick={handleLetterClick}
            />
          </div>
          <div className="hangman">
            <HangMan step={step} />
          </div>
        </>
      )}
      <div className="links">
        <Link to="/" className="text-blue-400 ml-4">
          Home
        </Link>
        <Link to="/start" className="text-blue-400 m-4">
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default PlayGame;
