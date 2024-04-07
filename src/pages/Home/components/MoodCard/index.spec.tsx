import { render, screen, within, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MoodCard } from '.'
import { MoodType } from '@/interfaces/mood'
import { LucideProps, PersonStanding } from 'lucide-react'

const card = {
    type: MoodType.PERSONAL,
    title: 'About your personal life.',
    description: "How's your mood today?",
    color: '#fff',
    icon: (props: LucideProps) => <PersonStanding {...props} />,
}

describe('MoodCard form', () => {
    const user = userEvent.setup()
    const handleSubmitMoodMock = vi.fn()

    beforeEach(() => {
        handleSubmitMoodMock.mockClear()
    })

    it('should render form', () => {
        render(<MoodCard card={card} onSubmit={handleSubmitMoodMock} />)

        const form = screen.getByTestId('form-personal')

        expect(form).toBeInTheDocument()
    })

    it('should render four options', () => {
        render(<MoodCard card={card} onSubmit={handleSubmitMoodMock} />)

        const form = screen.getByTestId('form-personal')

        const options = within(form).getAllByRole('radio')

        expect(options.length).toEqual(4)
    })

    it('should not submit before select an option', () => {
        render(<MoodCard card={card} onSubmit={handleSubmitMoodMock} />)

        const form = screen.getByTestId('form-personal')

        const nextButton = within(form).getByText('Next')

        fireEvent.submit(nextButton)

        expect(handleSubmitMoodMock).not.toHaveBeenCalled()
    })

    it('should submit after select an option', async () => {
        render(<MoodCard card={card} onSubmit={handleSubmitMoodMock} />)
        const form = screen.getByTestId('form-personal')

        const optionBad = within(form).getByRole('radio', {
            name: 'bad',
        })
        await user.click(optionBad)

        const nextButton = within(form).getByText('Next')
        await user.click(nextButton)

        expect(optionBad).toBeChecked()
        expect(handleSubmitMoodMock).toHaveBeenCalledWith(card.type, 'bad')
    })
})
