import type { TCard } from "../types/card.types"
import styles from "./CardComp.module.css"

export type TCardProps = {
	clickProp: (card: TCard) => void
	card: TCard
}

const CardComp = ({ clickProp, card }: TCardProps) => {
	const handleClick = () => {
		console.log("clicked", card)
		clickProp(card)
	}

	return (
	<article
		onClick={handleClick}
		className={`${styles.card} ${card.flipped ? styles.animate__rotate : ""}`}
	>
		<img src={`./imgs/${card.image}`} alt={card.name} />
	</article>
	)

}

export default CardComp