import { ReactNode } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useHistoryStore } from '../../history.store'
import { LoadingDetails } from '../LoadingDetails'
import { DetailsContent } from '../DetailsContent'

function Details() {
    const selectedDates = useHistoryStore((state) => state.selectedDates)

    return (
        <Container>
            <h2 className="text-2xl font-bold">Details</h2>

            {selectedDates?.from && selectedDates?.to ? (
                <DetailsContainer />
            ) : (
                <EmptyDateRange />
            )}
        </Container>
    )
}

const EmptyDateRange = () => <p>Please selecte a range.</p>

const DetailsContainer = () => {
    const loadingDetails = useHistoryStore((state) => state.loadingDetails)

    if (loadingDetails) return <LoadingDetails />

    if (!loadingDetails) {
        return (
            <ScrollArea className="h-[300px]">
                <DetailsContent />
            </ScrollArea>
        )
    }
}

const Container = ({ children }: { children: ReactNode }) => (
    <div>
        <div className="flex w-[280px] flex-col gap-4">{children}</div>
    </div>
)

export { Details }
