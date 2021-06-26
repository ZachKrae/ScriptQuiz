import React from 'react'
import '../App.css';
import useSound from 'use-sound';

function Answer(props) {
    const [play] = useSound(props.sound)

    return (
        <div onClick={play}>
            <button className='answer-button' onClick={() => props.handleAnswerButtonClick(props.latinLetter)}>{props.latinLetter}</button>
        </div>
    )
}

export default Answer