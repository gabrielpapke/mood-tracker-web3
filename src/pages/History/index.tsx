import { useAppStore } from '@/store/app.store'
import { Calendar } from './components/Calendar'
import { Details } from './components/Details'
import { ConnectWalletCard } from '@/components/ConnectWalletCard'

export function History() {
    const { connected } = useAppStore()
    return (
        <Container>
            {connected ? (
                <>
                    <Calendar />
                    <Details />
                </>
            ) : (
                <ConnectWalletCard />
            )}
        </Container>
    )
}

const Container = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex h-[70vh] items-center justify-center space-y-2">
                <div className="flex gap-4">{children}</div>
            </div>
        </div>
    )
}
