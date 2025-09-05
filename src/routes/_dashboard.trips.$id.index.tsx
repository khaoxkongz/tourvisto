import { createFileRoute, Link } from "@tanstack/react-router"
import { ContainerWrapper, Container } from "@/components/container"
import { buttonVariants, Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { CalendarIcon, MapPinIcon, StarIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const Route = createFileRoute("/_dashboard/trips/$id/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <ContainerWrapper>
        <Container className="flex flex-col gap-16 pb-16">
          <section className="theme-container grid grid-cols-5 gap-16">
            <Link to="/trips" className={cn(buttonVariants({ variant: "outline" }), "w-fit mx-auto")}>
              Go Back
            </Link>

            <div className="flex flex-col gap-10 col-span-3">
              <div className="flex flex-col gap-6">
                <div className="text-[2.5rem] leading-11 font-semibold">
                  5-Day Japan Highlights: Culture, Food and Adventure
                </div>

                <div className="flex items-center gap-6 text-muted-foreground text-lg">
                  <div className="flex items-center gap-1.5">
                    <CalendarIcon className="size-5 shrink-0 pointer-events-none stroke-1" />
                    <div>5 day plan</div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <MapPinIcon className="size-5 shrink-0 pointer-events-none stroke-1" />
                    <div>Tokyo, Kyoto, Osaka</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 auto-rows-[19rem] gap-5">
                <div>
                  <img
                    src="https://placehold.co/363x304.png"
                    alt=""
                    width={363}
                    height={304}
                    className="size-full object-fill rounded-lg"
                  />
                </div>

                <div className="grid grid-rows-2 gap-5">
                  <div>
                    <img
                      src="https://placehold.co/363x142.png"
                      alt=""
                      width={363}
                      height={142}
                      className="size-full object-fill rounded-lg"
                    />
                  </div>

                  <div>
                    <img
                      src="https://placehold.co/363x142.png"
                      alt=""
                      width={363}
                      height={142}
                      className="size-full object-fill rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-row items-center gap-5 justify-around">
                <Badge>Luxury</Badge>
                <Badge>Beach</Badge>
                <Badge>Mountains</Badge>
                <Badge>Budget</Badge>

                <div className="flex items-center gap-2.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <StarIcon key={index} className="text-yellow-500 fill-current stroke-1 size-5" />
                  ))}
                </div>

                <Badge>4.9 / 5.0</Badge>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-medium">5-Day Japan Adventure</div>

                  <div className="font-medium text-xl">$604</div>
                </div>

                <div className="text-lg font-normal text-muted-foreground">Luxury, Diversity, and Harmony</div>
              </div>

              <div className="flex flex-col gap-4 text-lg font-normal">
                <div>
                  Experience the best of Japan in 5 unforgettable days, traveling through Tokyo, Kyoto, and Osaka. From
                  the bustling streets of Shibuya to the historic temples of Kyoto and the vibrant food scene in Osaka,
                  this itinerary blends culture, sightseeing, and local flavors.{" "}
                </div>

                <div>
                  Relax in a Hakone onsen, explore ancient shrines, and indulge in authentic Japanese cuisine—all while
                  enjoying seamless travel on the Shinkansen. 🚄✨
                </div>
              </div>

              <div className="flex flex-col gap-5 *:not-last:border-b *:not-last:pb-5 text-xl font-normal">
                <div className="flex flex-col gap-4">
                  <div className="font-medium">Day 1: Arrival in Tokyo & Shibuya Exploration</div>
                  <ul className="list-inside list-disc text-muted-foreground text-lg">
                    <li>Arrive at Narita/Haneda Airport & check-in at hotel</li>
                    <li>Visit Shibuya Crossing & Hachiko Statue</li>
                    <li>Explore Shinjuku for city views at Tokyo Metropolitan Govt. Building</li>
                    <li>Dinner at an Izakaya in Golden Gai</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <div>Day 2: Tokyo Sightseeing & Culture</div>
                  <ul className="list-inside list-disc text-muted-foreground text-lg">
                    <li>Morning: Senso-ji Temple in Asakusa</li>
                    <li>Afternoon: Akihabara (tech & anime district)</li>
                    <li>Evening: Walk around Tokyo Tower & Roppongi</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <div>Day 2: Tokyo Sightseeing & Culture</div>
                  <ul className="list-inside list-disc text-muted-foreground text-lg">
                    <li>Take the Hakone Ropeway for a scenic view</li>
                    <li>Relax in an onsen (hot spring)</li>
                    <li>Visit Lake Ashi & see Fuji in the distance</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <div>Day 2: Tokyo Sightseeing & Culture</div>
                  <ul className="list-inside list-disc text-muted-foreground text-lg">
                    <li>Travel to Kyoto via Shinkansen (bullet train)</li>
                    <li>Visit Fushimi Inari Shrine (red torii gates)</li>
                    <li>Explore Gion (Geisha district) in the evening</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <div>Day 5: Shopping & Departure</div>
                  <ul className="list-inside list-disc text-muted-foreground text-lg">
                    <li>Last-minute shopping in Shinsaibashi</li>
                    <li>Head to Kansai/Narita Airport for departure</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <div>Best Time to Visit:</div>
                  <ul className="list-inside list-disc text-muted-foreground text-lg">
                    <li>🌸 Spring (March-May): Cherry blossoms in full bloom, mild temperatures.</li>
                    <li>🍁 Autumn (September-November): Beautiful fall foliage, comfortable weather.</li>
                    <li>❄ Winter (December-February): Quieter, with snow-covered temples creating a magical scene.</li>
                    <li>☀ Summer (June-August): Hot & humid but lively with festivals like Gion Matsuri.</li>
                  </ul>
                </div>

                <div className="flex flex-col gap-4">
                  <div>Weather Info:</div>
                  <ul className="list-inside list-disc text-muted-foreground text-lg">
                    <li>Spring: 10°C - 20°C (50°F - 68°F)</li>
                    <li>Summer: 22°C - 33°C (72°F - 91°F)</li>
                    <li>Autumn: 12°C - 25°C (54°F - 77°F)</li>
                    <li>Winter: 0°C - 10°C (32°F - 50°F)</li>
                  </ul>
                </div>
              </div>

              <picture>
                <img src="https://placehold.co/742x303.png" alt="" width={742} height={303} className="size-full" />
              </picture>

              <Button size="lg" disabled>
                <span>Pay and join trip</span>
                <Badge variant="secondary">$604</Badge>
              </Button>
            </div>
          </section>

          <section className="flex flex-col gap-6">
            <div className="text-2xl font-semibold">Popular Trips</div>

            <div className="grid grid-cols-4 gap-6">
              {Array.from({ length: 4 }).map((_, index) => (
                <div key={index} className="bg-background overflow-hidden rounded-xl shadow-sm">
                  <div>
                    <img
                      src="https://placehold.co/270x180.png"
                      alt=""
                      width={270}
                      height={180}
                      className="size-full object-fill"
                    />
                  </div>

                  <div className="p-4 flex flex-col gap-5">
                    <div className="flex flex-col gap-3">
                      <div className="text-lg font-semibold">Thornridge Cir. Shiloh</div>
                      <div className="flex items-center gap-1.5 text-sm">
                        <MapPinIcon className="size-4 stroke-1 shrink-0 pointer-events-none" />
                        <div className="text-muted-foreground">St George's Ln Singapore</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <Badge>Mountains</Badge>
                      <Badge>City</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Container>
      </ContainerWrapper>
    </div>
  )
}
