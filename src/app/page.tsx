'use client'

import * as React from "react";
import Image from "next/image";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import { Toaster } from "@/components/ui/sonner";

import { AlertDemo } from "../components/alertDemo";
import { AvatarDemo } from "../components/avatarDemo";
import { CardDemo } from "../components/cardDemo";
import { CarouselDemo } from "../components/carouselDemo";
import { ComboboxDemo } from "../components/comboxboxDemo";
import { PopoverDemo } from "../components/popOverDemo";
import { DialogDemo } from "../components/dialogDemo";
import { MenubarDemo } from "../components/menubarDemo";
import { DrawerDemo } from "../components/drawerDemo";
import { CollapsibleDemo } from "../components/collapsibleDemo";
import { PaginationDemo } from "../components/paginationDemo";
import { SelectDemo } from "../components/selectDemo";
import { SonnerDemo } from "../components/sonnerDemo";
import { RadioGroupDemo } from "../components/radioGroupDemo";
import { SwitchDemo } from "../components/switchDemo";
import { TabsDemo } from "../components/tabsDemo";
import { Input } from "@/components/ui/input"


// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"


// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover"

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog"

// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer"





export default function Home() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <main className="min-h-screen p-28">
      <div className="flex justify-start font-mono max-w-md text-sm gap-2">
        <div>
          <AlertDemo />
        </div>
        <div className="mt-8">
          <AvatarDemo />
      </div>
      </div>
      <div className="mt-8">
        <CardDemo />
      </div>
      <div className="mt-8 max-w-md">
        <Input />
      </div>
      <div className="mt-8">
      <CarouselDemo />
      </div>
      <div className="mt-8">
        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border max-w-80"></Calendar>
      </div>
      <div className="mt-8">
        <CollapsibleDemo />
      </div>
      <div className="mt-8 justify-start">
        <div>
        <ComboboxDemo />
        </div>
        <div className="mt-8">
          <p>PopOver Control:</p>
          <PopoverDemo />
        </div>
        <div className="mt-8">
          <p>Dialog Control:</p>
          <DialogDemo />
        </div>
        <div className="mt-8">
          <p>DRAWER CONTROL 2 with barchart!!</p>
          <DrawerDemo />
        </div>
        <div className="mt-8 max-w-80">
          <p>MenuBar Control:</p>
          <MenubarDemo />
        </div>
        <div className="mt-8 max-w-80">
          <p>Pagination Control:</p>
          <PaginationDemo />
        </div>
        <div className="mt-8 max-w-80">
          <p>RadioGroup Control:</p>
          <RadioGroupDemo />
        </div>
        <div className="mt-8 max-w-80">
          <p>RadioGroup Control:</p>
          <SelectDemo />
        </div>
        <div className="mt-8 max-w-80">
          <p>Separator Control:</p>
          <Separator />
        </div>
        <div className="mt-8 max-w-80">
          <p>Sonner Control:</p>
          <SonnerDemo />
          <Toaster /> 
        </div>
        <div className="mt-8 max-w-80">
          <p>Switch Control:</p>
          <SwitchDemo />
        </div>
        <div className="mt-8 max-w-80">
          <p>Tabs Control:</p>
          <TabsDemo />
        </div>
      </div>
    </main>
  );
}
