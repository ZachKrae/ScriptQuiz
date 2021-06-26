import React, { useState } from 'react';
import Game from './components/Game.js';
import SelectLang from './components/SelectLang.js'

export default function App() {
	const [alphIsPicked, setAlphIsPicked] = useState(false);
	const [alphabet, setAlphabet] = useState(""); 
	
	return (
		<div className='app'>
			{alphIsPicked ? (
				<div>
					<Game
						alphabet={alphabet}
						setAlphIsPicked={setAlphIsPicked}
					/>
				</div>
			) : (
				<div>
					<SelectLang
						setAlphabet={setAlphabet}
						setAlphIsPicked={setAlphIsPicked}
					/>
				</div>
			)}
		</div>
	);
}
