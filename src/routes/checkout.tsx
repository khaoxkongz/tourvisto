import { createFileRoute } from "@tanstack/react-router"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod/v4"
import { Separator } from "@/components/ui/separator"
import { ArrowLeftIcon } from "lucide-react"

const formSchema = z.object({
  email: z.email(),
  cardNo: z.string(),
  mmYY: z.string(),
  cvc: z.string(),
  nameOnCard: z.string(),
  countryOrRegion: z.string(),
  zipcode: z.string(),
})

export const Route = createFileRoute("/checkout")({
  component: RouteComponent,
})

function RouteComponent() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      cardNo: "",
      mmYY: "",
      cvc: "",
      nameOnCard: "",
      countryOrRegion: "United States",
      zipcode: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="grid min-h-svh lg:grid-cols-2 **:data-[slot=separator]:!h-4">
      <div className="grid grid-cols-5 gap-4">
        <div className="grid grid-rows-12 justify-items-end">
          <div className="row-start-2 grid items-center -translate-y-1.5">
            <Button size="icon" variant="ghost">
              <ArrowLeftIcon className="text-muted-foreground" />
            </Button>
          </div>
        </div>

        <div className="col-span-3 col-start-2 grid items-center">
          <div className="w-full max-w-md flex flex-col gap-10">
            <div className="inline-flex items-center gap-1.5">
              <picture>
                <img
                  src="/assets/icons/logo.svg"
                  alt="Tourvisto Logo Icon"
                  width={30}
                  height={30}
                  className="object-fill size-full"
                />
              </picture>
              <div className="text-2xl font-bold">Tourvisto</div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-2">
                <div className="text-lg font-normal">Pay 5-Day Japan Highlights: Culture, Food and Adventure</div>
                <div className="text-4xl font-semibold">$ 604.00</div>
              </div>

              <picture>
                <img
                  src="https://placehold.co/300x200.png"
                  alt=""
                  width={300}
                  height={200}
                  className="size-full rounded-xl"
                />
              </picture>

              <div className="flex flex-col gap-2.5">
                <div className="text-xl font-semibold">5-Day Japan Adventure</div>
                <div className="text-muted-foreground">Luxury, Diversity, and Harmony</div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-auto pb-10 text-xs font-medium text-muted-foreground">
            <div>
              Powered by <span className="font-semibold">Tourvisto</span>
            </div>

            <Separator orientation="vertical" />

            <div>Terms</div>
            <div>Privacy</div>
          </div>
        </div>
      </div>

      <div className="shadow-xl flex items-center justify-center">
        <div className="flex flex-col gap-4 p-6 md:p-10 flex-1">
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
                  <div className="grid gap-6">
                    <Button size="lg" className="w-full h-12">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                          d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                          fill="currentColor"
                        />
                      </svg>
                      <span>Pay</span>
                    </Button>

                    <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                      <span className="bg-background text-muted-foreground relative z-10 px-2">Or pay with card</span>
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-normal text-muted-foreground">Username</FormLabel>
                        <FormControl>
                          <Input {...field} className="h-10" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div>
                    <FormField
                      control={form.control}
                      name="cardNo"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-normal text-muted-foreground">Country or region</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="1234 1234 1234 1234"
                              className="rounded-b-none border-b-0 h-10"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="flex items-center">
                      <FormField
                        control={form.control}
                        name="mmYY"
                        render={({ field }) => (
                          <FormItem className="basis-1/2">
                            <FormControl>
                              <Input
                                {...field}
                                placeholder="MM / YY"
                                className="rounded-r-none rounded-tl-none border-r-0 h-10"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="cvc"
                        render={({ field }) => (
                          <FormItem className="basis-1/2">
                            <FormControl>
                              <Input {...field} placeholder="CVC" className="rounded-l-none rounded-tr-none h-10" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="nameOnCard"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-normal text-muted-foreground">Name on card</FormLabel>
                        <FormControl>
                          <Input {...field} className="h-10" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div>
                    <FormField
                      control={form.control}
                      name="countryOrRegion"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="font-normal text-muted-foreground">Country or region</FormLabel>
                          <FormControl>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger className="w-full rounded-b-none h-10">
                                  <SelectValue placeholder="Select a verified email to display" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="United States">United States</SelectItem>
                                <SelectItem value="m@example.com">m@example.com</SelectItem>
                                <SelectItem value="m@google.com">m@google.com</SelectItem>
                                <SelectItem value="m@support.com">m@support.com</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="zipcode"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input {...field} placeholder="ZIP" className="border-t-0 rounded-t-none h-10" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <Button size="lg" className="w-full h-12">
                    Pay $604.00
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
