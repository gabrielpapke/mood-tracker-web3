import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function SubmittedCard() {
  return (
    <div className='border rounded p-8 text-center flex flex-col gap-4'>
      <h2 className="text-2xl font-bold">You already submitted your mood today.</h2>

      <Button asChild className='self-center'>
        <Link to={'/history'}>Go to History</Link>
      </Button>

    </div>
  )
}
