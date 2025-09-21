import styles from "./CardComp.module.css"

const CardComp = () => {
	const handleClick = () => {
		console.log("clicked !!")
	}

	return (
		<article onClick={handleClick} className={styles.card}>
			CardComp
		</article>
	)
}

export default CardComp
