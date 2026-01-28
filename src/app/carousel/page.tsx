import { Card, CardContent } from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import img1 from 'public/1.png'
import img2 from 'public/1.jpg'

const Cara = () => {

const image = [img1, img2]    

  return (
 <Carousel className="w-full ml-10 max-w-[12rem] sm:max-w-xs">
      <CarouselContent>
  {image.map((img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className=" flex aspect-square items-center justify-center p-0">
                  <Image src={img} alt={`image-${index}`} className="object-cover"/>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>  )
}

export default Cara