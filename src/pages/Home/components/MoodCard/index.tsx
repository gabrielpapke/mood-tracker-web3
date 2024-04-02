import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Form, FormField, FormMessage } from "@/components/ui/form"
import { MoodCardProps } from '@/interfaces/mood';
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@/components/ui/radio-group";
import * as zod from 'zod';
import { MoodOption } from "../MoodOption";
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { useHomeStore } from '../../home.store';
import { useHome } from '../../home.hooks';
import { Header } from './Header';

const MOOD_ENUM = ["bad", "not-bad", "good", "happy"] as const

const FormSchema = zod.object({
  mood: zod.enum(MOOD_ENUM, {
    required_error: "You need to select your mood.",
  }),
})

export function MoodCard({ title, description, icon, color, mood, type }: MoodCardProps) {
  const step = useHomeStore(state => state.step)
  const isSaving = useHomeStore(state => state.isSaving)
  const { handleSubmitMood, handleBack } = useHome()

  const form = useForm<zod.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      mood: mood
    }
  })

  function onSubmit(data: zod.infer<typeof FormSchema>) {
    handleSubmitMood(type, data.mood)
  }

  const isFirstStep = step === 0;



  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Card className="w-[350px] md:w-[550px]">
          <Header
            title={title}
            description={description}
            icon={icon}
            color={color}
          />

          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <FormField
                  control={form.control}
                  name="mood"
                  render={({ field }) => (
                    <RadioGroup onValueChange={field.onChange} defaultValue={mood} className="grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:grid-rows-1">
                      <MoodOption
                        value="bad"
                        color="red"
                        description="bad"
                        svgIcon="bad"
                      />

                      <MoodOption
                        value="not-bad"
                        color="yellow"
                        description="not bad"
                        svgIcon="meh"
                      />

                      <MoodOption
                        value="good"
                        color="lime"
                        description="good"
                        svgIcon="smile"
                      />

                      <MoodOption
                        value="happy"
                        color="emerald"
                        description="happy"
                        svgIcon="laugh"
                      />
                    </RadioGroup>
                  )} />
              </div>
              {form.formState.errors?.mood ? <FormMessage>{form.formState.errors.mood?.message}</FormMessage> : <p className="text-sm font-medium text-gray-400">Please, pick an option.</p>}
            </div>
          </CardContent>

          <CardFooter className={cn(`flex`, {
            'justify-end': isFirstStep,
            'justify-between': !isFirstStep
          })}>
            {!isFirstStep && <Button variant="outline" onClick={handleBack}>Back</Button>}

            <Button type="submit">
              {isSaving && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}

              Next
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  )
}
