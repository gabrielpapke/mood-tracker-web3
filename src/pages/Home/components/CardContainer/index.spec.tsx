import { render, screen } from '@testing-library/react'
import { CardContainer } from '.'
import { useHomeStore } from '../../home.store'

describe('Home Card Container', () => {
    it('should show first card at first step', () => {
        const cards = useHomeStore.getState().cards
        render(<CardContainer />)

        const form = screen.queryByTestId(`form-${cards[0].type}`)

        expect(form).toBeInTheDocument()
    })

    it('should show second card at second step', () => {
        const cards = useHomeStore.getState().cards
        useHomeStore.setState({
            step: 1,
        })
        render(<CardContainer />)

        const form = screen.queryByTestId(`form-${cards[1].type}`)

        expect(form).toBeInTheDocument()
    })

    it('should hide others steps', () => {
        useHomeStore.setState({
            step: 0,
        })
        const cards = useHomeStore.getState().cards
        const step = useHomeStore.getState().step
        render(<CardContainer />)

        for (let i = 0; i < cards.length; i++) {
            const form = screen.queryByTestId(`form-${cards[i].type}`)

            if (i === step) {
                return expect(form).toBeInTheDocument()
            }

            expect(form).not.toBeInTheDocument()
        }
    })
})
