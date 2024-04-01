import { create } from 'zustand'
import { BriefcaseBusiness, HeartPulse, LucideProps, PersonStanding } from 'lucide-react';
import { MoodCardProps, MoodType } from '@/interfaces/mood';

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
  cards: MoodCardProps[]
  step: number
  isSaving: boolean
  isSubmitted: boolean
  setStep: (newStep: number) => void
  setCards: (newCards: MoodCardProps[]) => void
  setSaving: (isSaving: boolean) => void
  setSubmitted: (isSubmitted: boolean) => void
}

const useHomeStore = create<HomeState>()((set) => ({
  cards: defaultCards,
  step: 0,
  isSaving: false,
  isSubmitted: false,
  setCards: (newCards: MoodCardProps[]) => set(() => ({ cards: newCards })),
  setStep: (newStep: number) => set(() => ({ step: newStep })),
  setSaving: (isSaving: boolean) => set(() => ({ isSaving })),
  setSubmitted: (isSubmitted: boolean) => set(() => ({ isSubmitted })),
}))

export { useHomeStore }