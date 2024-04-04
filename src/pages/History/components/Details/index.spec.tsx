import { render, screen } from '@testing-library/react'

import { useHistoryStore } from '../../history.store'
import { Details } from '.'

describe('Details', () => {
    it('should render empty text', () => {
        useHistoryStore.setState({
            details: [],
            selectedDates: { from: undefined },
            loadingDetails: false,
        })
        render(<Details />)

        const emptyElement = screen.queryByTestId('empty')
        const detailsAreaElement = screen.queryByTestId('details-area')

        expect(emptyElement).toBeInTheDocument()
        expect(detailsAreaElement).not.toBeInTheDocument()
    })

    it('should render details area', () => {
        useHistoryStore.setState({
            details: [],
            selectedDates: { from: new Date(), to: new Date() },
            loadingDetails: false,
        })
        render(<Details />)

        const emptyElement = screen.queryByTestId('empty')
        const detailsAreaElement = screen.queryByTestId('details-area')

        expect(emptyElement).not.toBeInTheDocument()
        expect(detailsAreaElement).toBeInTheDocument()
    })

    it('should not render loading', () => {
        useHistoryStore.setState({
            details: [],
            loadingDetails: false,
        })
        render(<Details />)

        const loadingDetailsElement = screen.queryByTestId('loading-details')

        expect(loadingDetailsElement).not.toBeInTheDocument()

        // useHistoryStore.setState({
        //     loadingDetails: true,
        // })

        // expect(loadingDetailsElement).toBeInTheDocument()
    })

    it('should render loading', () => {
        useHistoryStore.setState({
            details: [],
            loadingDetails: true,
        })
        render(<Details />)

        const loadingDetailsElement = screen.queryByTestId('loading-details')

        expect(loadingDetailsElement).toBeInTheDocument()
    })
})
