import { endOfDay, startOfDay, subDays } from "date-fns";
import { useState } from "react";
import { DateRange } from "react-day-picker";

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


const css = `
.has-mood { 
  position: relative;
}

.has-mood::after {
  content: '';
  display:block;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  bottom: 3px;
  background: black;
  width: 4px;
  height: 4px;
  border-radius: 50%;
}
.has-mood.day-range-end::after, .has-mood.rdp-day_range_start::after {
  background: white;
}
`

export {
  useDateHistory,
  css
}