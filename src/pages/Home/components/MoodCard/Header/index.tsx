import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideProps } from "lucide-react";

interface HeaderMoodCardProps {
  title: string
  description: string
  color: string
  icon: (props: LucideProps) => React.ReactElement
}

function Header({ title, description, icon, color }: HeaderMoodCardProps) {
  const Icon = () => icon({ color })

  return (
    <CardHeader className="flex-row gap-4 items-center">
      <span className={`h-10 w-10 rounded-full bg-black flex items-center justify-center`}>
        <Icon />
      </span>
      <div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </div>
    </CardHeader>
  )
}

export { Header }