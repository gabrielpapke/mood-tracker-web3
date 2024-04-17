import { NavLink, useLocation } from 'react-router-dom'
import { Button, buttonVariants } from '../ui/button'
import { Menu, X } from 'lucide-react'
import { cn, getShortAddress } from '@/lib/utils'
import { useState } from 'react'
import { useWallet } from '@/lib/web3'

export default function Navbar() {
    const location = useLocation()
    const { connectWallet, walletAddress } = useWallet()
    const [isOpen, toggleMenu] = useState(false)

    const IconMenu = isOpen ? X : Menu

    return (
        <>
            <div className="relative z-20 border-b bg-white ">
                <div className="flex h-16 items-center px-4">
                    <div className="flex items-center gap-4">
                        <IconMenu
                            className="cursor-pointer sm:hidden"
                            onClick={() => toggleMenu(!isOpen)}
                        />
                        <h1 className="text-xs font-bold sm:text-base">
                            <NavLink
                                to="/"
                                title="Home"
                                onClick={() => toggleMenu(false)}
                                data-active={location.pathname === '/'}
                            >
                                Web3 Mood Tracker
                            </NavLink>
                        </h1>
                    </div>

                    <nav className="hidden items-center gap-4 pl-4 sm:flex">
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
                        {!walletAddress && (
                            <Button size="sm" onClick={() => connectWallet()}>
                                Connect wallet
                            </Button>
                        )}
                        {walletAddress && (
                            <Button size="sm" onClick={() => connectWallet()}>
                                {getShortAddress(walletAddress)}
                            </Button>
                        )}
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="fixed left-0 top-0 z-10 h-dvh w-[200px] bg-white pt-16">
                    <nav className="grid gap-1 px-2 pt-8">
                        <NavLink
                            to="/"
                            onClick={() => toggleMenu(false)}
                            className={cn(
                                buttonVariants({
                                    variant:
                                        location.pathname === '/'
                                            ? 'default'
                                            : 'ghost',
                                    size: 'sm',
                                }),
                                'justify-start',
                            )}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            to="/history"
                            onClick={() => toggleMenu(false)}
                            className={cn(
                                buttonVariants({
                                    variant:
                                        location.pathname === '/history'
                                            ? 'default'
                                            : 'ghost',
                                    size: 'sm',
                                }),
                                'justify-start',
                            )}
                        >
                            History
                        </NavLink>
                    </nav>
                </div>
            )}
            {isOpen && (
                <div className="fixed left-0 top-0 h-dvh w-dvw bg-black opacity-80 backdrop-blur-md"></div>
            )}
        </>
    )
}
