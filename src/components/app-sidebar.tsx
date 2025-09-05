import * as React from "react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link, type LinkOptions } from "@tanstack/react-router"

const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: {
        to: "/dashboard",
      },
      icon: "/assets/icons/home.svg",
    },
    {
      title: "All Users",
      url: {
        to: "/users",
      },
      icon: "/assets/icons/users.svg",
    },
    {
      title: "AI Trips",
      url: {
        to: "/trips",
      },
      icon: "/assets/icons/itinerary-button.svg",
    },
  ] as {
    title: string
    url: LinkOptions
    icon: string
  }[],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader className="border-b-2 border-dashed">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to="/dashboard">
                <div className="flex aspect-square size-8 items-center justify-center rounded-full">
                  <img src="/assets/icons/logo.svg" alt="Tourvisto Logo" width={30} height={30} className="size-full" />
                </div>

                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate text-2xl font-semibold">Tourvisto</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent className="pt-10">
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
