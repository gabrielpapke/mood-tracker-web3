import { ReactElement, useState } from "react";
import { MoodCard } from "./components/MoodCard";
import { BriefcaseBusiness, HeartPulse, LucideProps, PersonStanding } from "lucide-react";

export interface MoodCardProps {
  show: boolean
  type: string
  mood: string
  title: string
  description: string,
  color: string
  icon: (props: LucideProps) => ReactElement
}

export function Home() {
  const [cards,] = useState<MoodCardProps[]>([
    {
      show: false,
      type: 'personal',
      mood: '',
      title: 'About your personal life.',
      description: 'How\'s your mood today?',
      color: '#fff',
      icon: (props) => <PersonStanding {...props} />
    },
    {
      show: false,
      type: 'professional',
      mood: '',
      title: 'About your professional life.',
      description: 'How\'s your mood today?',
      color: '#fff',
      icon: (props) => <BriefcaseBusiness {...props} />
    },
    {
      show: true,
      type: 'health',
      mood: '',
      title: 'About your health.',
      description: 'How\'s your mood today?',
      color: '#fff',
      icon: (props) => <HeartPulse {...props} />
    }
  ])


  function handleSubmitMood({ type }: MoodCardProps, mood: string) {
    console.log(type, mood)
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex justify-center items-center space-y-2 h-[70vh]">
        {cards.map(card => card.show && <MoodCard key={card.type} card={card} onSubmitMood={(mood) => handleSubmitMood(card, mood)} />)}
      </div>

      {/* <pre>{JSON.stringify(cards, undefined, 2)}</pre> */}
    </div>
  )
}
