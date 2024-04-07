import { useAppStore } from '@/store/app.store'
import { Calendar } from './components/Calendar'
import { Details } from './components/Details'
import { ConnectWalletCard } from '@/components/ConnectWalletCard'
import { CenterContainer } from '@/components/CenterContainer'

export function History() {
    const { connected } = useAppStore()
    return (
        <CenterContainer>
            {connected ? (
                <div className="flex flex-col gap-8 sm:flex-row">
                    <Calendar />
                    <Details />
                </div>
            ) : (
                <ConnectWalletCard />
            )}
        </CenterContainer>
    )
}
