
import { socialLinks } from "@/lib/data";
import ContactForm from "@/components/ContactForm";
import { Instagram, Linkedin, Mail, Youtube } from "lucide-react";

const Contact = () => {
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
    <div className="container py-16 px-4 md:px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-3xl md:text-4xl font-medium mb-4 text-center">Contact</h1>
        <p className="text-center text-muted-foreground mb-12">
          Get in touch for collaborations, inquiries, or just to say hello.
        </p>
        
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-xl font-medium mb-6">Send a Message</h2>
            <ContactForm />
          </div> */}
          
          <div>
            <h2 className="font-serif text-xl font-medium mb-6">Connect</h2>
            
            <div className="space-y-6">
              <div>
                <p className="text-muted-foreground mb-2">Email</p>
                <a 
                  href="mailto:hello@alexmorgan.com" 
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Mail size={18} />
                  adikrishna.sharma1807@gmail.com
                </a>
              </div>
              
              <div>
                <p className="text-muted-foreground mb-4">Social Media</p>
                <div className="flex flex-wrap gap-6">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      className="flex items-center gap-2 hover:text-accent transition-colors"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {renderIcon(link.icon)}
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
              
              <div className="pt-6">
                <p className="text-muted-foreground mb-4">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default Contact;
