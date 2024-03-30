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

export enum MoodType {
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
  step: number
  isSaving: boolean
  isSubmitted: boolean
  setStep: (newStep: number) => void
  setSaving: (isSaving: boolean) => void
  setSubmitted: (isSubmitted: boolean) => void
}

const useHomeStore = create<HomeState>()((set) => ({
  defaultCards: defaultCards,
  step: 0,
  isSaving: false,
  isSubmitted: false,
  setStep: (newStep: number) => set(() => ({ step: newStep })),
  setSaving: (isSaving: boolean) => set(() => ({ isSaving })),
  setSubmitted: (isSubmitted: boolean) => set(() => ({ isSubmitted })),
}))

export { useHomeStore }