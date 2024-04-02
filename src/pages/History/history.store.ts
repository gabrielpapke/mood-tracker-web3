import { create } from 'zustand'
import { endOfDay, startOfDay } from 'date-fns';
import { DateRange } from 'react-day-picker';

const defaultSelected: DateRange = {
  from: startOfDay(new Date()),
  to: endOfDay(new Date()),
};

function startOfDayAndEndOfDay(range: DateRange | undefined): DateRange {
  return {
    from: startOfDay(range!.from!),
    to: range?.to ? endOfDay(range.to) : undefined
  }
}


interface HistoryState {
  defaultSelected: DateRange
  selectedDates: DateRange | undefined
  details: number[]
  loadingDetails: boolean
  bookedDays: Date[]
  setLoadingDetails: (isLoading: boolean) => void
  setSelectedDates: (selectedDates: DateRange | undefined) => void
}

const useHistoryStore = create<HistoryState>()((set) => ({
  defaultSelected,
  selectedDates: defaultSelected,
  details: [],
  loadingDetails: true,
  bookedDays: [new Date()],
  setLoadingDetails: (isLoading: boolean) => set(() => ({ loadingDetails: isLoading })),
  setSelectedDates: (range: DateRange | undefined) => set(() => ({
    selectedDates: startOfDayAndEndOfDay(range)
  })),
}))

export { useHistoryStore }