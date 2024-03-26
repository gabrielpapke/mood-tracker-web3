import { Icons } from "@/components/icons";
import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";

interface MoodOptionProps {
  value: string
  color: string,
  svgIcon: keyof typeof Icons
  description: string
}

export function MoodOption({ value, color, svgIcon, description }: MoodOptionProps) {
  const Icon = Icons[svgIcon]
  return (
    <div>
      <RadioGroupItem className="peer sr-only" id={value} value={value} />
      <Label
        htmlFor={value}
        className={`
          flex
          flex-col
          items-center
          justify-between
          rounded-md
          border-2
          border-muted
          bg-popover p-4
          hover:text-accent-foreground
          hover:bg-${color}-100
          hover:border-${color}-200
          peer-data-[state=checked]:border-${color}-400
          peer-data-[state=checked]:bg-${color}-400
          peer-data-[state=checked]:text-white
        `}
      >
        <Icon className="mb-3 h-6 w-6" />
        {description}
      </Label>
    </div>
  )
}
