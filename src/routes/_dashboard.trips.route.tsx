import { createFileRoute, Outlet, Link } from "@tanstack/react-router"
import { buttonVariants } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export const Route = createFileRoute("/_dashboard/trips")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div className="flex flex-col gap-1">
          <div className="text-xl font-semibold">Trips</div>
          <div className="text-muted-foreground">View and generate AI travel plans</div>
        </div>

        <Link to="/trips/new" className={cn(buttonVariants({ size: "lg" }), "h-11")}>
          <PlusIcon />
          <span>Create a trip</span>
        </Link>
      </div>

      <Outlet />
    </>
  )
}
