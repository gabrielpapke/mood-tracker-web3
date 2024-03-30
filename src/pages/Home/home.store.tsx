import { create } from 'zustand'
import { BriefcaseBusiness, HeartPulse, LucideProps, PersonStanding } from 'lucide-react';
import { ReactElement } from 'react';

export const MoodEnum = {
  "bad": "bad",
  "not-bad": "not-bad",
  "good": "good",
  "happy": "happy"
} as const

export type MoodEnumKey = keyof typeof MoodEnum;

enum MoodType {
  PERSONAL = "personal",
  PROFESSIONAL = "professional",
  HEALTH = "health",
}

export interface MoodCardProps {
  type: MoodType
  mood?: MoodEnumKey
  title: string
  description: string,
  color: string
  icon: (props: LucideProps) => ReactElement
}

const defaultCards = [
  {
    type: MoodType.PERSONAL,
    title: 'About your personal life.',
    description: 'How\'s your mood today?',
    color: '#fff',
    icon: (props: LucideProps) => <PersonStanding {...props} />
  },
  {
    type: MoodType.PROFESSIONAL,
    title: 'About your professional life.',
    description: 'How\'s your mood today?',
    color: '#fff',
    icon: (props: LucideProps) => <BriefcaseBusiness {...props} />
  },
  {
    type: MoodType.HEALTH,
    title: 'About your health.',
    description: 'How\'s your mood today?',
    color: '#fff',
    icon: (props: LucideProps) => <HeartPulse {...props} />
  }
]

interface HomeState {
  defaultCards: MoodCardProps[]
}

const useHomeStore = create<HomeState>()((set) => ({
  defaultCards: defaultCards
}))

export { useHomeStore }