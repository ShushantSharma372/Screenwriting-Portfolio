import { writer } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useMemo } from "react";
import "./BackgroundScroll.css";

const Index = () => {
  // Your local image paths
  const images = [
    "/images/images1.png",
    "/images/image2.png",
    "/images/image3.png",
    "/images/image4.png",
    "/images/image9.png",
    "/images/image6.jpg",
    "/images/image7.jpg",
    "/images/image8.png"
  ];

  // Logic to create 5 unique randomized columns
  const columns = useMemo(() => {
    return [...Array(5)].map(() => {
      // Shuffles the order of your 8 images for each column
      const shuffled = [...images].sort(() => Math.random() - 0.5);
      // Double the array so the top meets the bottom for a seamless loop
      return [...shuffled, ...shuffled];
    });
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden bg-white">
      {/* Background Layer */}
      {/* Background Layer */}
  <div className="absolute inset-0 z-0 flex gap-3 md:gap-6 opacity-30 pointer-events-none">
  {columns.map((columnImages, i) => (
    <div key={i} className="flex-1 flex flex-col overflow-hidden">
      <div 
        className="scroll-track space-y-3 md:space-y-6"
        style={{ 
          animation: `${i % 2 === 0 ? 'scrollUp' : 'scrollDown'} ${30 + (i * 5)}s linear infinite`,
          animationDelay: `-${i * 3}s` 
        }}
      >
        {columnImages.map((img, idx) => (
          <img 
            key={idx} 
            src={img} 
            className="w-full aspect-[3/4] object-cover rounded-lg shadow-sm"
            alt="" 
            // Important: This ensures the browser doesn't collapse the layout before images load
            loading="eager" 
          />
        ))}
      </div>
    </div>
  ))}
</div>

      {/* Main Content Layer */}
      {/* We use a slight backdrop blur to make sure text is readable over colorful images */}
      <section className="relative z-10 flex-1 flex flex-col justify-center items-center py-20 px-4 md:px-6 container">
        <div className="w-full max-w-3xl mx-auto text-center space-y-8">
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight text-slate-900">
            {writer.name}
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-700 font-serif italic">
            {writer.tagline}
          </p>
          
          <p className="text-base md:text-lg max-w-2xl mx-auto leading-relaxed text-slate-800">
            {writer.shortBio}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-6">
            <Button asChild size="lg" className="shadow-lg">
              <Link to="/portfolio" className="gap-2">
                View Portfolio
                <ArrowRight size={16} />
              </Link>
            </Button>
            
            <Button asChild size="lg" variant="outline" className="bg-white/90 shadow-sm">
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;