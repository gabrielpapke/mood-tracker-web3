import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";
import { DetailItem, MoodItem } from "@/interfaces/mood";
import { formatDate } from "date-fns";

function ItemDetail({ date, moods }: DetailItem) {
  return (
    <li>
      <h3 className="text-md font-semibold">{formatDate(date, 'dd/MM/yyyy')}</h3>

      <ul>
        {moods.map(({ ...props }, key) => <ItemMood key={key} {...props} />)}
      </ul>

      <Separator className="my-3" />
    </li>
  )
}


const ItemMood = ({ type, rate }: MoodItem) => {
  const Icon = Icons[rate];

  const colors = {
    bad: 'red',
    'not-bad': 'yellow',
    good: 'lime',
    happy: 'emerald'
  }

  return <li className="flex items-center gap-3 capitalize">
    {type}: <Icon className={`h-4 w-4 bg-${colors[rate]}-400 rounded-full`} />
  </li>
}

export { ItemDetail }