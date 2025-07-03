const ALPHABETS =  [
    "QWERTYUIOP".split(""),
    "ASDFGHJKL".split(""),
    "ZXCVBNM".split(""),
  ];

function LetterButtons({ text, guessedLetters, onLetterClick }) {

    const originalLetters = new Set(text.toUpperCase().split(''));
    const guessedLettersSet = new Set(guessedLetters);

    const buttonStyle = function(letter) {
        if(guessedLettersSet.has(letter)) {
            return `${originalLetters.has(letter) ? 'bg-green-500' : 'bg-red-500'}`;
        } else {
            return 'bg-blue-500';
        }
    }

    function handleLetterClick(event) {
        const characterOfTheLetter = event.target.value;
        onLetterClick?.(characterOfTheLetter);
    }

    // // const buttons = ALPHABETS.map(letter => {
    // //     return (
    // //         <button
    // //             key={`button-${letter}`}
    // //             value={letter}
    // //             onClick={handleLetterClick}
    // //             disabled={guessedLettersSet.has(letter)}
    // //             className={`h-12 w-12 m-1 text-white rounded-md ${buttonStyle(letter)}`}
    // //         >
    // //             { letter }
    // //         </button>
    // //     );
    // }
    // );

    return (
        <>
            {/* { buttons } */}
             <div className="flex flex-col items-center gap-2 p-4">
      {ALPHABETS.map((ALPHABET, rowIndex) => (
        <div key={rowIndex} className="flex gap-1">
          {ALPHABET.map((letter) => (
            <button
              key={`button-${letter}`}
              value={letter}
                onClick={handleLetterClick}
                disabled={guessedLettersSet.has(letter)}
                className={`hover:bg-sky-700 cursor-pointer h-8 w-8 m-1 p-0.1 text-white rounded-md ${buttonStyle(letter)}`}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
        </>
    )

}

export default LetterButtons;