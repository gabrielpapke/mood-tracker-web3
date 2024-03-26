import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function ConnectWalletCard() {
  return (
    <Card className="w-[350px] px-8 py-10 gap-4 flex flex-col justify-center">
      <h2 className="text-xl text-center">Please, connect your wallet.</h2>

      <Button>Connect wallet</Button>
    </Card>
  )
}