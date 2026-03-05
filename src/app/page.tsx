import Image from "next/image";
import Link from "next/link";
import { FeaturedOn } from "@/components/FeaturedOn";
import Services from "@/components/Services"; // Corrected import

const HeroSection = () => (
  <section className="container mx-auto flex flex-col md:flex-row items-center justify-center min-h-[calc(100vh-80px)] p-6 gap-12">
    {/* Left Side: Text Content */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h1 className="font-playfair-display text-5xl md:text-7xl font-bold text-dark-charcoal leading-tight">
        Crafting Your Love Story, One Page at a Time
      </h1>
      <p className="font-poppins text-lg text-dark-charcoal/80 my-8 max-w-xl mx-auto md:mx-0">
        Timeless, elegant, and bespoke wedding album designs that transform your cherished moments into a work of art. Discover the luxury of personalized storytelling.
      </p>
      <Link href="/portfolio">
        <button className="rounded-full bg-gold-accent px-10 py-4 text-cream-white font-semibold tracking-wider uppercase transition-transform hover:scale-105 shadow-lg">
          Explore The Portfolio
        </button>
      </Link>
    </div>

    {/* Right Side: Image Placeholder */}
    <div className="w-full md:w-1/2 mt-8 md:mt-0">
      <div className="relative w-full h-[60vh] bg-blush-pink rounded-lg shadow-2xl">
          {/* Placeholder for a stunning wedding album photo */}
          <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-playfair-display text-2xl text-cream-white">Stunning Visual Here</p>
          </div>
      </div>
    </div>
  </section>
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedOn />
      <Services />
    </>
  );
}
