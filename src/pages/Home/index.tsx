import { useState } from "react";
import { MoodCard } from "./components/MoodCard";
import SubmittedCard from "./components/SubmittedCard";
import { MoodCardProps, MoodEnumKey, MoodType, useHomeStore } from "./home.store";

export function Home() {
  const defaultCards = useHomeStore(state => state.defaultCards)
  const step = useHomeStore(state => state.step)
  const setStep = useHomeStore(state => state.setStep)

  const [cards, setCards] = useState<MoodCardProps[]>(defaultCards)

  function updateCard(type: MoodType, mood: MoodEnumKey) {
    setCards(state =>
      state.map(item => {
        if (item.type === type) {
          return { ...item, mood }
        }

        return item
      })
    )
  }

  function send() {
    alert('send')
  }

  function handleSubmitMood({ type }: MoodCardProps, mood: MoodEnumKey) {
    updateCard(type, mood);

    if (step === cards.length - 1)
      return send();


    setStep(step + 1);
  }

  function handleBack() {
    setStep(step - 1);
  }

  const isSubmitted = false;

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex justify-center items-center space-y-2 h-[70vh]">
        {isSubmitted ? <SubmittedCard /> :
          cards.map((card, index) =>
            (step === index)
            && <MoodCard
              key={card.type}
              card={card}
              onSubmitMood={(mood) => handleSubmitMood(card, mood)}
              onBack={handleBack}
            />)}
      </div>

      {/* <pre>{JSON.stringify(cards, undefined, 2)}</pre> */}
    </div>
  )
}
