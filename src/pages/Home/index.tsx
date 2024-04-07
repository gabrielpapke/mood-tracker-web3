import SubmittedCard from './components/SubmittedCard'
import { useHomeStore } from './home.store'
import { CardContainer } from './components/CardContainer'
import { ConnectWalletCard } from '@/components/ConnectWalletCard'
import { useAppStore } from '@/store/app.store'

export function Home() {
    const { connected } = useAppStore()

    return connected ? <HomeConnected /> : <HomeDisconnected />
}

const HomeConnected = () => {
    const isSubmitted = useHomeStore((state) => state.isSubmitted)

    return (
        <Container>
            {isSubmitted ? <SubmittedCard /> : <CardContainer />}
        </Container>
    )
}

const HomeDisconnected = () => (
    <Container>
        <ConnectWalletCard />
    </Container>
)

const Container = ({ children }: { children: React.ReactNode }) => (
    <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex h-[70vh] items-center justify-center space-y-2">
            {children}
        </div>
    </div>
)
