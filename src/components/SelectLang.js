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
import Devanagari from './Devanagari.js'
import Korean from './Korean.js';

function SelectLang(props) {
    // const [showScores, setShowScores] = useState(false);
    const selectAnAlph = (chosenAlph) => {
        props.setAlphIsPicked(true);
        props.setAlphabet(chosenAlph);
      }

    return (
        <div className="Game-box">
            <h1>Select a Script to Practice:</h1>
            <div className="Game-grid">
                <div>
                    <button class="selecter-btn" onClick={() => selectAnAlph(Arabic)}>Arabic</button>
                    <button class="selecter-btn" onClick={() => selectAnAlph(Armenian)}>Armenian</button>
                    <button class="selecter-btn" onClick={() => selectAnAlph(Devanagari)}>Devanagari</button>
                    <button class="selecter-btn" onClick={() => selectAnAlph(Georgian)}>Georgian (Mkhedruli)</button>
                    <button class="selecter-btn" onClick={() => selectAnAlph(Greek)}>Greek</button>
                    <button class="selecter-btn" onClick={() => selectAnAlph(Hebrew)}>Hebrew</button>
                    <button class="selecter-btn" onClick={() => selectAnAlph(Hiragana)}>Japanese (Hiragana)</button>
                    <button class="selecter-btn" onClick={() => selectAnAlph(Katakana)}>Japanese (Katakana)</button>
                    <button class="selecter-btn" onClick={() => selectAnAlph(Korean)}>Korean</button>
                    <button class="selecter-btn" onClick={() => selectAnAlph(Persian)}>Persian</button>
                    <button class="selecter-btn" onClick={() => selectAnAlph(RusCyrillic)}>Cyrillic (Russian)</button>
                    <button class="selecter-btn" onClick={() => selectAnAlph(Tibetan)}>Tibetan (Wylie)</button>
                </div>
            </div>
        </div>
    )
}

export default SelectLang