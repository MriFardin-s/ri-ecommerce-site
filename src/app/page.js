import FeaturedAnimals from "@/components/Home/FeaturedAnimals";
import Hero from "@/components/Home/Hero";
import QurbaniTips from "@/components/Home/QurbaniTips";
import TopBreeds from "@/components/Home/TopBreeds";
import { div } from "framer-motion/client";
import Image from "next/image";

export default function Home() {
  return (
   <>
    
    <Hero/>
    <FeaturedAnimals/>
    <QurbaniTips/>
    <TopBreeds/>
   </>
  );
}
