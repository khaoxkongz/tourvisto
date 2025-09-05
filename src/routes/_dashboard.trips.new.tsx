import { createFileRoute } from "@tanstack/react-router"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod/v4"
import { Card, CardContent } from "@/components/ui/card"
import { StarsIcon, ChevronDownIcon, CheckIcon } from "lucide-react"
import * as React from "react"
import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

const provinces = [
  "กรุงเทพมหานคร",
  "กระบี่",
  "กาญจนบุรี",
  "กาฬสินธุ์",
  "กำแพงเพชร",
  "ขอนแก่น",
  "จันทบุรี",
  "ฉะเชิงเทรา",
  "ชลบุรี",
  "ชัยนาท",
  "ชัยภูมิ",
  "ชุมพร",
  "เชียงราย",
  "เชียงใหม่",
  "ตรัง",
  "ตราด",
  "ตาก",
  "นครนายก",
  "นครปฐม",
  "นครพนม",
  "นครราชสีมา",
  "นครศรีธรรมราช",
  "นครสวรรค์",
  "นนทบุรี",
  "นราธิวาส",
  "น่าน",
  "บึงกาฬ",
  "บุรีรัมย์",
  "ปทุมธานี",
  "ประจวบคีรีขันธ์",
  "ปราจีนบุรี",
  "ปัตตานี",
  "พระนครศรีอยุธยา",
  "พังงา",
  "พัทลุง",
  "พิจิตร",
  "พิษณุโลก",
  "เพชรบุรี",
  "เพชรบูรณ์",
  "แพร่",
  "พะเยา",
  "ภูเก็ต",
  "มหาสารคาม",
  "มุกดาหาร",
  "แม่ฮ่องสอน",
  "ยโสธร",
  "ยะลา",
  "ร้อยเอ็ด",
  "ระนอง",
  "ระยอง",
  "ราชบุรี",
  "ลพบุรี",
  "ลำปาง",
  "ลำพูน",
  "เลย",
  "ศรีสะเกษ",
  "สกลนคร",
  "สงขลา",
  "สตูล",
  "สมุทรปราการ",
  "สมุทรสงคราม",
  "สมุทรสาคร",
  "สระแก้ว",
  "สระบุรี",
  "สิงห์บุรี",
  "สุโขทัย",
  "สุพรรณบุรี",
  "สุราษฎร์ธานี",
  "สุรินทร์",
  "หนองคาย",
  "หนองบัวลำภู",
  "อ่างทอง",
  "อำนาจเจริญ",
  "อุดรธานี",
  "อุตรดิตถ์",
  "อุทัยธานี",
  "อุบลราชธานี",
]
const groupsType = ["Solo", "Couple", "Family", "Friends", "Business"]
const travelsStyle = ["Relaxed", "Adventure", "Culture", "Luxury", "Nature & Outdoors", "City Exploration"]
const interests = [
  "Food & Culinary",
  "Hiking & Nature Walks",
  "Historical Sites",
  "Museums & Art",
  "Beaches & Water Activities",
  "Nightlife & Bars",
  "Photography Spots",
  "Shopping",
  "Local Experiences",
]
const budgetsEstimate = ["Low-Range", "Mid-Range", "Premium", "Luxury"]

const formSchema = z.object({
  provinces: z.enum(provinces),
  duration: z.string(),
  groupType: z.enum(groupsType),
  travelStyle: z.enum(travelsStyle),
  interests: z.enum(interests),
  budgetEstimate: z.enum(budgetsEstimate),
  locationMap: z.string(),
})

export const Route = createFileRoute("/_dashboard/trips/new")({
  component: RouteComponent,
})

function RouteComponent() {
  const [open, setOpen] = React.useState<boolean>(false)

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      provinces: "",
      duration: "",
      groupType: "",
      travelStyle: "",
      interests: "",
      budgetEstimate: "",
      locationMap: "",
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex items-center justify-center">
        <Card className="w-full max-w-4xl">
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-6">
                <FormField
                  control={form.control}
                  name="provinces"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-normal text-muted-foreground">Provinces</FormLabel>
                      <Popover open={open} onOpenChange={setOpen}>
                        <FormControl>
                          <PopoverTrigger asChild>
                            <Button
                              size="lg"
                              variant="outline"
                              role="combobox"
                              aria-expanded={open}
                              className="bg-background h-12 hover:bg-background border-input w-full justify-between px-3 font-normal outline-offset-0 outline-none focus-visible:outline-[3px]"
                            >
                              <span className={cn("truncate", !field.value && "text-muted-foreground")}>
                                {field.value
                                  ? provinces.find((framework) => framework === field.value)
                                  : "Select province"}
                              </span>
                              <ChevronDownIcon
                                size={16}
                                className="text-muted-foreground/80 shrink-0"
                                aria-hidden="true"
                              />
                            </Button>
                          </PopoverTrigger>
                        </FormControl>
                        <PopoverContent
                          className="border-input w-full min-w-[var(--radix-popper-anchor-width)] p-0"
                          align="start"
                        >
                          <Command>
                            <CommandInput placeholder="Search provinces..." />
                            <CommandList>
                              <CommandEmpty>No provinces found.</CommandEmpty>
                              <CommandGroup>
                                {provinces.map((framework, index) => (
                                  <CommandItem
                                    key={index}
                                    value={framework}
                                    onSelect={(currentValue) => {
                                      field.onChange(currentValue === field.value ? "" : currentValue)
                                      setOpen(false)
                                    }}
                                  >
                                    {framework}
                                    {field.value === framework && <CheckIcon size={16} className="ml-auto" />}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-normal text-muted-foreground">Duration</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Enter number of days (e.g., 5, 12)" className="h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="groupType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-normal text-muted-foreground">Group Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger size="default" className="w-full data-[size=default]:h-12">
                            <SelectValue placeholder="Select a group type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {groupsType.map((item, index) => (
                            <SelectItem key={index} value={item}>
                              {item}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="travelStyle"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-normal text-muted-foreground">Travel style</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger size="default" className="w-full data-[size=default]:h-12">
                            <SelectValue placeholder="Select your travel style" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {travelsStyle.map((item, index) => (
                            <SelectItem key={index} value={item}>
                              {item}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="interests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-normal text-muted-foreground">Interests</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger size="default" className="w-full data-[size=default]:h-12">
                            <SelectValue placeholder="Select your travel style" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {interests.map((item, index) => (
                            <SelectItem key={index} value={item}>
                              {item}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="budgetEstimate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-normal text-muted-foreground">Budget Estimate</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger size="default" className="w-full data-[size=default]:h-12">
                            <SelectValue placeholder="Select your budget preference" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {budgetsEstimate.map((item, index) => (
                            <SelectItem key={index} value={item}>
                              {item}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid gap-2">
                  <Label className="font-normal text-muted-foreground">Location on map</Label>
                  <picture>
                    <img
                      src="https://placehold.co/742x303.png"
                      alt=""
                      width={742}
                      height={303}
                      className="size-full rounded-xl"
                    />
                  </picture>
                </div>

                <Button size="lg" type="submit" className="h-12">
                  <StarsIcon />
                  <span>Generate a trip</span>
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
