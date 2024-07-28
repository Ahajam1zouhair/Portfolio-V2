import { Carousel } from "flowbite-react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

type CarouselProjectProps = {
  images: string[];
};
export function CarouselProject({ images }: CarouselProjectProps) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96  ">
      <Carousel
        slide={false}
        leftControl={
          <FaArrowAltCircleLeft className="text-3xl md:text-5xl text-text" />
        }
        rightControl={
          <FaArrowAltCircleRight className="text-3xl md:text-5xl text-text" />
        }
        className="carousel-dark"
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 6}`}
            className=" w-3/4 "
          />
        ))}
      </Carousel>
    </div>
  );
}
