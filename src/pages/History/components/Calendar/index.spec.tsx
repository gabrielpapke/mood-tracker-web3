import { render } from '@testing-library/react'
import { Calendar } from '.'

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
})
