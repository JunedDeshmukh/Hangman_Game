import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";
import Button from "../components/Button/Button";

function StartGame() {
    return (
        <>
            {/* <h1>Start Game</h1> */}
            <TextInputFormContainer />
            {/* <Link to='/multiplayer'  className="text-white-400 ">Play Game Link</Link> */}
        </>
    )
}

export default StartGame;