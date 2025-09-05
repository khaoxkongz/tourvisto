import { createFileRoute } from "@tanstack/react-router"
import * as React from "react"
import confetti from "canvas-confetti"
import { Button } from "@/components/ui/button"
import { ArrowLeftIcon, BadgeCheckIcon } from "lucide-react"
import { ContainerWrapper, Container } from "@/components/container"

export const Route = createFileRoute("/thx")({
  component: RouteComponent,
})

function RouteComponent() {
  function handleClick() {
    const duration = 5 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    }, 250)
  }

  React.useEffect(() => {
    const id = setTimeout(() => {
      handleClick()
    }, 500)

    return () => clearTimeout(id)
  }, [])

  return (
    <div className="relative flex min-h-svh flex-col">
      <header className="fixed bg-background top-0 w-full backdrop-blur-xs shadow-2xs border-b">
        <ContainerWrapper>
          <Container className="h-(--header-height) flex items-center **:data-[slot=separator]:!h-4">
            <div className="inline-flex items-center gap-1.5">
              <img
                src="/assets/icons/logo.svg"
                alt="Tourvisto Logo Icon"
                width={30}
                height={30}
                className="object-fill"
              />
              <div className="text-2xl font-bold">Tourvisto</div>
            </div>
          </Container>
        </ContainerWrapper>
      </header>

      <div className="flex flex-col flex-1 bg-[#F9FBFC]">
        <div className="flex flex-col flex-1 items-center justify-center">
          <div className="w-full max-w-lg text-center">
            <div className="flex flex-col gap-5">
              <BadgeCheckIcon className="size-24 text-emerald-500 stroke-1 mx-auto" />

              <div className="flex flex-col gap-2.5">
                <div className="text-3xl font-semibold">Thank You & Welcome Aboard!</div>

                <div className="text-lg font-normal text-muted-foreground">
                  Your trip's booked — can't wait to have you on this adventure! 🌍️ Get ready to explore & make
                  memories.✨
                </div>
              </div>

              <div className="flex flex-col gap-2.5">
                <Button size="lg" className="w-full">
                  View trip details
                </Button>

                <Button size="lg" variant="outline" className="w-full">
                  <ArrowLeftIcon />
                  <span>Return to homepage</span>
                </Button>

                <Button onClick={handleClick} className="sr-only">
                  Trigger Fireworks
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
