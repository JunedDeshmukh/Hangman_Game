import getButtonStyling from "./getButtonStyling";

function Button({ text, onClickHandler, styleType = "primary", type="button" }) {

    return (
        <button
            onClick={onClickHandler}
            type={type}
            className={`px-4 py-2 ${getButtonStyling(styleType)}  text-white rounded-xl h-15 w-80 cursor-pointer `}
        >
            {text}
        </button>
    );
}


export default Button;