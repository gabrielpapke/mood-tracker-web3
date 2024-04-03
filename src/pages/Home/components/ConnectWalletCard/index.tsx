import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function ConnectWalletCard() {
    return (
        <Card className="flex w-[350px] flex-col justify-center gap-4 px-8 py-10">
            <h2 className="text-center text-xl">
                Please, connect your wallet.
            </h2>

            <Button>Connect wallet</Button>
        </Card>
    )
}
