import { useEffect, useState } from "react"
import CardComp from "./components/CardComp"
import cards from "./data/cards.json"
import type { TCardList, TCard } from "./types/card.types"

const App = () => {
  	const [gameCards, setGameCards] = useState<TCardList>(cards)
	console.log(gameCards);

	const handleCardClick = (clickedCard: TCard) => {
		// Flip the card
		setGameCards((prev) =>
			prev.map((card) =>
				card.id === clickedCard.id ? { ...card, flipped: !card.flipped} : card
			)
		)
	}
	return (
		<div className="main_section">
		<h1>Memory Game</h1>
		<div className="card_container">
			{gameCards.map((card: TCard) => {
        	return <CardComp card={card} clickProp={handleCardClick} key={card.id} />
			})}
		</div>
		</div>
	);
	};

export default App;

