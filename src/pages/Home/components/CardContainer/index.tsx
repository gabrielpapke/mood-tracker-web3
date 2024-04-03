import { useHomeStore } from '../../home.store'
import { MoodCard } from '../MoodCard'

function CardContainer() {
    const cards = useHomeStore((state) => state.cards)
    const step = useHomeStore((state) => state.step)

    return cards.map(
        (card, index) =>
            step === index && <MoodCard key={card.type} {...card} />,
    )
}

export { CardContainer }
