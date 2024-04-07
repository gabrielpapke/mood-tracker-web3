import { render } from '@testing-library/react'
import { Home } from '.'
import { useHomeStore } from './home.store'
import { MemoryRouter } from 'react-router-dom'
import { InitialEntry } from '@remix-run/router'
import { useAppStore } from '@/store/app.store'

const wrapperRouter = (initialEntries: InitialEntry[]) => {
    return ({ children }: { children: React.ReactNode }) => (
        <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
    )
}

describe('Home', () => {
    useAppStore.setState({
        connected: true,
    })

    it('should render submitted card', () => {
        useHomeStore.setState({
            isSubmitted: true,
        })

        const wrapper = render(<Home />, {
            wrapper: wrapperRouter(['/']),
        })

        const submittedComponent = wrapper.queryByTestId('submitted-card')

        expect(submittedComponent).toBeInTheDocument()
    })

    it('should not render submitted card', () => {
        useHomeStore.setState({
            isSubmitted: false,
        })

        const wrapper = render(<Home />, {
            wrapper: wrapperRouter(['/']),
        })

        const submittedComponent = wrapper.queryByTestId('submitted-card')

        expect(submittedComponent).not.toBeInTheDocument()
    })

    it('should render connect wallet card when user is disconnected', () => {
        useAppStore.setState({
            connected: false,
        })

        const wrapper = render(<Home />, {
            wrapper: wrapperRouter(['/']),
        })

        const connectWalletCardComponent = wrapper.queryByTestId(
            'connect-wallet-card',
        )

        expect(connectWalletCardComponent).toBeInTheDocument()
    })

    it('should render mood card container when user is connected', () => {
        useAppStore.setState({
            connected: true,
        })

        const wrapper = render(<Home />, {
            wrapper: wrapperRouter(['/']),
        })

        const moodCardCardComponent = wrapper.queryByTestId(
            'mood-card-container',
        )

        expect(moodCardCardComponent).toBeInTheDocument()
    })
})
