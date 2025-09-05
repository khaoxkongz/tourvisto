import { createFileRoute, Link } from "@tanstack/react-router"
import { ContainerWrapper, Container } from "@/components/container"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  BentoGrid,
  BentoCard2,
  BentoCardBackground,
  BentoCardHeader,
  BentoCardTitle,
  BentoCardAction,
  BentoOverlay,
  BentoCardContent,
} from "@/components/magicui/bento-grid"
import { ArrowRightIcon, MapPinIcon } from "lucide-react"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { cn } from "@/lib/utils"

export const Route = createFileRoute("/_web/")({
  component: RouteComponent,
})

const features = [
  {
    title: "London, United State",
    img: {
      url: "/assets/images/card-img-1.png",
      alt: "",
    },
    className: "lg:row-start-1 lg:row-end-3 lg:col-start-1 lg:col-end-5",
  },
  {
    title: "London, United State",
    img: {
      url: "/assets/images/card-img-2.png",
      alt: "",
    },
    className: "lg:row-start-3 lg:row-end-5 lg:col-start-1 lg:col-end-3",
  },
  {
    title: "Australia Tour",
    img: {
      url: "/assets/images/card-img-3.png",
      alt: "",
    },
    className: "lg:row-start-3 lg:row-end-5 lg:col-start-3 lg:col-end-5",
  },
  {
    title: "Australia Tour",
    img: {
      url: "/assets/images/card-img-4.png",
      alt: "",
    },
    className: "",
  },
  {
    title: "Japan Tour",
    img: {
      url: "/assets/images/card-img-5.png",
      alt: "",
    },
    className: "",
  },
  {
    title: "Japan Tour",
    img: {
      url: "/assets/images/card-img-6.png",
      alt: "",
    },
    className: "",
  },
]

function RouteComponent() {
  return (
    <div className="flex flex-col flex-1 gap-20 pb-20 bg-[#F9FBFC]">
      <div className="relative isolate">
        <picture className="size-full">
          <img src="/assets/images/hero-img.png" alt="" className="object-fill absolute size-full inset-0 -z-50" />
        </picture>

        <div className="bg-linear-to-r from-cyan-50 to-transparent absolute inset-0 -z-40"></div>

        <ContainerWrapper>
          <Container>
            <section className="theme-container py-32 pt-60">
              <div className="w-1/2 flex flex-col gap-6">
                <div className="flex flex-col gap-3.5 w-full max-w-lg">
                  <div className="text-7xl font-bold text-pretty wrap-anywhere">Plan Your Trip with Ease</div>
                  <div className="text-lg text-pretty wrap-break-word">
                    Customize your travel itinerary in minutes—pick your destination, set your preferences, and explore
                    with confidence.
                  </div>
                </div>

                <Button size="lg" className="text-lg font-normal h-14 w-3xs">
                  Get Started
                </Button>
              </div>
            </section>
          </Container>
        </ContainerWrapper>
      </div>

      <ContainerWrapper>
        <Container>
          <section className="theme-container flex flex-col gap-10">
            <div className="flex flex-col gap-3.5">
              <div className="text-4xl font-bold">Featured Travel Destinations</div>
              <div className="text-lg font-normal text-muted-foreground">
                Check out some of the best places you can visit around the world.
              </div>
            </div>

            <BentoGrid className="lg:grid-rows-4 lg:grid-cols-5 sm:h-[45rem]">
              {features.slice(0, 3).map((feature, index) => (
                <BentoCard2 key={index} className={feature.className}>
                  <BentoCardBackground>
                    <img src={feature.img.url} className="absolute inset-0 object-fill size-full" />
                  </BentoCardBackground>

                  <BentoCardContent>
                    <BentoCardHeader>
                      <BentoCardTitle className="text-primary-foreground">{feature.title}</BentoCardTitle>
                      <div className="flex items-center gap-1.5">
                        <Avatar className="size-5">
                          <AvatarImage />
                          <AvatarFallback className="text-xs">CN</AvatarFallback>
                        </Avatar>

                        <div className="text-primary-foreground">196 Activities</div>
                      </div>

                      <BentoCardAction className="lg:hidden pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                        <Button variant="link" size="sm" className="pointer-events-auto p-0" asChild>
                          <Link to="/">
                            <span>Learn More</span>
                            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
                          </Link>
                        </Button>
                      </BentoCardAction>
                    </BentoCardHeader>
                  </BentoCardContent>

                  <BentoCardAction className="hidden lg:flex pointer-events-none absolute bottom-0 w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Button variant="link" size="sm" className="pointer-events-auto p-0" asChild>
                      <Link to="/">
                        <span>Learn More</span>
                        <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
                      </Link>
                    </Button>
                  </BentoCardAction>

                  <BentoOverlay />
                </BentoCard2>
              ))}

              <div className="lg:row-start-1 lg:-row-end-1 lg:col-start-5 lg:col-end-6 grid col-span-3 lg:grid-rows-3 auto-rows-[22rem] gap-4 w-full">
                {features.slice(3, 6).map((feature, index) => (
                  <BentoCard2 key={index} className={feature.className}>
                    <BentoCardBackground>
                      <img src={feature.img.url} className="absolute inset-0 object-fill size-full" />
                    </BentoCardBackground>

                    <BentoCardContent>
                      <BentoCardHeader>
                        <BentoCardTitle className="text-primary-foreground">{feature.title}</BentoCardTitle>
                        <div className="flex items-center gap-1.5">
                          <Avatar className="size-5">
                            <AvatarImage />
                            <AvatarFallback className="text-xs">CN</AvatarFallback>
                          </Avatar>

                          <div className="text-primary-foreground">196 Activities</div>
                        </div>

                        <BentoCardAction className="lg:hidden pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          <Button variant="link" size="sm" className="pointer-events-auto p-0" asChild>
                            <Link to="/">
                              <span>Learn More</span>
                              <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
                            </Link>
                          </Button>
                        </BentoCardAction>
                      </BentoCardHeader>
                    </BentoCardContent>

                    <BentoCardAction className="hidden lg:flex pointer-events-none absolute bottom-0 w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <Button variant="link" size="sm" className="pointer-events-auto p-0" asChild>
                        <Link to="/">
                          <span>Learn More</span>
                          <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
                        </Link>
                      </Button>
                    </BentoCardAction>

                    <BentoOverlay />
                  </BentoCard2>
                ))}
              </div>
            </BentoGrid>
          </section>
        </Container>
      </ContainerWrapper>

      <ContainerWrapper>
        <Container>
          <section className="theme-container flex flex-col gap-10">
            <div className="flex flex-col gap-3.5">
              <div className="text-4xl font-bold">Handpicked Trips</div>
              <div className="text-lg font-normal text-muted-foreground">
                Browse well-planned trips designed for different travel styles and interests
              </div>
            </div>

            <div className="grid auto-rows-max grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, index) => (
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

            <Pagination className="border-t pt-6">
              <PaginationContent className="justify-between w-full">
                <PaginationItem>
                  <PaginationPrevious href="#" className={cn(buttonVariants({ variant: "outline" }))} />
                </PaginationItem>

                <div className="flex flex-row items-center gap-1">
                  <PaginationItem>
                    <PaginationLink href="#" className={cn(buttonVariants({ variant: "default" }))}>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" className={cn(buttonVariants({ variant: "ghost" }))}>
                      2
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" className={cn(buttonVariants({ variant: "ghost" }))}>
                      3
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" className={cn(buttonVariants({ variant: "ghost" }))}>
                      6
                    </PaginationLink>
                  </PaginationItem>
                </div>

                <PaginationItem>
                  <PaginationNext href="#" className={cn(buttonVariants({ variant: "outline" }))} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </section>
        </Container>
      </ContainerWrapper>
    </div>
  )
}
