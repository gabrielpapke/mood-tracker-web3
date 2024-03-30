import { Button } from "@/components/ui/button";
import { Calendar as CalendarUI } from '@/components/ui/calendar'
import { cssCalendar } from "@/lib/utils";
import { useHistoryStore } from "../../history.store";
import { useDateHistory } from "@/hooks/history-use-date";

function Calendar() {
  const bookedDays = useHistoryStore((state) => state.bookedDays)
  const defaultSelected = useHistoryStore((state) => state.defaultSelected)
  const selectedDates = useHistoryStore((state) => state.selectedDates)
  const setSelectedDates = useHistoryStore((state) => state.setSelectedDates)
  const {
    month,
    setMonth,
    setToday,
    setPastWeek,
    setPastThirtyDays
  } = useDateHistory()


  return (
    <div className="flex flex-col gap-4">
      <style>{cssCalendar}</style>
      <CalendarUI
        id="calendar"
        mode="range"
        defaultMonth={defaultSelected.from}
        selected={selectedDates}
        month={month}
        max={60}
        onMonthChange={setMonth}
        className="rounded-md border"
        onSelect={setSelectedDates}
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
  )
}


export { Calendar }