import { create } from 'zustand'
import { endOfDay, startOfDay } from 'date-fns';
import { DateRange } from 'react-day-picker';

const defaultSelected: DateRange = {
  from: startOfDay(new Date()),
  to: endOfDay(new Date()),
};

interface Detail {

}

interface HistoryState {
  defaultSelected: DateRange
  details: number[]
  loadingDetails: boolean
  setLoadingDetails: (isLoading: boolean) => void
}

const useHistoryStore = create<HistoryState>()((set) => ({
  defaultSelected,
  details: [],
  loadingDetails: true,
  setLoadingDetails: (isLoading: boolean) => set(() => ({ loadingDetails: isLoading })),
}))

export { useHistoryStore }