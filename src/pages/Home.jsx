import {  Link } from "react-router-dom";
import Button from "../components/Button/Button";
import { useEffect } from "react";
// import { WordContext } from "../context/WordContext";
import useWordStore from "../stores/WordStore";
import {words} from '../db.json'

function Home() {
    
    // const { setWord } = useContext(WordContext);

    const { setWordList, setWord } = useWordStore(); // coming from the store

    async function fetchWords() {
        // const data= fetch('/db.json')
        // const response = await fetch('http://localhost:3000/words');
        // const data = await response.json();
        console.log(words);

        setWordList([...words])

        const randomIndex = Math.floor(Math.random() * words.length);
        console.log(words[randomIndex].wordHint);
         console.log(words[randomIndex].wordValue);
        setWord(words[randomIndex].wordValue);
    }

    useEffect(() => {
        fetchWords();
    }, []);

    return (
        <div >
            <h1 className="tracking-widest text-6xl text-center mb-15 text-shadow-lg">HANGMAN</h1>
            <br/>
            <div className="gap-10">
            <Link to='/play' >
                <Button text="Single player" className={"h-w-20 "  }/>
            </Link>
            <br />
            <Link to="/start" >
                <div className="mt-4">
                    <Button text="Multi player" styleType="secondary" />
                    
                </div>
            </Link>
            </div>
        </div>
    )
}

export default Home;