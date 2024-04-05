import { useHomeStore } from '../../home.store'
import { MoodCard } from '../MoodCard'

function CardContainer() {
    const cards = useHomeStore((state) => state.cards)
    const step = useHomeStore((state) => state.step)

    return (
        <div data-testid="mood-card-container">
            {cards.map(
                (card, index) =>
                    step === index && <MoodCard key={card.type} {...card} />,
            )}
        </div>
    )
}

export { CardContainer }
