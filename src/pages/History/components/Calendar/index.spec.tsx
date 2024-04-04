import { render } from '@testing-library/react'
import { Calendar } from '.'
import { useHistoryStore } from '../../history.store'

describe('Calendar', () => {
    it('should init calendar with today selected', () => {
        const { container } = render(<Calendar />)

        const today = new Date().getDay()

        const daySelected = container.querySelector(
            '.day-range-end.rdp-day_range_start',
        )

        const daySelectedText = Number(daySelected?.innerHTML)

        expect(daySelectedText).toEqual(today)
    })

    it('should have a mark on days', async () => {
        const [month, year] = [new Date().getMonth(), new Date().getFullYear()]
        const fifteenthDay = new Date(year, month, 15)
        const twentiethDay = new Date(year, month, 20)

        useHistoryStore.setState({
            bookedDays: [fifteenthDay, twentiethDay],
        })

        const wrapper = render(<Calendar />)

        const fifteenthDayButton = wrapper.getByText('15', { exact: true })
        const twentiethDayButton = wrapper.getByText('20', { exact: true })

        expect(fifteenthDayButton).toHaveClass('has-mood')
        expect(twentiethDayButton).toHaveClass('has-mood')
    })
})
