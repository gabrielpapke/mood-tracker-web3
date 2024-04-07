import { useHomeStore } from '../../home.store'
import { MoodCard } from '../MoodCard'
import { useHome } from '../../home.hooks'
import { MoodEnumKey, MoodType } from '@/interfaces/mood'

function CardContainer() {
    const cards = useHomeStore((state) => state.cards)
    const step = useHomeStore((state) => state.step)
    const { handleSubmitMood, handleBack } = useHome()

    function onSubmit(type: MoodType, mood: MoodEnumKey) {
        handleSubmitMood(type, mood)
    }

    return (
        <div data-testid="mood-card-container">
            {cards.map(
                (card, index) =>
                    step === index && (
                        <MoodCard
                            key={card.type}
                            card={card}
                            onBack={handleBack}
                            onSubmit={onSubmit}
                        />
                    ),
            )}
        </div>
    )
}

export { CardContainer }
