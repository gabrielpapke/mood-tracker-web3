import { useState } from "react";
import { DateRange } from "react-day-picker";
import { endOfDay, startOfDay, subDays } from "date-fns";

const useDateHistory = (defaultDate: DateRange) => {
  const [date, setDate] = useState<DateRange | undefined>(defaultDate)
  const [month, setMonth] = useState<Date>(new Date());

  function setToday() {
    setMonth(new Date());
    setDate(defaultDate)
  }

  function setPastWeek() {
    const today = endOfDay(new Date())
    const to = today
    const from = startOfDay(subDays(today, 7))

    setMonth(today);
    setDate({ from, to })
  }

  function setPastThirtyDays() {
    const today = endOfDay(new Date())
    const to = today
    const from = startOfDay(subDays(today, 30))

    setMonth(today);
    setDate({ from, to })
  }

  return {
    date,
    setDate,
    month,
    setMonth,
    setToday,
    setPastWeek,
    setPastThirtyDays
  }
}


export {
  useDateHistory
}