import { Link } from "react-router-dom";
import Maskedtext from "../components/MaskedText/MaskedText";
import LetterButtons from "../components/LetterButtons/LetterButtons";
import { useState } from "react";
import HangMan from "../components/Hangman/Hangman";
// import { WordContext } from "../context/WordContext";
import useWordStore from "../stores/WordStore";
import useHintStore from "../stores/HintStore";
import './PlayGame.css'


function PlayGame() {

    // const [searchParams] = useSearchParams();
    // console.log(searchParams.get("text"))

    // const { text, id } = useParams();

    // const { state } = useLocation();

    // const { wo rd } = useContext(WordContext);

    const { wordList, word } = useWordStore();
    const{ hint } = useHintStore()


    const [guessedLetters, setGuessedLetters] = useState([]);
    const [step, setStep] = useState(0);

    console.log("hint found", hint);

    function handleLetterClick(letter) {
        if(word?.toUpperCase().includes(letter)) {
            console.log('Correct');
        } else {
            console.log('Wrong');
            setStep(step + 1);
        }

        setGuessedLetters([...guessedLetters, letter]);
    }

    return (
        <div className="container">
            <h1 className="heading">Guess the word</h1>
            <div 
            className="hint max-h-15 max-w-100 border-4 p-1.5 m-3 border-double border-purple-500 rounded-lg"
            
            > <b>Hint : </b>{hint}</div>
    
            {/* {wordList.map((word) => {
                return <li key={word.id}>{word.wordValue}</li>
            })} */}

            {word && (
                <>
                    <div className="maskedText">
                        <Maskedtext text={word} guessedLetters={guessedLetters} />
                    </div>
                    
                    <div className="letter">
                        <LetterButtons text={word} guessedLetters={guessedLetters} onLetterClick={handleLetterClick} />

                    </div>
                    <div className="hangman">
                        <HangMan step={step} />
                    </div>  
                </> 
            )}
        <div className="links">
            <Link to='/' className="text-blue-400 ml-4">Home </Link>
            <Link to='/start' className="text-blue-400 m-4">Multiplayer</Link>
        </div>
        </div>
    );
}

export default PlayGame;