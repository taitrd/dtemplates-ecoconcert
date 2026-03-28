'use client';

import * as React from 'react';

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-32 text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
      <div className="space-y-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4">
          Book Tickets Of Your <span className="text-primary italic">Favorite</span> Singers!
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Make Sure Don't Miss These 5 Up Coming's Concerts! Experience the energy and passion of live music.
        </p>
      </div>
    </section>
  );
}
