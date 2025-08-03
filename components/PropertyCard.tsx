// components/PropertyCard.tsx
import React from 'react';
import Image from 'next/image';
import { PropertyProps } from '@/interfaces';

interface CardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<CardProps> = ({ property }) => {
  return (
    <div className="border rounded-lg shadow-lg overflow-hidden">
      <div className="relative h-56 w-full">
        <Image src={property.image} alt={property.name} layout="fill" objectFit="cover" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold">{property.name}</h3>
          <p className="font-semibold">★ {property.rating}</p>
        </div>
        <p className="text-gray-600">{property.address.city}, {property.address.country}</p>
        <p className="text-xl font-bold mt-2">${property.price.toLocaleString()} <span className="text-base font-normal text-gray-500">/ night</span></p>
      </div>
    </div>
  );
};

export default PropertyCard;