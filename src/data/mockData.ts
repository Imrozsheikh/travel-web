import { Plane, Users, Camera } from "lucide-react";

export const newsData = [
  {
    id: 1,
    title: "Heavy Rain Alert in Udaipur",
    desc: "Travelers are advised to avoid lakeside roads this evening.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    time: "5 min ago",
    city: "Udaipur",
    category: "Weather",
    author: "Admin",
    content:
      "Udaipur, often referred to as the Venice of the East, is witnessing a magnificent sight as Lake Pichola has reached its full capacity this season. The local administration has opened the gates to maintain water levels, attracting thousands of tourists. \n\n Experts suggest that the heavy rainfall in the catchment areas of the Aravalli hills has contributed to this rise. This is expected to boost the local tourism industry significantly over the next few months.",
  },
  {
    id: 2,
    title: "Jaipur Festival Starts Tonight",
    desc: "Cultural events and food streets open for tourists.",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    time: "20 min ago",
    city: "Jaipur",
    category: "Events",
    author: "Admin",
    content:
      "Udaipur, often referred to as the Venice of the East, is witnessing a magnificent sight as Lake Pichola has reached its full capacity this season. The local administration has opened the gates to maintain water levels, attracting thousands of tourists. \n\n Experts suggest that the heavy rainfall in the catchment areas of the Aravalli hills has contributed to this rise. This is expected to boost the local tourism industry significantly over the next few months.",
  },
];

export const destinationsData: Record<
  string,
  {
    hero: string[]; // Isse string se badal kar string[] kar dein
    places: {
      name: string;
      img: string;
      rating: number;
      nearby: string[];
    }[];
  }
> = {
  ambrai_Ghat: {
    hero: [
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580654712603-eb43273aff33?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1200&q=80",
    ],
    places: [
      {
        name: "Ambrai Ghat",
        img: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        nearby: ["City Palace", "Jagdish Temple", "Bagore Ki Haveli"],
      },
    ],
  },

  pichola_lake: {
    hero: [
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580654712603-eb43273aff33?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1200&q=80",
    ],
    places: [
      {
        name: "Lake Pichola",
        img: "https://images.unsplash.com/photo-1580654712603-eb43273aff33?auto=format&fit=crop&w=800&q=80",
        rating: 4.9,
        nearby: ["Jag Mandir", "Lake Palace", "Gangaur Ghat"],
      },
    ],
  },

  fateh_sagar: {
    hero: [
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580654712603-eb43273aff33?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1200&q=80",
    ],
    places: [
      {
        name: "Fateh Sagar Lake",
        img: "https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=800&q=80",
        rating: 4.7,
        nearby: ["Saheliyon Ki Bari", "Nehru Park", "Moti Magri"],
      },
    ],
  },

  city_palace: {
    hero: [
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1580654712603-eb43273aff33?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?auto=format&fit=crop&w=1200&q=80",
    ],
    places: [
      {
        name: "City Palace",
        img: "https://images.unsplash.com/photo-1599661046827-dacde6976540?auto=format&fit=crop&w=800&q=80",
        rating: 4.8,
        nearby: ["Crystal Gallery", "Jagdish Temple", "Vintage Car Museum"],
      },
    ],
  },
};

export const serviceData = {
  bike: [
    {
      id: 1,
      category: "Scooty",
      name: "Activa Rental",
      price: 400,
      img: "https://images.unsplash.com/photo-1623079517130-7f1cb1d91b2f",
      images: [
        "https://images.unsplash.com/photo-1623079517130-7f1cb1d91b2f",
        "https://images.unsplash.com/photo-1620891549027-942fdc95d3f5",
        "https://images.unsplash.com/photo-1609630875171-b1321377ee65",
      ],
      duration: "24 Hours",
      bike: "Honda Activa 6G",
      route: "City Ride • Local Travel",
      includes: [
        "Helmet Included",
        "Self Drive",
        "Good Mileage",
        "Documents Available",
      ],
    },

    {
      id: 2,
      category: "Bike",
      name: "Bullet Rental",
      price: 700,
      img: "https://images.unsplash.com/photo-1518655048521-f130df041f66",
      images: [
        "https://images.unsplash.com/photo-1518655048521-f130df041f66",
        "https://images.unsplash.com/photo-1558981403-c5f9899a28bc",
        "https://images.unsplash.com/photo-1619771914272-5f897f4a1f2d",
      ],
      duration: "24 Hours",
      bike: "Royal Enfield 350",
      route: "Long Ride • Highway Tour",
      includes: [
        "Helmet Included",
        "Self Drive",
        "Powerful Engine",
        "Documents Available",
      ],
    },
  ],

  car: [
    {
      id: 1,
      category: "Sedan",
      name: "Swift Dzire",
      price: 2200,
      img: "https://images.unsplash.com/photo-1549924231-f129b911e442",
      images: [
        "https://images.unsplash.com/photo-1549924231-f129b911e442", // Swift Dzire style
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      ],
      duration: "8 Hours",
      car: "Sedan",
      route: "Local City Tour",
      includes: ["Driver Included", "Fuel Included", "AC Car"],
    },
     {
      id: 2,
      category: "Tour",
      name: "Udaipur Sightseeing Tour",
      price: 2999,
      img: "https://images.unsplash.com/photo-1593696954577-ab3d39317b97",
      images: [
        "https://images.unsplash.com/photo-1593696954577-ab3d39317b97",
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
      ],
      duration: "8 Hours",
      car: "Swift Dzire",
      route: "City Palace • Fatehsagar • Sajjangarh",
      includes: ["Driver Included", "Fuel Included", "Parking Included"],
    },
    {
      id: 3,
      category: "Tour",
      name: "Nathdwara + Kumbhalgarh Tour",
      price: 10000,
      img: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33",
      images: [
        "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33",
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d",
      ],
      duration: "Full Day",
      car: "Innova",
      route: "Udaipur • Nathdwara • Kumbhalgarh",
      includes: [
        "Toll Tax Included",
        "Parking Included",
        "Driver Allowance Included",
      ],
    },
    {
      id: 4,
      category: "Sedan",
      name: "Honda Amaze",
      price: 2400,
      img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
      images: [
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7", // Honda Amaze style
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
      ],
      duration: "8 Hours",
      car: "Sedan",
      route: "City Ride",
      includes: ["Driver Included", "Fuel Included", "Clean Car"],
    },
    {
      id: 5,
      category: "Innova",
      name: "Innova Crysta",
      price: 4500,
      img: "https://images.unsplash.com/photo-1606664515524-edbd6",
      images: [
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6", // Toyota Innova style
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
        "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6",
      ],
      duration: "12 Hours",
      car: "Innova",
      route: "Family Tour",
      includes: ["Driver Included", "Fuel Included", "7 Seater"],
    },
  ],

  tuktuk: [
    {
      id: 1,
      category: "Local Ride",
      name: "City Tuk Tuk Ride",
      price: 1199,
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      images: [
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
      ],
      duration: "1 Hour",
      vehicle: "Auto Rickshaw",
      route: "Local Market • City Area",
      includes: [
        "Driver Included",
        "Fuel Included",
        "Quick Ride",
        "Affordable Price",
      ],
    },

    {
      id: 2,
      category: "Sightseeing",
      name: "Udaipur Local Tour",
      price: 2000,
      img: "https://images.unsplash.com/photo-1504215680853-026ed2a45def",
      images: [
        "https://images.unsplash.com/photo-1504215680853-026ed2a45def",
        "https://images.unsplash.com/photo-1504215680853-026ed2a45def",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      ],
      duration: "3 Hours",
      vehicle: "Tour Tuk Tuk",
      route: "City Palace • Fatehsagar • Lake Pichola",
      includes: [
        "Driver Included",
        "Local Sightseeing",
        "Parking Included",
        "Budget Friendly",
      ],
    },

    {
      id: 3,
      category: "Pickup",
      name: "Railway Station Pickup",
      price: 249,
      img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
      images: [
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be",
      ],
      duration: "One Way",
      vehicle: "Pickup Tuk Tuk",
      route: "Railway Station • Hotel / Home",
      includes: [
        "Driver Included",
        "Luggage Support",
        "Fast Pickup",
        "Affordable Fare",
      ],
    },

    {
      id: 4,
      category: "Pickup",
      name: "Airport Drop",
      price: 499,
      img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
      images: [
        "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7",
        "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d",
        "https://images.unsplash.com/photo-1504215680853-026ed2a45def",
      ],
      duration: "One Way",
      vehicle: "Airport Tuk Tuk",
      route: "Hotel • Airport",
      includes: [
        "Driver Included",
        "On Time Service",
        "Fuel Included",
        "Easy Booking",
      ],
    },
  ],
};

export const trips = [
  {
    title: "Udaipur Escape",
    days: "3 Days",
    price: "₹8,999",
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Goa Beach Fun",
    days: "5 Days",
    price: "₹12,499",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Manali Snow Tour",
    days: "4 Days",
    price: "₹10,999",
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1626621341517-bbf3d9990ed7?auto=format&fit=crop&w=1200&q=80",
  },
];

export const features = [
  {
    icon: Plane,
    title: "Easy Booking",
    text: "Fast and secure booking process.",
  },
  {
    icon: Users,
    title: "Expert Guides",
    text: "Friendly local guides for every trip.",
  },
  {
    icon: Camera,
    title: "Best Memories",
    text: "Capture beautiful moments everywhere.",
  },
];

//  hotel: [
//     {
//       id: 1,
//       category: "Budget",
//       name: "Budget Room 101",
//       price: 1499,
//       img: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
//       images: [
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//       ],
//       type: "Budget",
//       duration: "1 Night",
//       features: ["AC Room", "WiFi", "2 Guest", "Breakfast"],
//       includes: ["Clean Room", "Parking"],
//       desc: "Affordable stay for couples and solo travelers.",
//     },
//     {
//       id: 2,
//       category: "Budget",
//       name: "Budget Room 102",
//       price: 1599,
//       img: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
//       images: [
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//       ],
//       type: "Budget",
//       duration: "1 Night",
//       features: ["AC Room", "WiFi", "2 Guest"],
//       includes: ["Clean Room", "Parking"],
//       desc: "Comfort budget stay.",
//     },
//     {
//       id: 3,
//       category: "Deluxe",
//       name: "Deluxe Room",
//       price: 2999,
//       img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
//       images: [
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//       ],
//       type: "Deluxe",
//       duration: "1 Night",
//       features: ["King Bed", "Breakfast", "WiFi", "City View"],
//       includes: ["Room Service", "Parking"],
//       desc: "Premium deluxe room experience.",
//     },
//     {
//       id: 4,
//       category: "Family",
//       name: "Family Suite",
//       price: 4499,
//       img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
//       images: [
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//       ],
//       type: "Family",
//       duration: "1 Night",
//       features: ["4 Guests", "2 Beds", "WiFi"],
//       includes: ["Breakfast", "Parking"],
//       desc: "Perfect for family vacation.",
//     },
//     {
//       id: 5,
//       category: "Luxury",
//       name: "Luxury Palace Stay",
//       price: 6999,
//       img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
//       images: [
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//       ],
//       type: "Luxury",
//       duration: "1 Night",
//       features: ["Suite", "Pool", "Breakfast", "View"],
//       includes: ["Dinner", "Welcome Drink"],
//       desc: "Luxury palace style room.",
//     },
//   ],

//   guide: [
//     {
//       id: 1,
//       category: "Local",
//       name: "Udaipur City Guide",
//       price: 999,
//       img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1",
//       images: [
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//       ],
//       type: "Local Guide",
//       duration: "4 Hours",
//       features: ["Hindi Guide", "Local Knowledge"],
//       includes: ["Photo Spots", "Travel Tips"],
//       desc: "Explore city with local guide.",
//     },
//     {
//       id: 2,
//       category: "Full Day",
//       name: "Full Day Tour Guide",
//       price: 1999,
//       img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
//       images: [
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//       ],
//       type: "Professional",
//       duration: "8 Hours",
//       features: ["History Info", "Route Planning"],
//       includes: ["Sightseeing Help"],
//       desc: "Best for full day travel.",
//     },
//     {
//       id: 3,
//       category: "Heritage",
//       name: "Heritage Walk Guide",
//       price: 1499,
//       img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
//       images: [
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//       ],
//       type: "Walking Tour",
//       duration: "3 Hours",
//       features: ["Old City", "Culture"],
//       includes: ["Hidden Places"],
//       desc: "Discover old city culture.",
//     },
//     {
//       id: 4,
//       category: "Temple",
//       name: "Temple Tour Guide",
//       price: 1799,
//       img: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
//       images: [
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//         "https://images.unsplash.com/photo-1611242320536-fb0e0d4f3d52",
//       ],
//       type: "Religious Tour",
//       duration: "6 Hours",
//       features: ["Temple Knowledge"],
//       includes: ["Darshan Support"],
//       desc: "Visit temples peacefully.",
//     },
//   ],
