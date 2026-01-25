
import { Work } from "@/lib/data";

interface WorkCardProps {
  work: Work;
  onClick: (work: Work) => void;
}

const WorkCard = ({ work, onClick }: WorkCardProps) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-md cursor-pointer transition-transform duration-300 hover:scale-[1.02] h-[300px]"
      onClick={() => onClick(work)}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 opacity-80 transition-opacity group-hover:opacity-100 z-10" />
      
      <img 
        src={work.image} 
        alt={work.title} 
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
      />
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
        <h3 className="font-serif text-xl text-white font-bold">
          {work.title}
        </h3>
        <p className="text-sm text-white font-semibold mt-1">
          {work.genre} • {work.type}
        </p>
      </div>
    </div>
  );
};

export default WorkCard;
