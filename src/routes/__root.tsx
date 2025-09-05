import { Outlet, createRootRoute } from "@tanstack/react-router"
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools"
import { TanstackDevtools } from "@tanstack/react-devtools"

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="group/body overscroll-none font-sans text-foreground antialiased [--footer-height:calc(var(--spacing)*14)] [--header-height:calc(var(--spacing)*14)] xl:[--footer-height:calc(var(--spacing)*24)]">
        <Outlet />
      </div>
      <TanstackDevtools
        config={{ position: "bottom-left" }}
        plugins={[{ name: "Tanstack Router", render: <TanStackRouterDevtoolsPanel /> }]}
      />
    </>
  ),
})
