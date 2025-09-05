import { createFileRoute } from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import { z } from "zod/v4"
import { Card } from "@/components/ui/card"
import { columns } from "@/components/columns"
import { DataTable } from "@/components/data-table"

const schema = z.object({
  id: z.string(),
  fullName: z.string(),
  email: z.string(),
  joinedAt: z.date(),
  itineraryCreated: z.number(),
  role: z.enum(["User", "Admin"]).default("User"),
})

const searchSchema = z.object({
  page: z.coerce.number().default(1),
  limit: z.coerce.number().default(10),
})

export const Route = createFileRoute("/_dashboard/users/")({
  loader: () => ({
    users: [
      {
        id: "USR-00001",
        fullName: "James Anderson",
        email: "olivia@jsmastery.pro",
        joinedAt: new Date("Jan 6, 2022"),
        itineraryCreated: 12,
        role: "User",
      },
      {
        id: "USR-00002",
        fullName: "Michael Johnson",
        email: "phoenix@jsmastery.pro",
        joinedAt: new Date("Jan 6, 2022"),
        itineraryCreated: 21,
        role: "User",
      },
      {
        id: "USR-00003",
        fullName: "David Brown",
        email: "lana@jsmastery.pro",
        joinedAt: new Date("Jan 6, 2022"),
        itineraryCreated: 15,
        role: "Admin",
      },
      {
        id: "USR-00004",
        fullName: "Jason Wilson",
        email: "demi@jsmastery.pro",
        joinedAt: new Date("Jan 5, 2022"),
        itineraryCreated: 3,
        role: "User",
      },
      {
        id: "USR-00005",
        fullName: "Mark Davis",
        email: "candice@jsmastery.pro",
        joinedAt: new Date("Jan 5, 2022"),
        itineraryCreated: 6,
        role: "Admin",
      },
      {
        id: "USR-00006",
        fullName: "Kevin Taylor",
        email: "natali@jsmastery.pro",
        joinedAt: new Date("Jan 5, 2022"),
        itineraryCreated: 31,
        role: "User",
      },
      {
        id: "USR-00007",
        fullName: "Brian Miller",
        email: "drew@jsmastery.pro",
        joinedAt: new Date("Jan 4, 2022"),
        itineraryCreated: 17,
        role: "User",
      },
      {
        id: "USR-00008",
        fullName: "Orlando Diggs",
        email: "orlando@jsmastery.pro",
        joinedAt: new Date("Jan 5, 2022"),
        itineraryCreated: 26,
        role: "Admin",
      },
    ] satisfies z.infer<typeof schema>[],
  }),
  validateSearch: searchSchema,
  component: RouteComponent,
})

function RouteComponent() {
  const { users } = Route.useLoaderData()
  const { page, limit } = Route.useSearch()

  const total = users.length
  const safeLimit = Math.max(1, limit) // ป้องกัน division by zero
  const totalPages = total === 0 ? 1 : Math.ceil(total / safeLimit)

  // ถ้าต้องการบังคับ page ให้ไม่เกินขอบเขต
  const currentPage = Math.min(Math.max(1, page), totalPages)

  const start = (currentPage - 1) * safeLimit
  const pagedUsers = users.slice(start, start + safeLimit)

  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div className="flex flex-col gap-1">
          <div className="text-xl font-semibold">Manage Users</div>
          <div className="text-muted-foreground">Filter, sort, and access detailed user profiles</div>
        </div>

        <Button size="lg" className="h-11">
          <PlusIcon />
          <span>Add new user</span>
        </Button>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <Card>
          <DataTable
            columns={columns}
            pagination={{
              page: currentPage,
              limit: safeLimit,
              total,
              totalPages,
            }}
            data={pagedUsers}
          />
        </Card>
      </div>
    </>
  )
}
