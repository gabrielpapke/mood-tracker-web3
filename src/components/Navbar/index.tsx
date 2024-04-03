import { NavLink, useLocation } from 'react-router-dom'
import { Button } from '../ui/button'

export default function Navbar() {
    const location = useLocation()

    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <h1 className="font-bold">Web3 Mood Tracker</h1>
                <nav className="flex items-center gap-4 pl-4">
                    <NavLink
                        to="/"
                        title="Home"
                        data-active={location.pathname === '/'}
                        className="data-[active=true]:underline"
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/history"
                        title="History"
                        data-active={location.pathname === '/history'}
                        className="data-[active=true]:underline"
                    >
                        History
                    </NavLink>
                </nav>
                <div className="ml-auto flex items-center space-x-4">
                    <Button>Connect wallet</Button>
                </div>
            </div>
        </div>
    )
}
