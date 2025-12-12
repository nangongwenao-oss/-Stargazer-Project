import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-ink">
        {/* Ink Wash Texture Overlay */}
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" 
             style={{ 
                 backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='1'/%3E%3C/svg%3E")` 
             }} 
        />
        
        {/* Dynamic Fog/Ink Clouds */}
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-br from-ink via-transparent to-ink-light opacity-60 animate-spin-slow origin-center" />
        
        {/* Decorative Gold Circles (Abstract Constellation) */}
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full border border-gold/5 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full border border-jade/5 blur-2xl" />
    </div>
  );
};
