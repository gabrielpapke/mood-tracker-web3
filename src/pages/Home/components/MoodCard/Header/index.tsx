import { CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { LucideProps } from 'lucide-react'

interface HeaderMoodCardProps {
    title: string
    description: string
    color: string
    icon: (props: LucideProps) => React.ReactElement
}

function Header({ title, description, icon, color }: HeaderMoodCardProps) {
    const Icon = () => icon({ color })

    return (
        <CardHeader className="flex-row items-center gap-4">
            <span
                className={`flex h-10 w-10 items-center  justify-center rounded-full bg-black`}
            >
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
