
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Work } from "@/lib/data";
import { ExternalLink, BookOpen, Download, Video } from "lucide-react";

interface WorkModalProps {
  work: Work | null;
  isOpen: boolean;
  onClose: () => void;
}

const WorkModal = ({ work, isOpen, onClose }: WorkModalProps) => {
  if (!work) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl mb-1">{work.title}</DialogTitle>
          <DialogDescription className="text-sm flex items-center gap-2">
            <span className="text-accent">{work.type}</span>
            <span>•</span>
            <span>{work.genre}</span>
          </DialogDescription>
        </DialogHeader>
        
        <div className="relative aspect-[3/2] overflow-hidden rounded-md my-4">
          <img 
            src={work.image} 
            alt={work.title} 
            className="w-full h-full object-cover" 
          />
        </div>
        
        <div className="space-y-2">
          <p className="text-base leading-relaxed">{work.description}</p>
          
          <div className="flex flex-wrap gap-3 pt-4">
            {work.readMoreLink && (
              <Button asChild variant="outline" className="gap-2">
                <a href={work.readMoreLink} target="_blank" rel="noreferrer">
                  <BookOpen size={16} />
                  To the Story
                </a>
              </Button>
            )}
            
            {work.watchLink && (
              <Button asChild variant="outline" className="gap-2">
                <a href={work.watchLink} target="_blank" rel="noreferrer">
                  <Video size={16} />
                  Watch
                </a>
              </Button>
            )}
            
            {work.downloadLink && (
              <Button asChild variant="outline" className="gap-2">
                <a href={work.downloadLink} target="_blank" rel="noreferrer">
                  <Download size={16} />
                  Download
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WorkModal;
