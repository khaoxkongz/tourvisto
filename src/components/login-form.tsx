import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

function LoginForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <div className="mx-auto inline-flex items-center gap-1.5">
          <img src="/assets/icons/logo.svg" alt="Tourvisto Logo Icon" width={30} height={30} className="object-fill" />
          <div className="text-2xl font-bold">Tourvisto</div>
        </div>

        <CardHeader className="justify-items-center text-center">
          <CardTitle>Start Your Travel Journey</CardTitle>
          <CardDescription>
            Sign in with Google to explore AI-generated itineraries, trending destinations, and much more
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Login with Google</Button>
        </CardContent>
      </Card>
    </div>
  )
}

export { LoginForm }
