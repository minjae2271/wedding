"use client"

import { useState } from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const countries = [
  {
    value: "en",
    label: "English"
  },
  {
    value: "de",
    label: "Germany",
  },
  {
    value: "fr",
    label: "France",
  },
  // {
  //   value: "da",
  //   label: "Denmark",
  // },
  // {
  //   value: "cs",
  //   label: "Czech",
  // },
  // {
  //   value: "pl",
  //   label: "Poland",
  // },
]

type Props = {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  isCountry: boolean
}

export default function SelectCountry({ value, setValue, isCountry }: Props) {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-full h-10 justify-between border-slate-400 hover:bg-purple-100 ${!isCountry ? "border-red-500 animate-bounceY" : ""}`}
        >
          {value
            ? countries.find((country) => country.value === value)?.label
            : "Select country..."}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height]">
        <Command>
          {/* <CommandInput placeholder="Search country..." className="h-9" /> */}
          <CommandList>
            {/* <CommandEmpty>No country found.</CommandEmpty> */}
            <CommandGroup>
              {countries.map((country) => (
                <CommandItem
                  key={country.value}
                  value={country.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {country.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === country.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
