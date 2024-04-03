import { Loader2 } from 'lucide-react'

const LoadingDetails = () => (
    <div className="flex h-[200px] flex-col items-center justify-center">
        <Loader2 className="mb-2 h-8 w-8 animate-spin" />

        <span>Loading details...</span>
    </div>
)

export { LoadingDetails }
