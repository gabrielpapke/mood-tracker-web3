import { ReactElement, useState } from "react";
import { MoodCard } from "./components/MoodCard";
import { BriefcaseBusiness, HeartPulse, LucideProps, PersonStanding } from "lucide-react";
import SubmittedCard from "./components/SubmittedCard";

export const MoodEnum = {
  "bad": "bad",
  "not-bad": "not-bad",
  "good": "good",
  "happy": "happy"
} as const

export type MoodEnumKey = keyof typeof MoodEnum;

export interface MoodCardProps {
  type: 'personal' | 'professional' | 'health'
  mood?: MoodEnumKey
  title: string
  description: string,
  color: string
  icon: (props: LucideProps) => ReactElement
}

export function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [cards, setCards] = useState<MoodCardProps[]>([
    {
      type: 'personal',
      title: 'About your personal life.',
      description: 'How\'s your mood today?',
      color: '#fff',
      icon: (props) => <PersonStanding {...props} />
    },
    {
      type: 'professional',
      title: 'About your professional life.',
      description: 'How\'s your mood today?',
      color: '#fff',
      icon: (props) => <BriefcaseBusiness {...props} />
    },
    {
      type: 'health',
      title: 'About your health.',
      description: 'How\'s your mood today?',
      color: '#fff',
      icon: (props) => <HeartPulse {...props} />
    }
  ])


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

  const isSubmitted = true;

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
