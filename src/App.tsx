import { Label } from "@radix-ui/react-label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { RadioGroup, RadioGroupItem } from "./components/ui/radio-group";
import { Icons } from "./components/icons";

export function App() {
  return (
    <>
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <h1>Web3 Mood Tracker</h1>
          <div className="ml-auto flex items-center space-x-4">
            <Button>Connect wallet</Button>
          </div>
        </div>
      </div>

      <div className="flex-1  space-y-4 p-8 pt-6">
        <div className="flex justify-center items-center space-y-2 h-[70vh]">
          <Card className="w-[350px] md:w-[550px]">
            <CardHeader>
              <CardTitle>About your personal life.</CardTitle>
              <CardDescription>How's your mood today?</CardDescription>
            </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <RadioGroup defaultValue="card" className="grid grid-cols-2 grid-rows-2 gap-4 md:grid-cols-4 md:grid-rows-1">
                      <div>
                        <RadioGroupItem value="bad" id="bad" className="peer sr-only" />
                        <Label
                          htmlFor="bad"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <Icons.bad className="mb-3 h-6 w-6" />
                          Bad
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="not-bad" id="not-bad" className="peer sr-only" />
                        <Label
                          htmlFor="not-bad"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <Icons.meh className="mb-3 h-6 w-6" />
                          Not bad
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
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <Icons.smile className="mb-3 h-6 w-6" />
                          Good
                        </Label>
                      </div>
                      <div>
                        <RadioGroupItem value="happy" id="happy" className="peer sr-only" />
                        <Label
                          htmlFor="happy"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <Icons.laugh className="mb-3 h-6 w-6" />
                          Happy
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-end">
              <Button className="">Next</Button>
            </CardFooter>
          </Card>
        </div>
      </div>

    </>
  )
}
