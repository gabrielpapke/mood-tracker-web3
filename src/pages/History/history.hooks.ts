import { useEffect, useState } from "react";
import { endOfDay, startOfDay, subDays } from "date-fns";
import { useHistoryStore } from "@/pages/History/history.store";
import { DateRange } from "react-day-picker";

const useDateHistory = () => {

  const defaultSelected = useHistoryStore(state => state.defaultSelected)
  const setSelectedDates = useHistoryStore(state => state.setSelectedDates)
  const setLoadingDetails = useHistoryStore(state => state.setLoadingDetails)
  const selectedDates = useHistoryStore(state => state.selectedDates)
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

  useEffect(() => {
    function getDetailsFromDates(date: DateRange | undefined) {
      console.log('getDatails from dates:', date)
      setLoadingDetails(true)

      return new Promise(resolve => {
        setTimeout(() => {
          resolve(date);
          setLoadingDetails(false)
        }, 2000)
      })
    }

    getDetailsFromDates(selectedDates)
  }, [selectedDates, setLoadingDetails])

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