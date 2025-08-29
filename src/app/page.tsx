
import HeroSection from "../components/herosection";
import FaultyTerminal from "@/blocks/Backgrounds/FaultyTerminal/FaultyTerminal";


export default function Home() {
  return (
   <div className="relative w-full min-h-screen">
    
      <div className="absolute inset-0 z-0">
        <FaultyTerminal
           gridMul={[2, 1]}
           digitSize={1.2}
           tint="#26174e1e"
        />
      </div>
      {/* Hero Section with Earth Model */}
      { <div className="relative z-10">
        <HeroSection />
      </div> }
    </div>
  );
}
