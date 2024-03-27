import { useState } from "react"
import { Calendar } from "@/components/ui/calendar"
import { DateRange } from "react-day-picker"

export function History() {
  const defaultSelected: DateRange = {
    from: new Date(),
    to: new Date(),
  };

  const [date, setDate] = useState<DateRange | undefined>(defaultSelected)

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex justify-center items-center space-y-2 h-[70vh]">
        <Calendar
          id="calendar"
          mode="range"
          defaultMonth={defaultSelected.from}
          selected={date}
          className="rounded-md border"
          onSelect={setDate}
        />
      </div>
    </div>
  )
}
