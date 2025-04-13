
import React from 'react';
import { Separator } from "@/components/ui/separator.tsx";

const Quote = () => {
  return (
    <section className="py-24 bg-amber/5 relative overflow-hidden">
      <div className="absolute -left-20 top-10 w-48 h-48 bg-amber/10 rounded-full opacity-50"></div>
      <div className="absolute right-10 bottom-10 w-36 h-36 bg-amber/5 rounded-full"></div>
      
      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <Separator className="mb-12 bg-amber/20" />
        <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-center italic text-foreground/80">
          "It always seems impossible until it's done."
          <footer className="mt-6 text-base font-normal text-foreground/60 not-italic">
            — Nelson Mandela
          </footer>
        </blockquote>
        <Separator className="mt-12 bg-amber/20" />
      </div>
    </section>
  );
};

export default Quote;
