
import { socialLinks } from "@/lib/data";
import { Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const renderIcon = (name: string) => {
    switch (name) {
      case 'linkedin':
        return <Linkedin size={18} />;
      case 'instagram':
        return <Instagram size={18} />;
      case 'youtube':
        return <Youtube size={18} />;
      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-border mt-auto py-6">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Shushant Sharma. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-muted-foreground hover:text-accent transition-colors"
                aria-label={link.name}
                target="_blank"
                rel="noreferrer"
              >
                {renderIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
