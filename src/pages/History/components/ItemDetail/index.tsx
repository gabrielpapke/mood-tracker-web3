import { Separator } from "@/components/ui/separator";
import { Icons } from "@/components/icons";

function ItemDetail() {
  return (
    <li>
      <h3 className="text-md font-semibold">27/03/2024</h3>
      <ul>
        <li className="flex items-center gap-3">Personal: <Icons.smile className="h-4 w-4 bg-lime-400 rounded-full" /></li>
        <li className="flex items-center gap-3">Professional: <Icons.meh className="h-4 w-4 bg-yellow-400 rounded-full" /></li>
        <li className="flex items-center gap-3">Health: <Icons.laugh className="h-4 w-4 bg-emerald-400 rounded-full" /></li>
      </ul>

      <Separator className="my-3" />
    </li>
  )
}

export { ItemDetail }