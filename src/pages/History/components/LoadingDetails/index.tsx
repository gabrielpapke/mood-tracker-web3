import { Loader2 } from "lucide-react"

const LoadingDetails = () => (
  <div className="h-[200px] flex items-center justify-center flex-col">
    <Loader2 className="mb-2 h-8 w-8 animate-spin" />

    <span>Loading details...</span>
  </div>
)

export { LoadingDetails }