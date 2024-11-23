"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import { TypewriterEffect } from "../components/ui/typewriter-effect";

// Define a type for Product
type Product = {
  title: string;
  link: string;
  thumbnail: string;
};

// Product data
const products: Product[] = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/moonbeam.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/algochurn.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/aceternityui.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/tailwindmasterkit.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/smartbridge.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/renderwork.png",
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/cremedigital.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "https://aceternity.com/images/products/thumbnails/new/goldenbellsacademy.png",
  },
];

const HeroParallel = () => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);

  // Explicitly type the ref as HTMLDivElement
  const ref = React.useRef<HTMLDivElement>(null);

  // Using useScroll to track scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  // Define motion values with spring configuration
  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-white"
    >
     
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="relative"
      >
        {/* Implementing Carousel for firstRow */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3} // Show 3 slides per view (change as needed)
          loop={true}
          autoplay={{ delay: 2500 }}
          className="mb-20"
        >
          {firstRow.map((product) => (
            <SwiperSlide key={product.title}>
              <ProductCard product={product} translate={translateX} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Implementing Carousel for secondRow */}
        <Swiper
          spaceBetween={30}
          slidesPerView={3} // Show 3 slides per view (change as needed)
          loop={true}
          autoplay={{ delay: 2500 }}
          className="mb-20"
        >
          {secondRow.map((product) => (
            <SwiperSlide key={product.title}>
              <ProductCard product={product} translate={translateXReverse} />
            </SwiperSlide>
          ))}
        </Swiper>

        <Swiper
          spaceBetween={30}
          slidesPerView={3} // Show 3 slides per view (change as needed)
          loop={true}
          autoplay={{ delay: 2500 }}
          className="mb-20"
        >
          {secondRow.map((product) => (
            <SwiperSlide key={product.title}>
              <ProductCard product={product} translate={translateXReverse} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

// ProductCard component
const ProductCard = ({
  product,
  translate,
}: {
  product: Product; // Use the defined type for 'product'
  translate: MotionValue<number>;
}) => (
  <motion.div
    style={{ x: translate }}
    whileHover={{ y: -20 }}
    className="group/product h-96 w-[30rem] relative flex-shrink-0 mx-12"
  >
    <Link href={product.link} className="block group-hover/product:shadow-2xl">
      <Image
        src={product.thumbnail}
        height={600}
        width={600}
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt={product.title}
      />
    </Link>
    <div className="absolute inset-0 opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
    <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
      {product.title}
    </h2>
  </motion.div>
);

export default HeroParallel;