import { useState } from "react";
import { endOfDay, startOfDay, subDays } from "date-fns";
import { useHistoryStore } from "@/pages/History/history.store";

const useDateHistory = () => {

  const defaultSelected = useHistoryStore(state => state.defaultSelected)
  const setSelectedDates = useHistoryStore(state => state.setSelectedDates)
  const [month, setMonth] = useState<Date>(new Date());

  function setToday() {
    setMonth(new Date());
    setSelectedDates(defaultSelected)
  }

  function setPastWeek() {
    const today = endOfDay(new Date())
    const to = today
    const from = startOfDay(subDays(today, 7))

    setMonth(today);
    setSelectedDates({ from, to })
  }

  function setPastThirtyDays() {
    const today = endOfDay(new Date())
    const to = today
    const from = startOfDay(subDays(today, 30))

    setMonth(today);
    setSelectedDates({ from, to })
  }

  return {
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