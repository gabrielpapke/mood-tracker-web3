import { BrowserRouter } from 'react-router-dom'
import { ThirdwebProvider } from 'thirdweb/react'
import { useActiveWalletConnectionStatus } from 'thirdweb/react'

import { Router } from './Router'
import { useEffect } from 'react'
import { useAppStore } from './store/app.store'

export function App() {
    const connectionStatus = useActiveWalletConnectionStatus()
    const { setConnected } = useAppStore()

    useEffect(() => {
        if (connectionStatus === 'connected') {
            setConnected(true)
        } else {
            setConnected(false)
        }
    }, [connectionStatus, setConnected])

    return (
        <ThirdwebProvider>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </ThirdwebProvider>
    )
}
