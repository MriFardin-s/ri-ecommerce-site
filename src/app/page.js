import FeaturedAnimals from "@/components/Home/FeaturedAnimals";
import Hero from "@/components/Home/Hero";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
   <>
    
    <Hero/>
    <FeaturedAnimals/>
   </>
  );
}
