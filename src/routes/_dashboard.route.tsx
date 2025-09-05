import { createFileRoute, Outlet } from "@tanstack/react-router"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"

export const Route = createFileRoute("/_dashboard")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <SidebarProvider defaultOpen={false}>
      <AppSidebar />
      <SidebarInset className="overflow-x-hidden bg-[#F9FBFC]">
        <Outlet />
      </SidebarInset>
    </SidebarProvider>
  )
}
