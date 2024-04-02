import { useHomeStore } from '../../home.store'
import { MoodCard } from '../MoodCard'
import { useHome } from '../../home.hooks'

function CardContainer() {
  const cards = useHomeStore(state => state.cards)
  const step = useHomeStore(state => state.step)

  const { handleBack, handleSubmitMood } = useHome()

  return cards.map((card, index) =>
    (step === index) && (
      <MoodCard
        key={card.type}
        card={card}
        onSubmitMood={(mood) => handleSubmitMood(card, mood)}
        onBack={handleBack}
      />
    )
  )
}


export { CardContainer }