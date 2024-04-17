import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useWallet } from '@/lib/web3'

export function ConnectWalletCard() {
    const { connectWallet } = useWallet()

    return (
        <Card
            data-testid="connect-wallet-card"
            className="mw-[350px] flex flex-col justify-center gap-4 px-8 py-10"
        >
            <h2 className="text-center text-xl">
                Please, connect your wallet.
            </h2>

            <Button onClick={() => connectWallet()}>Connect wallet</Button>
        </Card>
    )
}
