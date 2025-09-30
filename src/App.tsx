import { useEffect, useState } from "react"
import CardComp from "./components/CardComp"
import cards from "./data/cards.json"
import type { TCardList, TCard } from "./types/card.types"

const App = () => {

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

	const [flippedCards, setFlippedCards] = useState<TCard["name"][]>([])

	const handleCardClick = (clickedCard: TCard) => {
		// Check if the card is already matched
		if (clickedCard.matched) return

		// Check if we have 2 cards flipped already
		if (flippedCards.length === 2) return

		// Flip the card
		setGameCards((prev) =>
			prev.map((card) =>
			card.id === clickedCard.id ? { ...card, flipped: !card.flipped } : card
			)
		)

		setFlippedCards((prev) => [...prev, clickedCard["name"]])
		}

	useEffect(() => {
		if (flippedCards.length === 2) {
			// Check if the flipped cards match
			const [firstCard, secondCard] = flippedCards
			if (firstCard === secondCard) {
				console.log("match")
				setFlippedCards([]) // empty the flipped cards array

				// set the matched cards to true
				setGameCards((prev) =>
					prev.map((card) =>
					card.name === firstCard ? { ...card, matched: true } : card
					)
				)
			} else {
				// Flip the cards back
				setTimeout(() => {
					setGameCards((prev) =>
					prev.map((card) =>
						// find the cards to flip back to avoid flipping all of them
						flippedCards.some((fc) => fc === card.name)
						? { ...card, flipped: false }
						: card
					)
					)
					setFlippedCards([]) // empty the flipped cards array
				}, 1000)
			}	
		}
	}, [flippedCards])

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

