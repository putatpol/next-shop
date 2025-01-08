"use client";

import Image from "next/image";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import phImage from "@images/noImage.png";

const ProductInfoCarousel = ({ images }: { images: string[] }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(images[0]);

  // Slick settings
  const settings = {
    dots: false,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 0,
    draggable: false,
    infinite: false,
  };

  return (
    <>
      {/* Image selected */}
      {selectedImage ? (
        <div className="justify-items-center bg-[--bgProductItems]">
          <Image
            src={selectedImage || phImage}
            width={500}
            height={500}
            quality={10}
            alt="Product image index"
            className="w-full object-cover"
            unoptimized
            priority
          />
        </div>
      ) : (
        <div className="flex h-80 w-full items-center justify-center bg-[--bgProductItems]">
          <p className="text-3xl">StyleDee</p>
        </div>
      )}

      {/* Slider Image */}
      <div className="mx-auto mt-2 w-full gap-4">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedImage(image);
              }}
              className="p-2"
            >
              <div className="group flex h-full w-full justify-center bg-[--bg-bgProductItems]">
                <Image
                  src={image || phImage}
                  alt="Slide image"
                  width={100}
                  height={100}
                  quality={10}
                  className="center bg-[--bgProductItems] ring-gray-400 group-hover:cursor-pointer group-hover:ring-1"
                  unoptimized
                  priority
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ProductInfoCarousel;
