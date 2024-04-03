import { Button } from '@/components/ui/button'
import { CardFooter } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { useHome } from '@/pages/Home/home.hooks'
import { useHomeStore } from '@/pages/Home/home.store'
import { Loader2 } from 'lucide-react'

function Footer() {
    const step = useHomeStore((state) => state.step)
    const isSaving = useHomeStore((state) => state.isSaving)
    const { handleBack } = useHome()

    const isFirstStep = step === 0
    return (
        <CardFooter
            className={cn(`flex`, {
                'justify-end': isFirstStep,
                'justify-between': !isFirstStep,
            })}
        >
            {!isFirstStep && (
                <Button
                    variant="outline"
                    disabled={isSaving}
                    onClick={handleBack}
                >
                    Back
                </Button>
            )}

            <Button type="submit">
                {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Next
            </Button>
        </CardFooter>
    )
}

export { Footer }
