import { Button } from "@/components/ui/button";
import { Calendar as CalendarUI } from '@/components/ui/calendar'
import { cssCalendar } from "@/lib/utils";

function Calendar() {
  return (
    <div className="flex flex-col gap-4">
      <style>{cssCalendar}</style>
      <CalendarUI
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
  )
}


export { Calendar }