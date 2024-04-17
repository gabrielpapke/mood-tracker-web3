import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AppState {
    connected: boolean
    walletAddress: string
    setConnected: (isConnected: boolean) => void
    setWalletAddress: (walletAddress: string) => void
}

const useAppStore = create<AppState>()(
    persist(
        (set) => ({
            connected: false,
            walletAddress: '',
            setConnected: (isConnected: boolean) =>
                set(() => ({ connected: isConnected })),
            setWalletAddress: (walletAddress: string) =>
                set(() => ({ walletAddress })),
        }),
        {
            name: 'app-store-storage',
            partialize: (state) => ({
                connected: state.connected,
                walletAddress: state.walletAddress,
            }),
        },
    ),
)

export { useAppStore }
