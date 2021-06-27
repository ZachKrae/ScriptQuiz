import React from 'react';
import Arabic from './Arabic.js'
import Armenian from './Armenian.js'
import Georgian from './Georgian.js'
import Greek from './Greek.js'
import Persian from './Persian.js'
import RusCyrillic from './RusCyrillic.js'
import Katakana from './Katakana.js'
import Hiragana from './Hiragana.js'
import Hebrew from './Hebrew.js'
import Tibetan from './Tibetan.js'

function SelectLang(props) {
    // const [showScores, setShowScores] = useState(false);
    const selectAnAlph = (chosenAlph) => {
        props.setAlphIsPicked(true);
        props.setAlphabet(chosenAlph);
      }

    return (
        <div className="Game-box">
            <h1>Select the Script You Want to Practice:</h1>
            <div className="Game-grid">
                <div>
                    <button onClick={() => selectAnAlph(Arabic)}>Arabic</button>
                    <button onClick={() => selectAnAlph(Armenian)}>Armenian</button>
                    <button onClick={() => selectAnAlph(Georgian)}>Georgian (Mkhedruli)</button>
                    <button onClick={() => selectAnAlph(Greek)}>Greek</button>
                    <button onClick={() => selectAnAlph(Hebrew)}>Hebrew</button>
                    <button onClick={() => selectAnAlph(Hiragana)}>Japanese (Hiragana)</button>
                    <button onClick={() => selectAnAlph(Katakana)}>Japanese (Katakana)</button>
                    <button onClick={() => selectAnAlph(Persian)}>Persian</button>
                    <button onClick={() => selectAnAlph(RusCyrillic)}>Cyrillic (Russian)</button>
                    <button onClick={() => selectAnAlph(Tibetan)}>Tibetan (Wylie)</button>
                </div>
            </div>
        </div>
    )
}

export default SelectLang