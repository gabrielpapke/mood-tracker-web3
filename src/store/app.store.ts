import { create } from 'zustand'

interface AppState {
    connected: boolean
    setConnected: (isConnected: boolean) => void
}

const useAppStore = create<AppState>()((set) => ({
    connected: true,
    setConnected: (isConnected: boolean) =>
        set(() => ({ connected: isConnected })),
}))

export { useAppStore }
