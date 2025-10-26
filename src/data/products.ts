export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  badge?: string;
  description: string;
  features: string[];
  specifications: { [key: string]: string };
}

export const products: Product[] = [
  // Tools Category
  {
    id: "tool-001",
    name: "FastTech Pro Toolkit V2",
    category: "tools",
    price: 44.99,
    originalPrice: 54.99,
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?w=800&h=600&fit=crop",
    rating: 4.9,
    reviews: 523,
    inStock: true,
    badge: "SALE",
    description: "Professional electronics repair toolkit with 64 precision bits and magnetic storage case. Perfect for repairing smartphones, laptops, tablets, and gaming consoles.",
    features: [
      "64 precision screwdriver bits",
      "Magnetic storage case",
      "Anti-static wrist strap",
      "Precision tweezers",
      "Opening tools and spudgers",
      "Lifetime warranty"
    ],
    specifications: {
      "Bits Included": "64 pieces",
      "Case Material": "Aluminum alloy",
      "Weight": "850g",
      "Dimensions": "20cm x 15cm x 5cm"
    }
  },
  {
    id: "tool-002",
    name: "FastTech Pro Auto Kit V2",
    category: "tools",
    price: 39.99,
    originalPrice: 49.99,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 412,
    inStock: true,
    badge: "SALE",
    description: "Comprehensive automotive repair toolkit designed for professional mechanics and DIY enthusiasts.",
    features: [
      "48 automotive bits",
      "Ratchet handle",
      "Extension bars",
      "Socket set included",
      "Durable carrying case"
    ],
    specifications: {
      "Bits Included": "48 pieces",
      "Drive Size": "1/4 inch",
      "Material": "Chrome vanadium steel",
      "Weight": "1.2kg"
    }
  },
  {
    id: "tool-003",
    name: "Precision Screwdriver Set Pro",
    category: "tools",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=800&h=600&fit=crop",
    rating: 4.7,
    reviews: 356,
    inStock: true,
    description: "Premium precision screwdriver set with 32 bits for all your electronics repair needs.",
    features: [
      "32 precision bits",
      "Ergonomic handle",
      "Magnetic tip",
      "Portable case"
    ],
    specifications: {
      "Bits Included": "32 pieces",
      "Handle Material": "Aluminum",
      "Tip Type": "Magnetic",
      "Weight": "280g"
    }
  },
  {
    id: "tool-004",
    name: "Professional Soldering Station",
    category: "tools",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop",
    rating: 4.9,
    reviews: 287,
    inStock: true,
    badge: "POPULAR",
    description: "Digital soldering station with temperature control for precision electronics work.",
    features: [
      "Digital temperature display",
      "200-480°C temperature range",
      "Quick heating",
      "ESD safe design",
      "Multiple tip options"
    ],
    specifications: {
      "Power": "60W",
      "Temperature Range": "200-480°C",
      "Display": "LED digital",
      "Voltage": "110V/220V"
    }
  },
  {
    id: "tool-005",
    name: "Heat Gun Kit Professional",
    category: "tools",
    price: 64.99,
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&h=600&fit=crop",
    rating: 4.6,
    reviews: 198,
    inStock: true,
    description: "Variable temperature heat gun perfect for phone screen repairs and component removal.",
    features: [
      "Variable temperature control",
      "Multiple nozzle attachments",
      "Ergonomic design",
      "Overheat protection"
    ],
    specifications: {
      "Power": "1800W",
      "Temperature Range": "50-650°C",
      "Airflow": "250-500 L/min",
      "Weight": "0.8kg"
    }
  },
  {
    id: "tool-006",
    name: "Anti-Static Mat Kit",
    category: "tools",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1581092583537-20d51b2e4b8f?w=800&h=600&fit=crop",
    rating: 4.5,
    reviews: 445,
    inStock: true,
    description: "Professional ESD anti-static work mat with wrist strap for safe electronics repair.",
    features: [
      "ESD protection",
      "Large work surface",
      "Wrist strap included",
      "Heat resistant up to 500°C"
    ],
    specifications: {
      "Size": "55cm x 35cm",
      "Material": "Silicone",
      "Resistance": "10^6 - 10^9 Ohms",
      "Thickness": "2mm"
    }
  },

  // Parts Category
  {
    id: "part-001",
    name: "iPhone 13 Pro Max Screen LCD",
    category: "parts",
    price: 129.99,
    originalPrice: 149.99,
    image: "https://images.unsplash.com/photo-1592286927505-5e3c7abfe1e1?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 634,
    inStock: true,
    badge: "SALE",
    description: "Original quality LCD display replacement for iPhone 13 Pro Max with digitizer.",
    features: [
      "OLED display",
      "Touch digitizer included",
      "Pre-assembled",
      "Lifetime warranty",
      "Easy installation"
    ],
    specifications: {
      "Screen Size": "6.7 inch",
      "Resolution": "2778 x 1284",
      "Type": "OLED",
      "Compatibility": "iPhone 13 Pro Max"
    }
  },
  {
    id: "part-002",
    name: "Samsung Galaxy S23 Battery",
    category: "parts",
    price: 39.99,
    image: "https://images.unsplash.com/photo-1609592806630-b8d5ec41c16a?w=800&h=600&fit=crop",
    rating: 4.7,
    reviews: 523,
    inStock: true,
    description: "High capacity replacement battery for Samsung Galaxy S23 with installation tools.",
    features: [
      "5000mAh capacity",
      "Built-in IC protection",
      "Installation kit included",
      "CE certified"
    ],
    specifications: {
      "Capacity": "5000mAh",
      "Voltage": "3.85V",
      "Type": "Li-Polymer",
      "Compatibility": "Samsung Galaxy S23"
    }
  },
  {
    id: "part-003",
    name: "MacBook Pro 13\" A2251 Battery",
    category: "parts",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&h=600&fit=crop",
    rating: 4.9,
    reviews: 287,
    inStock: true,
    badge: "POPULAR",
    description: "Genuine quality replacement battery for MacBook Pro 13 inch 2020 model.",
    features: [
      "58.2Wh capacity",
      "Grade A cells",
      "Installation manual included",
      "1 year warranty"
    ],
    specifications: {
      "Capacity": "58.2Wh",
      "Voltage": "11.4V",
      "Model": "A2251",
      "Year": "2020"
    }
  },
  {
    id: "part-004",
    name: "iPad Pro 11\" Digitizer Glass",
    category: "parts",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=800&h=600&fit=crop",
    rating: 4.6,
    reviews: 412,
    inStock: true,
    description: "High quality digitizer touch screen glass replacement for iPad Pro 11 inch.",
    features: [
      "Oleophobic coating",
      "Pre-installed adhesive",
      "Touch sensitive",
      "Scratch resistant"
    ],
    specifications: {
      "Size": "11 inch",
      "Type": "Capacitive",
      "Material": "Tempered glass",
      "Compatibility": "iPad Pro 11\""
    }
  },
  {
    id: "part-005",
    name: "iPhone 14 Camera Module",
    category: "parts",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 198,
    inStock: true,
    description: "Original quality rear camera replacement module for iPhone 14.",
    features: [
      "12MP dual camera",
      "Tested before shipping",
      "Easy plug and play",
      "Full functionality"
    ],
    specifications: {
      "Resolution": "12MP",
      "Type": "Dual camera",
      "Features": "Wide + Ultra Wide",
      "Compatibility": "iPhone 14"
    }
  },
  {
    id: "part-006",
    name: "Universal USB-C Charging Port",
    category: "parts",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1591290619762-9f2a877c94e1?w=800&h=600&fit=crop",
    rating: 4.5,
    reviews: 756,
    inStock: true,
    description: "Universal USB-C charging port replacement compatible with multiple devices.",
    features: [
      "Fast charging support",
      "Durable construction",
      "Easy installation",
      "Wide compatibility"
    ],
    specifications: {
      "Type": "USB-C",
      "Current": "3A max",
      "Material": "Metal alloy",
      "Compatibility": "Universal"
    }
  },
  {
    id: "part-007",
    name: "Laptop Keyboard Dell Inspiron",
    category: "parts",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&h=600&fit=crop",
    rating: 4.7,
    reviews: 289,
    inStock: true,
    description: "Replacement keyboard for Dell Inspiron 15 series with backlight.",
    features: [
      "Backlit keys",
      "US layout",
      "Easy installation",
      "OEM quality"
    ],
    specifications: {
      "Layout": "US QWERTY",
      "Backlight": "Yes",
      "Color": "Black",
      "Compatibility": "Dell Inspiron 15 5000/7000"
    }
  },

  // Gaming Category
  {
    id: "game-001",
    name: "PS5 DualSense Controller",
    category: "gaming",
    price: 69.99,
    image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=800&h=600&fit=crop",
    rating: 4.9,
    reviews: 1245,
    inStock: true,
    badge: "BESTSELLER",
    description: "Official Sony DualSense wireless controller for PlayStation 5 with haptic feedback.",
    features: [
      "Haptic feedback",
      "Adaptive triggers",
      "Built-in microphone",
      "USB-C charging",
      "3.5mm audio jack"
    ],
    specifications: {
      "Battery Life": "Up to 12 hours",
      "Connectivity": "Bluetooth 5.1",
      "Charging": "USB-C",
      "Weight": "280g"
    }
  },
  {
    id: "game-002",
    name: "Xbox Series X/S Controller",
    category: "gaming",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 987,
    inStock: true,
    description: "Official Xbox wireless controller compatible with Series X/S and PC.",
    features: [
      "Textured grip",
      "Bluetooth connectivity",
      "3.5mm stereo headset jack",
      "Share button",
      "Hybrid D-pad"
    ],
    specifications: {
      "Battery Life": "Up to 40 hours",
      "Connectivity": "Bluetooth + wireless",
      "Power": "2 AA batteries",
      "Weight": "287g"
    }
  },
  {
    id: "game-003",
    name: "Nintendo Switch Joy-Con Pair",
    category: "gaming",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=800&h=600&fit=crop",
    rating: 4.6,
    reviews: 756,
    inStock: true,
    description: "Official Nintendo Switch Joy-Con controllers - Neon Red and Neon Blue.",
    features: [
      "Motion controls",
      "HD Rumble",
      "IR Motion Camera",
      "Amiibo compatible",
      "Wireless or attached"
    ],
    specifications: {
      "Battery Life": "Up to 20 hours",
      "Connectivity": "Bluetooth",
      "Charging": "Attached to console",
      "Color": "Neon Red/Blue"
    }
  },
  {
    id: "game-004",
    name: "PS5 Console Cooling Stand",
    category: "gaming",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1622297845775-5ff3fef71d13?w=800&h=600&fit=crop",
    rating: 4.7,
    reviews: 534,
    inStock: true,
    description: "Professional cooling stand for PS5 with dual controller charging station.",
    features: [
      "Dual cooling fans",
      "Charge 2 controllers",
      "LED indicators",
      "Game storage",
      "USB hub"
    ],
    specifications: {
      "Fans": "2 x high-speed",
      "USB Ports": "3 additional",
      "Controller Charging": "2 slots",
      "Material": "ABS plastic"
    }
  },
  {
    id: "game-005",
    name: "Gaming Headset Pro RGB",
    category: "gaming",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=800&h=600&fit=crop",
    rating: 4.8,
    reviews: 892,
    inStock: true,
    badge: "POPULAR",
    description: "Professional gaming headset with 7.1 surround sound and RGB lighting.",
    features: [
      "7.1 surround sound",
      "Noise-canceling mic",
      "RGB lighting",
      "Memory foam cushions",
      "Multi-platform compatible"
    ],
    specifications: {
      "Driver": "50mm",
      "Frequency": "20Hz-20KHz",
      "Impedance": "32 Ohm",
      "Cable Length": "2m"
    }
  },
  {
    id: "game-006",
    name: "Xbox Series X 1TB SSD",
    category: "gaming",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800&h=600&fit=crop",
    rating: 4.9,
    reviews: 423,
    inStock: true,
    description: "Official Seagate Storage Expansion Card for Xbox Series X/S.",
    features: [
      "1TB capacity",
      "Quick Resume",
      "Plug and play",
      "Matches console performance",
      "Compact design"
    ],
    specifications: {
      "Capacity": "1TB",
      "Speed": "2.4 GB/s",
      "Interface": "PCIe Gen4 x2",
      "Compatibility": "Xbox Series X/S"
    }
  },
  {
    id: "game-007",
    name: "PS5 HD Camera",
    category: "gaming",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1614107151491-6876eecbff89?w=800&h=600&fit=crop",
    rating: 4.5,
    reviews: 312,
    inStock: true,
    description: "Official PlayStation 5 HD Camera with background removal tools.",
    features: [
      "Dual 1080p lenses",
      "Built-in stand",
      "Background removal",
      "Picture-in-picture mode",
      "Easy streaming"
    ],
    specifications: {
      "Resolution": "1080p",
      "Lenses": "Dual wide-angle",
      "Connection": "USB Type-A",
      "Field of View": "Ultra-wide"
    }
  },
  {
    id: "game-008",
    name: "Racing Wheel Pro Simulator",
    category: "gaming",
    price: 299.99,
    originalPrice: 349.99,
    image: "https://images.unsplash.com/photo-1625805866449-3589fe3f71a3?w=800&h=600&fit=crop",
    rating: 4.9,
    reviews: 267,
    inStock: true,
    badge: "SALE",
    description: "Professional racing wheel with force feedback and pedal set for ultimate racing simulation.",
    features: [
      "Force feedback",
      "900° rotation",
      "3-pedal set included",
      "Leather-wrapped wheel",
      "PC and console compatible"
    ],
    specifications: {
      "Rotation": "900 degrees",
      "Force Feedback": "Dual-motor",
      "Pedals": "3-pedal set",
      "Compatibility": "PS5/PS4/Xbox/PC"
    }
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.badge === "POPULAR" || product.badge === "BESTSELLER").slice(0, 4);
};
