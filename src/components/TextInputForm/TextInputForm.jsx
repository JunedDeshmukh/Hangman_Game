import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({ inputType, handleFormSubmit, handleTextInputChange, handleShowHideClick ,handleHintInputChange}) {
   
    return (
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-y-4 align-evenly">
            <div>
                <TextInput 
                    type={inputType}
                    label="Enter a word"
                    placeholder="Enter a word ..."
                    onChangeHandler={handleTextInputChange}
                />
            </div>

             <div>
                <TextInput 
                    type={inputType}
                    label="Enter a Hint"
                    placeholder="Enter a hint (eg. An Animal,A city)"
                    onChangeHandler={handleHintInputChange}
                />
            </div>

            <div>
                <Button
                    styleType="warning"
                    text={inputType === "password" ? "Show" : "Hide"}
                    onClickHandler={handleShowHideClick}
                />
            </div>

            <div>
                <Button
                    type="submit"
                    styleType="primary"
                    text="Submit"
                />
            </div>
        </form>
    );
}

export default TextInputForm;