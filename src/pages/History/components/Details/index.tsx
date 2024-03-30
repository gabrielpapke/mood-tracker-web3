import { Loader2 } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ItemDetail } from "../ItemDetail"

function Details() {
  const Loading = () => (
    <div className="h-[200px] flex items-center justify-center flex-col">
      <Loader2 className="mb-2 h-8 w-8 animate-spin" />
      <span>Loading details...</span>
    </div>)

  const DetailsComponent = () => {
    if (details.length)
      return (
        <ul>
          {details.map(item => <ItemDetail key={item} />)}
        </ul>)

    return <p>No mood between this dates.</p>
  }
  return (
    <div>
      <div className="flex flex-col gap-4 w-[280px]">
        <h2 className="text-2xl font-bold">Details</h2>
        {loadingDetails
          ? <Loading />
          : <ScrollArea className="h-[300px]">
            <DetailsComponent />
          </ScrollArea>
        }
      </div>
    </div>
  )
}

export { Details }