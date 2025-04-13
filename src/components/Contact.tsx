
import React from 'react';
import { Github, Youtube, Twitch, Mail, MessageSquare } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const SocialLink = ({ 
  icon, 
  label, 
  href 
}: { 
  icon: React.ReactNode; 
  label: string; 
  href: string;
}) => {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex items-center gap-3 text-foreground/80 hover:text-amber transition-all duration-300 p-3 rounded-md hover:bg-amber/5 group"
    >
      <div className="text-amber/70 group-hover:text-amber transition-colors">
        {icon}
      </div>
      <span className="font-medium">{label}</span>
    </a>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-light relative overflow-hidden">
      <div className="absolute -right-32 top-20 w-72 h-72 bg-amber/5 rounded-full"></div>
      <div className="absolute -left-20 bottom-40 w-64 h-64 bg-amber/10 rounded-full opacity-30"></div>
      
      <div className="section-container max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="relative">
            Contact
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-amber/30 rounded-full"></span>
          </span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Get in Touch</h3>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Want to chat? Just shoot me a dm with a direct question on my discord 
                and I'll respond whenever I can. I will probably not ignore you lol.
              </p>
            </div>
            
            <Separator className="bg-amber/20 my-6" />
            
            <div className="space-y-1">
              <SocialLink 
                icon={<Github size={20} />} 
                label="GitHub" 
                href="https://github.com/marcelytumy" 
              />
              <SocialLink 
                icon={<Youtube size={20} />} 
                label="YouTube" 
                href="https://youtube.com/@ytumy" 
              />
              <SocialLink 
                icon={<Twitch size={20} />} 
                label="Twitch" 
                href="https://twitch.tv/ytumylive" 
              />
              <SocialLink 
                icon={<MessageSquare size={20} />} 
                label="Discord" 
                href="https://dsc.gg/apfelzentrum" 
              />
              <SocialLink 
                icon={<Mail size={20} />} 
                label="Email" 
                href="mailto:sprechender@proton.me" 
              />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div className="bg-amber p-8 md:p-10">
              <h3 className="text-2xl font-bold mb-4 text-dark">Let's collaborate!</h3>
              <p className="text-dark/80 leading-relaxed">
                I'm always open to new opportunities, whether it's a freelance project, 
                collaboration, or just a friendly chat about technology and programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
