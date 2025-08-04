import { Link } from "react-router-dom";
import Maskedtext from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../components/Hangman/Hangman";
// import { WordContext } from "../context/WordContext";
import useWordStore from "../stores/WordStore";
import useHintStore from "../stores/HintStore";
import { useNavigate } from "react-router-dom";
import "./PlayGame.css";
import { words } from "../db.json";
import { useEffect } from "react";

function PlayGame() {
  // const [searchParams] = useSearchParams();
  // console.log(searchParams.get("text"))

  // const { text, id } = useParams();

  // const { state } = useLocation();

  // const { wo rd } = useContext(WordContext);

  const { setWordList, setWord, word } = useWordStore();
  const { setHint, hint } = useHintStore();

  const navigate = useNavigate();

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [step, setStep] = useState(0);

  async function fetchWords() {
    // const data= fetch('/db.json')
    // const response = await fetch('http://localhost:3000/words');
    // const data = await response.json();
    console.log(words);

    setWordList([...words]);

    const randomIndex = Math.floor(Math.random() * words.length);
    console.log(words[randomIndex].wordHint);
    console.log(words[randomIndex].wordValue);
    setWord(words[randomIndex].wordValue);
    setHint(words[randomIndex].wordHint);
  }

  useEffect(() => {
    fetchWords();
  }, []);

  console.log("hint found", hint);

  function handleLetterClick(letter) {
    if (word?.toUpperCase().includes(letter)) {
      console.log("Correct");
    } else {
      console.log("Wrong");

      setStep(step + 1);
    }
    if (step >= 6) {
      navigate("/gameover");
    }
    // setGuessedLetters([...guessedLetters, letter]);
    const updatedGuessed = [...guessedLetters, letter];
  setGuessedLetters(updatedGuessed);

  // Check if all letters in the word are guessed
  const wordLetters = word?.toUpperCase().split('');
  const allGuessed = wordLetters.every((l) => updatedGuessed.includes(l));

  if (allGuessed) {
    // 🎉 All letters guessed correctly
    console.log("You won!");
    navigate('/nextlevel'); // or show success modal
  }
  }

  return (
    <div className="container">
      <h1 className="heading">Guess the word</h1>
      <div className="hint max-h-15 max-w-150 border-4 p-1.5 m-3 border-double border-purple-500 rounded-lg">
        {" "}
        <b>Hint : </b>
        {hint}
      </div>

      {/* {wordList.map((word) => {
                return <li key={word.id}>{word.wordValue}</li>
            })} */}

      {word && (
        <>
          <div className="maskedText">
            <Maskedtext text={word} guessedLetters={guessedLetters} />
          </div>

          <div className="letter">
            <LetterButtons
              text={word}
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
          Home{" "}
        </Link>
        <Link to="/start" className="text-blue-400 m-4">
          Multiplayer
        </Link>
      </div>
    </div>
  );
}

export default PlayGame;
