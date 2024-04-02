import { MoodEnumKey, MoodType } from "@/interfaces/mood"
import { useHomeStore } from "./home.store"

const useHome = () => {
  const cards = useHomeStore(state => state.cards)
  const step = useHomeStore(state => state.step)
  const setCards = useHomeStore(state => state.setCards)
  const setStep = useHomeStore(state => state.setStep)
  const setSaving = useHomeStore(state => state.setSaving)
  const setSubmitted = useHomeStore(state => state.setSubmitted)

  function updateCard(type: MoodType, mood: MoodEnumKey) {
    setCards(
      cards.map(item => {
        if (item.type === type) {
          return { ...item, mood }
        }

        return item
      })
    )
  }

  function handleSubmitMood(type: MoodType, mood: MoodEnumKey) {
    updateCard(type, mood);

    if (step === cards.length - 1)
      return send();


    setStep(step + 1);
  }

  function handleBack() {
    setStep(step - 1);
  }

  function send() {
    setSaving(true)

    new Promise((resolve) => {
      setTimeout(() => {
        resolve(true)
        setSaving(false)
        setSubmitted(true)
      }, 3000)
    })
  }

  return {
    handleBack,
    handleSubmitMood
  }
}

export { useHome }