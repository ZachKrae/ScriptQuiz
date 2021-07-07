import React, { useMemo, useState } from 'react';
import Answer from './Answer';

export default function Game(props) {
	const arrayLength = props.alphabet.length 

	// returns unique values to avoid duplicate answer options
	const uniqueNums = [];
		while(uniqueNums.length < 4){
			var r = Math.floor(Math.random() * Math.floor(arrayLength - 1));
			if(uniqueNums.indexOf(r) === -1) uniqueNums.push(r);
		}

	const [currentQuestion, setCurrentQuestion] = useState(uniqueNums[0]);
	const [pickedTwo, setPickedTwo] = useState(uniqueNums[1])
	const [pickedThree, setPickedThree] = useState(uniqueNums[2])
	const [pickedFour, setPickedFour] = useState(uniqueNums[3])
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [answeredQs, setAnsweredQs] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState("");

	
	const handleAnswerButtonClick = (picked) => {
		setSelectedAnswer(picked);
	};

	//shuffles the answers for each question
	var shuffle = require('shuffle-array')
	const shuffledAnswers = useMemo(() => {
		var answerKey = [
			<Answer key={1} handleAnswerButtonClick={handleAnswerButtonClick} latinLetter={props.alphabet[currentQuestion].latin} sound={props.alphabet[currentQuestion].sound} />,
			<Answer key={2} handleAnswerButtonClick={handleAnswerButtonClick} latinLetter={props.alphabet[pickedTwo].latin} sound={props.alphabet[pickedTwo].sound} />,
			<Answer key={3} handleAnswerButtonClick={handleAnswerButtonClick} latinLetter={props.alphabet[pickedThree].latin} sound={props.alphabet[pickedThree].sound} />,
			<Answer key={4} handleAnswerButtonClick={handleAnswerButtonClick} latinLetter={props.alphabet[pickedFour].latin} sound={props.alphabet[pickedFour].sound} />
		]
		return shuffle(answerKey);
	}, [currentQuestion, pickedFour, pickedThree, pickedTwo, props.alphabet, shuffle])

	//evaluates if selected answer is correct or incorrect
	const evalAnswer = (ans) => {
		const nextQuestion = Math.floor(Math.random() * props.alphabet.length);
		if (ans === props.alphabet[currentQuestion].latin) {
			alert('the answer is correct!')
			setScore(score + 1);
			setCurrentQuestion(nextQuestion);
			setPickedTwo(uniqueNums[1]);
			setPickedThree(uniqueNums[2]);
			setPickedFour(uniqueNums[3]);
			setAnsweredQs(answeredQs + 1);
			setSelectedAnswer("");
		} else {
			setCurrentQuestion(nextQuestion);
			setPickedTwo(uniqueNums[1]);
			setPickedThree(uniqueNums[2]);
			setPickedFour(uniqueNums[3]);
			setAnsweredQs(answeredQs + 1);
			setSelectedAnswer("");
		}
	};

	//end game ans show score
	const finishGame = () => {
		setShowScore(true);
	}

	//restarts game with previously selected writing system
	const restartGame = () => {
		setShowScore(false);
		setCurrentQuestion(0);
		setScore(0);
		setAnsweredQs(0);
	};

	//ends game and returns to selection menu
    const backToMenu = () => {
        props.setAlphIsPicked(false);
		setAnsweredQs(0);
    }

	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>You scored {score} out of {answeredQs}
					<button onClick={() => restartGame()}>Play Again</button>
                    <button onClick={() => backToMenu()}>Back to Menu</button>
				</div>
			) : (
				<div>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {answeredQs + 1}</span>
						</div>
						<div>Match the letter with its latin equivalent:</div>
						<div className='question-text'>{props.alphabet[currentQuestion].name}</div>
					</div>
					<div className='answer-section'>
						{shuffledAnswers}
					</div>
					<hr class="solid"></hr>
					<div>
						<button class="selecter-btn" onClick = {() => evalAnswer(selectedAnswer)}>Submit</button>
						<button class="selecter-btn" onClick = {() => finishGame()}>Finish Game</button>
					</div>
				</div>
			)}
		</div>
	);
}