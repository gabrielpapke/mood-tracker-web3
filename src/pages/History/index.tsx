import { useEffect } from "react";
import { DateRange } from "react-day-picker"
import { Calendar } from "./components/Calendar";
import { Details } from "./components/Details";
import { useHistoryStore } from "./history.store";

export function History() {
  const setLoadingDetails = useHistoryStore(state => state.setLoadingDetails)
  const selectedDates = useHistoryStore(state => state.selectedDates)

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
