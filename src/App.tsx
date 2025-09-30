import { useEffect, useState } from "react"
import CardComp from "./components/CardComp"
import cards from "./data/cards.json"
import type { TCardList, TCard } from "./types/card.types"

const App = () => {

	const handleCardClick = (clickedCard: TCard) => {
		// Flip the card
		setGameCards((prev) =>
			prev.map((card) =>
				card.id === clickedCard.id ? { ...card, flipped: !card.flipped} : card
			)
		)
	}

	// Create pairs of cards
	const createGameCards = (): TCardList => {
		const pairs = cards.flatMap((card) => [
			{ ...card, id: card.id },
			{ ...card, id: card.id + 100 },
		])
		return pairs
	}
	const shuffleCards = (cards: TCardList): TCardList => {
    	return cards.sort(() => Math.random() - 0.5)
  	}

	const [gameCards, setGameCards] = useState<TCardList>(
		shuffleCards(createGameCards()) 
	)	
	console.log(gameCards);

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

