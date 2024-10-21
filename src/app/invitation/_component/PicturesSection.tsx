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

type Props = {
  carouselImages?: { image: string; name: string; }[] | undefined
}

export default function Pictures({ carouselImages }: Props) {

  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-3xl underline font-lora">
        <span>Gallery</span>
      </div>
      <div className="mt-6">
        <Carousel
          className="flex flex-col gap-6 items-center"
          opts={{ loop: true }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
        >
          <CarouselContent>
            {carouselImages?.map((carouselImage) => {
              return (
                <CarouselItem key={carouselImage.name} className="flex justify-center items-center">
                  <Image src={carouselImage.image} width={380} height={466} alt="carousel" />
                </CarouselItem>
              )
            })}
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
