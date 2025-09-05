import { createFileRoute } from "@tanstack/react-router"
import { LoginForm } from "@/components/login-form"

export const Route = createFileRoute("/login")({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="relative isolate">
      <picture>
        <img
          src="/assets/images/auth-img.webp"
          alt=""
          className="object-fill absolute size-full inset-0 opacity-50 -z-50"
        />
      </picture>

      <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 z-20">
        <div className="w-full max-w-sm">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
