import { Label } from "@radix-ui/react-label";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormField,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Icons } from "@/components/icons";
import * as zod from 'zod';

interface MoodCardProps {
  card: {
    title: string
    description: string
    type: string
  }
  onSubmitMood: (mood: string) => void,
}

const MOOD_ENUM = ["bad", "not-bad", "good", "happy"] as const

const FormSchema = zod.object({
  mood: zod.enum(MOOD_ENUM, {
    required_error: "You need to select your mood.",
  }),
})


export function MoodCard({ card: { title, description }, onSubmitMood }: MoodCardProps) {
  const form = useForm<zod.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: zod.infer<typeof FormSchema>) {
    onSubmitMood(data.mood)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <Card className="w-[350px] md:w-[550px]">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="mood"
                  render={({ field }) => (
                    <RadioGroup onValueChange={field.onChange} defaultValue="" className="grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:grid-rows-1">
                      <div>
                        <RadioGroupItem className="peer sr-only" id="bad" value="bad" />
                        <Label
                          htmlFor="bad"
                          className="flex
                            flex-col
                            items-center
                            justify-between
                            rounded-md
                            border-2
                            border-muted
                            bg-popover p-4
                            hover:text-accent-foreground
                            hover:bg-red-100
                            hover:border-red-200
                            peer-data-[state=checked]:border-red-400
                            peer-data-[state=checked]:bg-red-400
                            peer-data-[state=checked]:text-white"
                        >
                          <Icons.bad className="mb-3 h-6 w-6" />
                          bad
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="not-bad" id="not-bad" className="peer sr-only" />
                        <Label
                          htmlFor="not-bad"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground
                            hover:bg-yellow-100
                            hover:border-yellow-200  
                            peer-data-[state=checked]:border-yellow-400
                            peer-data-[state=checked]:bg-yellow-400"
                        >
                          <Icons.meh className="mb-3 h-6 w-6" />
                          not bad
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem
                          value="good"
                          id="good"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="good"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4
                          hover:bg-lime-100
                          hover:border-lime-200
                          peer-data-[state=checked]:border-lime-400
                          peer-data-[state=checked]:bg-lime-400"
                        >
                          <Icons.smile className="mb-3 h-6 w-6" />
                          good
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="happy" id="happy" className="peer sr-only" />
                        <Label
                          htmlFor="happy"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4
        
                          hover:bg-emerald-100
                          hover:border-emerald-200
                          peer-data-[state=checked]:border-emerald-400
                          peer-data-[state=checked]:bg-emerald-400"
                        >
                          <Icons.laugh className="mb-3 h-6 w-6" />
                          happy
                        </Label>
                      </div>
                    </RadioGroup>
                  )} />
              </div>
              {form.formState.errors?.mood ? <FormMessage>{form.formState.errors.mood?.message}</FormMessage> : <p className="text-sm font-medium text-gray-400">Please, pick an option.</p>}
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit">Next</Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}
