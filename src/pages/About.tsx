
import { writer } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container py-16 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-3xl md:text-4xl font-medium mb-8 text-center">About Me</h1>
        
        <div className="mb-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
          <div className="w-full md:w-1/3">
            <div className="aspect-[4/5] rounded-md overflow-hidden">
              <img
                src="/images/dp.jpg"
                alt={writer.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="w-full md:w-2/3 space-y-4">
            <div className="prose prose-lg">
              {writer.about.split("\n\n").map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div>
            <h2 className="font-serif text-xl md:text-2xl font-medium mb-4">Influences</h2>
            <ul className="space-y-2">
              {writer.influences.map((influence, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  <span>{influence}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="font-serif text-xl md:text-2xl font-medium mb-4">Writing Focus</h2>
            <ul className="space-y-2">
              {writer.focus.map((focus, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                  <span>{focus}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <Button asChild>
            <Link to="/portfolio">View My Work</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
