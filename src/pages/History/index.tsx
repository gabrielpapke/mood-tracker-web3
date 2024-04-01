import { Calendar } from "./components/Calendar";
import { Details } from "./components/Details";

export function History() {
  return (
    <Container>
      <Calendar />
      <Details />
    </Container>
  )
}

const Container = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex justify-center items-center space-y-2 h-[70vh]">
        <div className="flex gap-4">
          {children}
        </div>
      </div>
    </div>
  )
}