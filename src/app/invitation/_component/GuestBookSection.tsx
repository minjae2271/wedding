"use client";

import { Card, CardContent } from "@/components/ui/card";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function GuestBookSection() {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="w-full flex flex-col items-center gap-6">
      <div className="text-3xl underline font-lora">
        {/* <span>Guest Book</span> */}
        <span>Gästebuch</span>
      </div>
      <div className="font-quicksand text-balance text-center">
        <span>Übermitteln Sie Ihre wertvollen Wünsche an das Brautpaar!</span>
      </div>
      <Card className="w-full">
        <CardContent className="flex flex-col gap-2 p-2">
          <div className="flex flex-col gap-1 p-3 border-b-2 border-b-slate-300 last:border-b-0">
            <div className="font-Playfair italic">David</div>
            <div className="font-quicksand ">congrat!</div>
            <div className="text-sm font-thin ml-auto opacity-70">
              2024.11.11
            </div>
          </div>
          <div className="flex flex-col gap-1 p-3 border-b-2 border-b-slate-300 last:border-b-0">
            <div className="font-Playfair italic">Lucy</div>
            <div className="font-quicksand ">yeeeeah!</div>
            <div className="text-sm font-thin ml-auto opacity-70">
              2024.11.12
            </div>
          </div>
          <div className="flex flex-col gap-1 p-3 border-b-2 border-b-slate-300 last:border-b-0">
            <div className="font-Playfair italic">Chris</div>
            <div className="font-quicksand ">
              I am looking forward to see u guys!
            </div>
            <div className="text-sm font-thin ml-auto opacity-70">
              2024.11.12
            </div>
          </div>
        </CardContent>
        <CardContent className="p-2">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <span className="font-Playfair text-xl">write a guest book</span>
          </AccordionTrigger>
          <AccordionContent className="px-6">
            <form action="">
              <div className="grid w-full items-center gap-4">
                <div className="flex gap-2">
                    <div className="flex flex-col space-y-1.5 w-[50%]">
                    <Label htmlFor={"name"}>Name</Label>
                    <Input
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        id="name"
                    />
                    </div>
                    <div className="flex flex-col space-y-1.5 w-[50%]">
                    <Label htmlFor={"name"}>Password</Label>
                    <Input
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                        id="name"
                    />
                    </div>
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor={"name"}>Eintrag</Label>
                  <Input
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    id="name"
                  />
                </div>
              </div>
              <Button variant={"custom"} type="submit" className="mt-6">
                Send
              </Button>
            </form>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
