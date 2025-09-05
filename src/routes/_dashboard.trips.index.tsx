import { createFileRoute } from "@tanstack/react-router"
import { buttonVariants } from "@/components/ui/button"
import { MapPinIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination"
import { cn } from "@/lib/utils"

export const Route = createFileRoute("/_dashboard/trips/")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <div key={index} className="bg-background overflow-hidden rounded-xl shadow-sm">
              <div>
                <img
                  src="https://placehold.co/310x210.png"
                  alt=""
                  width={310}
                  height={210}
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
      </div>
    </>
  )
}
