import { MoodCard } from "./components/MoodCard";



export function Home() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex justify-center items-center space-y-2 h-[70vh]">
        <MoodCard />
      </div>
    </div>
  )
}
