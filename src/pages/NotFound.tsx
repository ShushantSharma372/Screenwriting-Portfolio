
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="font-serif text-5xl md:text-6xl font-medium mb-4">404</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Page not found
        </p>
        <Button asChild>
          <Link to="/">Return Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
