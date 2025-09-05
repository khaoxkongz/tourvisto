import { createFileRoute } from "@tanstack/react-router"
import { Card, CardHeader, CardDescription, CardContent, CardTitle } from "@/components/ui/card"
import { ArrowUpIcon, ArrowDownIcon, MapPinIcon, PlusIcon } from "lucide-react"
import { ChartContainer, type ChartConfig, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { AreaChart, Area, BarChart, CartesianGrid, XAxis, Bar, YAxis, Rectangle } from "recharts"
import { cn } from "@/lib/utils"
import * as React from "react"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { _ZodString } from "zod/v4"
import { Button } from "@/components/ui/button"

function TotalUsersComponent({ className, ...props }: React.ComponentProps<typeof Card>) {
  const data = [
    { subscription: 40 },
    { subscription: 90 },
    { subscription: 200 },
    { subscription: 278 },
    { subscription: 89 },
    { subscription: 239 },
    { subscription: 78 },
    { subscription: 89 },
  ]

  const chartConfig = {
    subscription: {
      label: "Subscriptions",
      color: "var(--color-emerald-400)",
    },
  } satisfies ChartConfig

  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader className="flex items-center gap-1.5">
        <CardDescription className="font-medium">Total Users</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 auto-rows-[5rem]">
        <div className="flex flex-col gap-px justify-between">
          <div className="text-3xl font-semibold">12,450</div>

          <div className="flex items-end gap-1.5">
            <div className="flex items-center gap-px text-emerald-500 translate-y-0.5">
              <ArrowUpIcon className="size-4 shrink-0 pointer-events-none stroke-2" />
              <span>12%</span>
            </div>

            <span className="text-xs text-muted-foreground">vs last month</span>
          </div>
        </div>

        <ChartContainer config={chartConfig} className="size-full">
          <AreaChart data={data} margin={{ left: 0, right: 0 }}>
            <Area
              dataKey="subscription"
              fill="var(--color-subscription)"
              fillOpacity={0.05}
              stroke="var(--color-subscription)"
              strokeWidth={2}
              type="monotone"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

function TotalTripsComponent({ className, ...props }: React.ComponentProps<typeof Card>) {
  const data = [
    { subscription: 275 },
    { subscription: 240 },
    { subscription: 140 },
    { subscription: 90 },
    { subscription: 125 },
    { subscription: 140 },
    { subscription: 125 },
    { subscription: 50 },
  ]

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "var(--destructive)",
    },
    subscription: {
      label: "Subscriptions",
      color: "var(--destructive)",
    },
  } satisfies ChartConfig

  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader className="flex items-center gap-1.5">
        <CardDescription className="font-medium">Total Trips</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 auto-rows-[5rem]">
        <div className="flex flex-col gap-px justify-between">
          <div className="text-3xl font-semibold">3,210</div>

          <div className="flex items-end gap-1.5">
            <div className="flex items-center gap-px text-destructive translate-y-0.5">
              <ArrowDownIcon className="size-4 shrink-0 pointer-events-none stroke-2" />
              <span>2%</span>
            </div>

            <span className="text-xs text-muted-foreground">vs last month</span>
          </div>
        </div>

        <ChartContainer config={chartConfig} className="size-full">
          <AreaChart data={data} margin={{ left: 0, right: 0 }}>
            <Area
              dataKey="subscription"
              fill="var(--color-subscription)"
              fillOpacity={0.05}
              stroke="var(--color-subscription)"
              strokeWidth={2}
              type="monotone"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

function ActiveUserTodayComponent({ className, ...props }: React.ComponentProps<typeof Card>) {
  const data = [
    { subscription: 40 },
    { subscription: 90 },
    { subscription: 200 },
    { subscription: 278 },
    { subscription: 89 },
    { subscription: 239 },
    { subscription: 78 },
    { subscription: 89 },
  ]

  const chartConfig = {
    revenue: {
      label: "Revenue",
      color: "var(--color-emerald-400)",
    },
    subscription: {
      label: "Subscriptions",
      color: "var(--color-emerald-400)",
    },
  } satisfies ChartConfig

  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader className="flex items-center gap-1.5">
        <CardDescription className="font-medium">Active Users Today</CardDescription>
      </CardHeader>
      <CardContent className="grid grid-cols-2 auto-rows-[5rem]">
        <div className="flex flex-col gap-px justify-between">
          <div className="text-3xl font-semibold">520</div>

          <div className="flex items-end gap-1.5">
            <div className="flex items-center gap-px text-emerald-500 translate-y-0.5">
              <ArrowUpIcon className="size-4 shrink-0 pointer-events-none stroke-2" />
              <span>2%</span>
            </div>

            <span className="text-xs text-muted-foreground">vs last month</span>
          </div>
        </div>

        <ChartContainer config={chartConfig} className="size-full">
          <AreaChart data={data} margin={{ left: 0, right: 0 }}>
            <Area
              dataKey="subscription"
              fill="var(--color-subscription)"
              fillOpacity={0.05}
              stroke="var(--color-subscription)"
              strokeWidth={2}
              type="monotone"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

function UserGrowthComponent({ className, ...props }: React.ComponentProps<typeof Card>) {
  const data = [
    { month: "January", value: 186 },
    { month: "February", value: 305 },
    { month: "March", value: 237 },
    { month: "April", value: 73 },
    { month: "May", value: 209 },
    { month: "June", value: 214 },
  ]

  const chartConfig = {
    value: {
      label: "Desktop",
      color: "var(--primary)",
    },
  } satisfies ChartConfig

  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader>
        <CardTitle>User Growth</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <YAxis dataKey="value" tickLine={false} axisLine={false} />
            <XAxis dataKey="month" tickLine={false} axisLine={false} tickFormatter={(value) => value.slice(0, 3)} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="value" fill="var(--color-value)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

function TripTrendsComponent({ className, ...props }: React.ComponentProps<typeof Card>) {
  const data = [
    { tripName: "Beach", totals: 50, fill: "var(--color-beach)" },
    { tripName: "Cultural", totals: 20, fill: "var(--color-cultural)" },
    { tripName: "City", totals: 30, fill: "var(--color-city)" },
    { tripName: "Nature", totals: 25, fill: "var(--color-nature)" },
    { tripName: "Culinary", totals: 40, fill: "var(--color-culinary)" },
    { tripName: "Relax", totals: 25, fill: "var(--color-relax)" },
    { tripName: "Adventure", totals: 35, fill: "var(--color-adventure)" },
  ]

  const chartConfig = {
    totals: {
      label: "Total",
    },
    beach: {
      label: "Beach",
      color: "var(--chart-1)",
    },
    cultural: {
      label: "Cultural",
      color: "var(--chart-1)",
    },
    city: {
      label: "City",
      color: "var(--chart-1)",
    },
    nature: {
      label: "Nature",
      color: "var(--chart-1)",
    },
    culinary: {
      label: "Culinary",
      color: "var(--chart-1)",
    },
    relax: {
      label: "Relax",
      color: "var(--chart-1)",
    },
    adventure: {
      label: "Adventure",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig

  return (
    <Card className={cn("", className)} {...props}>
      <CardHeader>
        <CardTitle>Trip Trends</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={data}>
            <CartesianGrid vertical={false} />
            <YAxis dataKey="totals" tickLine={false} axisLine={false} />
            <XAxis dataKey="tripName" tickLine={false} axisLine={false} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar
              dataKey="totals"
              strokeWidth={2}
              radius={8}
              activeIndex={4}
              fillOpacity={0.3}
              activeBar={({ ...props }) => {
                return (
                  <Rectangle
                    {...props}
                    fillOpacity={1}
                    stroke={props.payload.fill}
                    strokeDasharray={4}
                    strokeDashoffset={4}
                  />
                )
              }}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

export const Route = createFileRoute("/_dashboard/dashboard")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div className="flex flex-col gap-1">
          <div className="text-xl font-semibold">Welcome Adrian 👋</div>
          <div className="text-muted-foreground">Track activity, trends, and popular destinations in real time</div>
        </div>
        <Button size="lg" className="h-11">
          <PlusIcon />
          <span>Create a trip</span>
        </Button>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid grid-cols-3 gap-4">
          <TotalUsersComponent />
          <TotalTripsComponent />
          <ActiveUserTodayComponent />
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold">Trips</div>
          <div className="grid auto-rows-max grid-cols-4 gap-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="bg-background overflow-hidden rounded-xl shadow-sm">
                <div>
                  <img
                    src="https://placehold.co/317x224.png"
                    alt=""
                    width={317}
                    height={224}
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
        </div>
        <div className="grid grid-cols-2 gap-4">
          <UserGrowthComponent />
          <TripTrendsComponent />
          <Card>
            <CardHeader className="border-b">
              <CardTitle>Latest user signups</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="uppercase">
                    <TableHead className="text-muted-foreground font-normal">Name</TableHead>
                    <TableHead className="text-muted-foreground font-normal">Itinerary Created</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="*:odd:bg-[#F9FBFC]">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <TableRow key={index}>
                      <TableCell className="inline-flex shrink-0 gap-1.5 items-center py-4">
                        <Avatar>
                          <AvatarImage />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">James Anderson</span>
                      </TableCell>
                      <TableCell>12</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="border-b">
              <CardTitle>Latest trip bookings</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="uppercase">
                    <TableHead className="text-muted-foreground font-normal">Booking</TableHead>
                    <TableHead className="text-muted-foreground font-normal">Travel Dates</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="*:odd:bg-[#F9FBFC]">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <TableRow key={index}>
                      <TableCell className="inline-flex shrink-0 gap-1.5 items-center py-4">
                        <Avatar>
                          <AvatarImage />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">Thornridge Cir. Shiloh</span>
                      </TableCell>
                      <TableCell>Jun 02 - Jun 12</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
