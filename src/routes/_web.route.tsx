import { createFileRoute, Outlet } from "@tanstack/react-router"
import { ContainerWrapper, Container } from "@/components/container"

export const Route = createFileRoute("/_web")({
  component: App,
})

function App() {
  return (
    <div className="relative z-10 flex min-h-svh flex-col">
      <header className="fixed bg-transparent z-50 top-0 w-full backdrop-blur-xs">
        <ContainerWrapper>
          <Container className="h-(--header-height) flex items-center **:data-[slot=separator]:!h-4">
            <div className="inline-flex items-center gap-1.5">
              <img
                src="/assets/icons/logo.svg"
                alt="Tourvisto Logo Icon"
                width={30}
                height={30}
                className="object-fill"
              />
              <div className="text-2xl font-bold">Tourvisto</div>
            </div>
          </Container>
        </ContainerWrapper>
      </header>

      <main className="flex flex-1 flex-col">
        <Outlet />
      </main>

      <footer className="bg-[#F9FBFC] w-full">
        <ContainerWrapper>
          <Container className="flex items-center h-(--footer-height)">
            <div className="flex flex-row flex-1 items-center justify-between">
              <div className="inline-flex items-center gap-1.5">
                <img
                  src="/assets/icons/logo.svg"
                  alt="Tourvisto Logo Icon"
                  width={30}
                  height={30}
                  className="object-fill"
                />
                <div className="text-2xl font-bold">Tourvisto</div>
              </div>

              <div className="flex items-center gap-6">
                <div>Terms & Condition</div>
                <div>Privacy Policy</div>
              </div>
            </div>
          </Container>
        </ContainerWrapper>
      </footer>
    </div>
  )
}
