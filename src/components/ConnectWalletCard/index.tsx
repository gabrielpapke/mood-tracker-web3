import { Card } from '@/components/ui/card'
import { chain, client } from '@/lib/web3'
import { ConnectButton } from 'thirdweb/react'

export function ConnectWalletCard() {
    return (
        <Card
            data-testid="connect-wallet-card"
            className="mw-[350px] flex flex-col justify-center gap-4 px-8 py-10"
        >
            <h2 className="text-center text-xl">
                Please, connect your wallet.
            </h2>

            <ConnectButton client={client} chain={chain} />
        </Card>
    )
}
