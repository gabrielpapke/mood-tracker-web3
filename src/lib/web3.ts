import { useAppStore } from '@/store/app.store'
import { BaseContract } from 'ethers'
import abi from './abi.json'
import { provider } from './provider'

export const contract = new BaseContract(
    '0xEDCFEb7722947852D4185e4Bf8bcF3E3db32187c',
    abi,
)

const useWallet = () => {
    const { connected, setConnected, setWalletAddress, walletAddress } =
        useAppStore()

    // Function to connect/disconnect the wallet
    async function connectWallet() {
        if (!connected) {
            // Connect the wallet using ethers.js
            const signer = await provider.getSigner()
            const _walletAddress = await signer.getAddress()
            setConnected(true)
            setWalletAddress(_walletAddress)
        } else {
            // Disconnect the wallet
            setConnected(false)
            setWalletAddress('')
        }
    }

    return {
        connectWallet,
        walletAddress,
        setWalletAddress,
    }
}
export { useWallet }
