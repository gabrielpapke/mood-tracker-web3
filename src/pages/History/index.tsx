import { Calendar } from "@/components/ui/calendar"
import { DateRange } from "react-day-picker"
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Icons } from "@/components/icons";
import { endOfDay, startOfDay } from "date-fns";
import { useDateHistory } from "@/hooks/history-use-date";
import { cssCalendar } from "@/lib/utils";

const bookedDays = [new Date()];

export function History() {
  const defaultSelected: DateRange = {
    from: startOfDay(new Date()),
    to: endOfDay(new Date()),
  };

  const {
    date,
    setDate,
    month,
    setMonth,
    setToday,
    setPastWeek,
    setPastThirtyDays
  } = useDateHistory(defaultSelected)

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex justify-center items-center space-y-2 h-[70vh]">
        <div className="flex gap-4">
          <div className="flex flex-col gap-4">
            <style>{cssCalendar}</style>
            <Calendar
              id="calendar"
              mode="range"
              defaultMonth={defaultSelected.from}
              selected={date}
              month={month}
              onMonthChange={setMonth}
              className="rounded-md border"
              onSelect={setDate}
              modifiers={{ booked: bookedDays }}
              modifiersClassNames={{
                booked: 'has-mood'
              }}
            />
            <div className="flex justify-between gap-2">
              <Button className="text-xs" onClick={setToday}>Today</Button>
              <Button className="text-xs" onClick={setPastWeek}>Past 7 days</Button>
              <Button className="text-xs" onClick={setPastThirtyDays}>Past 30 days</Button>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-4 w-[280px]">
              <h2 className="text-2xl font-bold">Details</h2>
              <ScrollArea className="h-[300px]">
                <ul>
                  <li>
                    <h3 className="text-md font-semibold">27/03/2024</h3>
                    <ul>
                      <li className="flex items-center gap-3">Personal: <Icons.smile className="h-4 w-4 bg-lime-400 rounded-full" /></li>
                      <li className="flex items-center gap-3">Professional: <Icons.meh className="h-4 w-4 bg-yellow-400 rounded-full" /></li>
                      <li className="flex items-center gap-3">Health: <Icons.laugh className="h-4 w-4 bg-emerald-400 rounded-full" /></li>
                    </ul>

                    <Separator className="my-3" />
                  </li>
                </ul>
              </ScrollArea>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
