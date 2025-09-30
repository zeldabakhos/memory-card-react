import { useEffect, useState } from "react"
import CardComp from "./components/CardComp"
import cards from "./data/cards.json"
import type { TCardList, TCard } from "./types/card.types"

const App = () => {
  	const [gameCards, setGameCards] = useState<TCardList>(cards)
	console.log(gameCards);

	return (
		<div className="main_section">
		<h1>Memory Game</h1>
		<div className="card_container">
			{gameCards.map((card: TCard) => {
        	return <CardComp card={card} clickProp={() => {}} key={card.id} />
			})}
		</div>
		</div>
	);
	};

export default App;

