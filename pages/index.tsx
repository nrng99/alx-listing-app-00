// pages/index.tsx
import React, { useState, useMemo } from 'react';
import Head from 'next/head';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import PropertyCard from '@/components/PropertyCard';
import Pill from '@/components/ui/Pill';

const FILTERS = ["All", "Luxury Villa", "Mountain View", "Self Checkin", "Beachfront"];

export default function Home() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProperties = useMemo(() => {
    if (activeFilter === "All") {
      return PROPERTYLISTINGSAMPLE;
    }
    return PROPERTYLISTINGSAMPLE.filter(property =>
      property.category.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <>
      <Head>
        <title>ALX Listing - Find Your Favorite Place</title>
      </Head>

      {/* Hero Section */}
      <section 
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/hero-background.jpg')" }} // Add a hero-background.jpg to your /public folder
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center z-10 p-4">
          <h1 className="text-4xl md:text-5xl font-bold">Find your favorite place here!</h1>
          <p className="text-lg md:text-xl mt-4">The best prices for over 2 million properties worldwide.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-8">
        {/* Filter Section */}
        <section className="py-4">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((filter) => (
              <Pill
                key={filter}
                label={filter}
                isActive={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              />
            ))}
          </div>
        </section>

        {/* Listing Section */}
        <section className="py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.name} property={property} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}