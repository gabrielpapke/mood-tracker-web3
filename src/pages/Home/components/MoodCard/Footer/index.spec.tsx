import { render, screen } from '@testing-library/react'
import { Footer } from '.'
import { useHomeStore } from '@/pages/Home/home.store'
import { MoodType } from '@/interfaces/mood'
import { LucideProps, PersonStanding } from 'lucide-react'
import userEvent from '@testing-library/user-event'

const cards = [
    {
        type: MoodType.PERSONAL,
        title: 'About your personal life.',
        description: "How's your mood today?",
        color: '#fff',
        icon: (props: LucideProps) => <PersonStanding {...props} />,
    },
    {
        type: MoodType.PROFESSIONAL,
        title: 'About your professional life.',
        description: "How's your mood today?",
        color: '#fff',
        icon: (props: LucideProps) => <PersonStanding {...props} />,
    },
]

describe('MoodCard Footer', () => {
    const user = userEvent.setup()
    const onBackSpy = vi.fn()

    beforeEach(() => {
        onBackSpy.mockClear()
    })

    it('should not render back button', () => {
        useHomeStore.setState({
            step: 0,
        })
        render(<Footer onBack={onBackSpy} />)

        const backButton = screen.queryByText(/back/i)

        expect(backButton).not.toBeInTheDocument()
    })

    it('should render back button', () => {
        useHomeStore.setState({
            step: 1,
        })
        render(<Footer onBack={onBackSpy} />)

        const backButton = screen.queryByText(/back/i)

        expect(backButton).toBeInTheDocument()
    })

    it('should call back function', async () => {
        useHomeStore.setState({
            cards,
            step: 1,
        })
        render(<Footer onBack={onBackSpy} />)

        const backButton = screen.queryByText(/back/i)
        await user.click(backButton!)

        expect(onBackSpy).toBeCalled()
    })

    it('should show loader on submitting state', async () => {
        useHomeStore.setState({
            cards,
            step: 1,
            isSaving: true,
        })
        render(<Footer onBack={onBackSpy} />)

        const backButton = screen.queryByText(/back/i)
        const loaderIcon = screen.queryByTestId('submit-loader')

        expect(backButton).toBeDisabled()
        expect(loaderIcon).toBeInTheDocument()
    })
})
