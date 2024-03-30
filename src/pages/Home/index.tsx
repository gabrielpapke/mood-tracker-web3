import { useState } from "react";
import { MoodCard } from "./components/MoodCard";
import SubmittedCard from "./components/SubmittedCard";
import { MoodCardProps, MoodEnumKey, useHomeStore } from "./home.store";

export function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const defaultCards = useHomeStore(state => state.defaultCards)
  const [cards, setCards] = useState<MoodCardProps[]>(defaultCards)

  function handleSubmitMood({ type }: MoodCardProps, mood: MoodEnumKey) {
    setCards(state =>
      state.map(item => {
        if (item.type === type) {
          return { ...item, mood }
        }

        return item
      })
    )

    if (currentStep === cards.length - 1)
      return alert('send')


    setCurrentStep(step => step + 1);
  }

  function handleBack() {
    setCurrentStep(step => step - 1);
  }

  const isSubmitted = false;

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex justify-center items-center space-y-2 h-[70vh]">
        {isSubmitted ? <SubmittedCard /> :
          cards.map((card, index) =>
            (currentStep === index)
            && <MoodCard
              key={card.type}
              card={card}
              step={currentStep}
              onSubmitMood={(mood) => handleSubmitMood(card, mood)}
              onBack={handleBack}
            />)}
      </div>

      {/* <pre>{JSON.stringify(cards, undefined, 2)}</pre> */}
    </div>
  )
}
