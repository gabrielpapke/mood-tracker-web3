import { Button } from '../ui/button'

export default function Navbar() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <h1>Web3 Mood Tracker</h1>
        <div className="ml-auto flex items-center space-x-4">
          <Button>Connect wallet</Button>
        </div>
      </div>
    </div>
  )
}
