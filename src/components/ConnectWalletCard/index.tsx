import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function ConnectWalletCard() {
    return (
        <Card
            data-testid="connect-wallet-card"
            className="mw-[350px] flex flex-col justify-center gap-4 px-8 py-10"
        >
            <h2 className="text-center text-xl">
                Please, connect your wallet.
            </h2>

            <Button>Connect wallet</Button>
        </Card>
    )
}
