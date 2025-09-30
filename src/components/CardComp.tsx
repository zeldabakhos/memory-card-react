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
			CardComp
		</article>
	)
}

export default CardComp