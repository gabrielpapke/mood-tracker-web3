import SubmittedCard from "./components/SubmittedCard";
import { useHomeStore } from "./home.store";
import { CardContainer } from "./components/CardContainer";

export function Home() {
  const isSubmitted = useHomeStore(state => state.isSubmitted)

  return (
    <Container>
      {isSubmitted ? <SubmittedCard /> : <CardContainer />}
    </Container>
  )
}

const Container = ({ children }: { children: React.ReactNode }) => (
  <div className="flex-1 space-y-4 p-8 pt-6">
    <div className="flex justify-center items-center space-y-2 h-[70vh]">
      {children}
    </div>
  </div>
)