import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import type { ColumnDef } from "@tanstack/react-table"
import { format } from "date-fns"
import { z } from "zod/v4"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import { cn } from "@/lib/utils"

const schema = z.object({
  id: z.string(),
  fullName: z.string(),
  email: z.string(),
  joinedAt: z.date(),
  itineraryCreated: z.number(),
  role: z.enum(["User", "Admin"]).default("User"),
})

export const columns: ColumnDef<z.infer<typeof schema>>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && "indeterminate")}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "fullName",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
    cell: ({ row }) => (
      <div className="flex items-center gap-1.5">
        <Avatar className="size-10">
          <AvatarImage />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <div className="font-semibold">{row.original.fullName}</div>
      </div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Email address" />,
    cell: ({ row }) => <p>{row.original.email}</p>,
  },
  {
    accessorKey: "joinedAt",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Date Joined" />,
    cell: ({ row }) => <p>{format(row.original.joinedAt, "MMM dd, yyyy")}</p>,
  },
  {
    accessorKey: "role",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Role" />,
    cell: ({ row }) => (
      <Badge
        className={cn(
          "bg-emerald-400/10 text-emerald-700 capitalize",
          row.original.role === "Admin" ? "bg-destructive/10 text-destructive capitalize" : ""
        )}
      >
        {row.original.role}
      </Badge>
    ),
  },
  {
    accessorKey: "itineraryCreated",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Itinerary Created" />,
    cell: ({ row }) => <p>{row.original.itineraryCreated}</p>,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]
