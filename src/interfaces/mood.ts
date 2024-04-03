import { LucideProps } from 'lucide-react'

export const MoodEnum = {
    bad: 'bad',
    'not-bad': 'not-bad',
    good: 'good',
    happy: 'happy',
} as const

export type MoodEnumKey = keyof typeof MoodEnum

export enum MoodType {
    PERSONAL = 'personal',
    PROFESSIONAL = 'professional',
    HEALTH = 'health',
}

export interface MoodCardProps {
    type: MoodType
    mood?: MoodEnumKey
    title: string
    description: string
    color: string
    icon: (props: LucideProps) => React.ReactElement
}

export interface MoodItem {
    type: MoodType
    rate: MoodEnumKey
}

export interface DetailItem {
    date: Date
    moods: MoodItem[]
}
