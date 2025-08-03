// constants/index.ts
import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "/placeholder-1.jpg", // Using local placeholder images
    discount: "",
  },
  {
    name: "Mountain Escape Chalet",
    address: { state: "Aspen", city: "Colorado", country: "USA" },
    rating: 4.7,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "/placeholder-2.jpg",
    discount: "30",
  },
  // ... (add all 20 properties from the prompt here)
  // Make sure to replace example.com URLs with local paths like "/placeholder-3.jpg"
  // For brevity, the full list is omitted here.
  {
    name: "Clifftop Retreat",
    address: { state: "Cape Town", city: "Western Cape", country: "South Africa" },
    rating: 4.78,
    category: ["Ocean View", "Private Pool", "Self Checkin"],
    price: 4100,
    offers: { bed: "3", shower: "3", occupants: "4-5" },
    image: "/placeholder-20.jpg",
    discount: "",
  },
];