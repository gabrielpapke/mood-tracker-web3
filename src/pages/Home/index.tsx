import SubmittedCard from './components/SubmittedCard'
import { useHomeStore } from './home.store'
import { CardContainer } from './components/CardContainer'
import { ConnectWalletCard } from '@/components/ConnectWalletCard'
import { useAppStore } from '@/store/app.store'
import { CenterContainer } from '@/components/CenterContainer'

export function Home() {
    const { connected } = useAppStore()

    return connected ? <HomeConnected /> : <HomeDisconnected />
}

const HomeConnected = () => {
    const isSubmitted = useHomeStore((state) => state.isSubmitted)

    return (
        <CenterContainer>
            {isSubmitted ? <SubmittedCard /> : <CardContainer />}
        </CenterContainer>
    )
}

const HomeDisconnected = () => (
    <CenterContainer>
        <ConnectWalletCard />
    </CenterContainer>
)
