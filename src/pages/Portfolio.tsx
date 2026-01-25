
import { useState } from "react";
import { works, Work, WorkType } from "@/lib/data";
import WorkCard from "@/components/WorkCard";
import WorkModal from "@/components/WorkModal";
import { Button } from "@/components/ui/button";

const Portfolio = () => {
  const [selectedType, setSelectedType] = useState<WorkType | 'All'>('All');
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filterTypes: Array<WorkType | 'All'> = ['All', 'Short Story', 'Short Film', 'Feature Idea'];
  
  const filteredWorks = selectedType === 'All' 
    ? works 
    : works.filter(work => work.type === selectedType);

  const handleWorkClick = (work: Work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="container py-16 px-4 md:px-6">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="font-serif text-3xl md:text-4xl font-medium mb-4">Portfolio</h1>
        <p className="text-muted-foreground">
          A collection of my written work across various mediums and genres.
        </p>
      </div>

      <div className="flex justify-center mb-8 overflow-x-auto pb-2">
        <div className="flex gap-2">
          {filterTypes.map(type => (
            <Button
              key={type}
              variant={selectedType === type ? "default" : "outline"}
              onClick={() => setSelectedType(type)}
              className="whitespace-nowrap"
            >
              {type}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWorks.map((work) => (
          <WorkCard 
            key={work.id} 
            work={work} 
            onClick={handleWorkClick} 
          />
        ))}
      </div>

      <WorkModal 
        work={selectedWork} 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default Portfolio;
