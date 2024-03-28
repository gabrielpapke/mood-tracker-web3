import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker"
import { endOfDay, startOfDay } from "date-fns";
import { Calendar } from "@/components/ui/calendar"
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area"
import { useDateHistory } from "@/hooks/history-use-date";
import { cssCalendar } from "@/lib/utils";
import { Loader2 } from "lucide-react";
import { ItemDetail } from "./components/ItemDetail";

const bookedDays = [new Date()];

export function History() {
  const defaultSelected: DateRange = {
    from: startOfDay(new Date()),
    to: endOfDay(new Date()),
  };

  const [loadingDetails, setLoadingDetails] = useState(true);
  const [details,] = useState([1, 2, 3])
  const {
    date,
    setDate,
    month,
    setMonth,
    setToday,
    setPastWeek,
    setPastThirtyDays
  } = useDateHistory(defaultSelected)

  async function getDetailsFromDates(date: DateRange | undefined) {
    console.log('getDatails from dates:', date)
    setLoadingDetails(true)

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(date);
        setLoadingDetails(false)
      }, 2000)
    })
  }

  useEffect(() => {
    getDetailsFromDates(date)
  }, [date])

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
              max={60}
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
              {loadingDetails
                ? <div className="h-[200px] flex items-center justify-center flex-col">
                  <Loader2 className="mb-2 h-8 w-8 animate-spin" />
                  <span>Loading details...</span>
                </div>
                : <ScrollArea className="h-[300px]">
                  <ul>
                    {details.map(item => <ItemDetail key={item} />)}
                  </ul>
                </ScrollArea>
              }
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
