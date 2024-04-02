import { useHistoryStore } from "../../history.store"
import { ItemDetail } from "../ItemDetail"

const DetailsContent = () => {
  const details = useHistoryStore((state) => state.details)

  if (!details.length) return <p>No mood between this dates.</p>

  return (
    <ul>
      {details.map((item: number) => <ItemDetail key={item} />)}
    </ul>
  )
}

export { DetailsContent }