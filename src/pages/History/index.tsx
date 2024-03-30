import { useEffect, useState } from "react";
import { DateRange } from "react-day-picker"
import { endOfDay, startOfDay } from "date-fns";
import { useDateHistory } from "@/hooks/history-use-date";
import { Calendar } from "./components/Calendar";
import { Details } from "./components/Details";

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
          <Calendar />
          <Details />
        </div>
      </div>
    </div>
  )
}
