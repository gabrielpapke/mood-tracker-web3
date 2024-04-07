import { Button } from '@/components/ui/button'
import { CardFooter } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { useHomeStore } from '@/pages/Home/home.store'
import { Loader2 } from 'lucide-react'

function Footer({ onBack }: { onBack: () => void }) {
    const step = useHomeStore((state) => state.step)
    const isSaving = useHomeStore((state) => state.isSaving)

    const isFirstStep = step === 0

    return (
        <CardFooter
            className={cn(`flex`, {
                'justify-end': isFirstStep,
                'justify-between': !isFirstStep,
            })}
        >
            {!isFirstStep && (
                <Button variant="outline" disabled={isSaving} onClick={onBack}>
                    Back
                </Button>
            )}

            <Button type="submit">
                {isSaving && (
                    <Loader2
                        className="mr-2 h-4 w-4 animate-spin"
                        data-testid="submit-loader"
                    />
                )}
                Next
            </Button>
        </CardFooter>
    )
}

export { Footer }
