'use client'

import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import carousel1 from "../../../../public/images/carousel1.png";
import carousel2 from "../../../../public/images/carousel2.jpg";
import carousel3 from "../../../../public/images/carousel3.jpg";


export default function Pictures() {

  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-3xl underline font-lora">
        {/* <span>Gallery</span> */}
        <span>Gallery</span>
      </div>
      <div className="mt-6">
        <Carousel
          className="flex flex-col gap-6"
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            <CarouselItem className="flex items-center">
              <Image className="h-auto" src={carousel1} width={400} alt="carousel1" />
            </CarouselItem>
            <CarouselItem className="flex items-center">
              <Image className="h-auto" width={400} src={carousel3} alt="carousel3" />
            </CarouselItem>
            <CarouselItem className="flex items-center">
              <Image className="h-auto" width={400} src={carousel2} alt="carousel2" />
            </CarouselItem>
          </CarouselContent>
          <div className="flex justify-center gap-6">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
