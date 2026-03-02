const vehicles = [
  // ================= BUDGET CARS =================
  {
    id: 1,
    slug: "maruti-swift",
    name: "Maruti Swift",
    type: "Car",
    category: "Budget",
    pricePerDay: 1500,
    image: "",
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    vehicleNumber:"GJ-06-AB-4521",

  },
  {
    id: 2,
    slug: "hyundai-i20",
    name: "Hyundai i20",
    type: "Car",
    category: "Budget",
    pricePerDay: 1800,
    image: "",
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    vehicleNumber: "GJ-18-CD-7890"
  },
  {
    id: 3,
    slug: "tata-altroz",
    name: "Tata Altroz",
    type: "Car",
    category: "Budget",
    pricePerDay: 1600,
    image: "",
    fuel: "Petrol",
    transmission: "Manual",
    seats: 5,
    vehicleNumber: "GJ-05-EF-1234"
  },
  {
    id: 4,
    slug: "maruti-ertiga",
    name: "Maruti Ertiga",
    type: "Car",
    category: "Budget",
    pricePerDay: 2200,
    image: "",
    fuel: "Petrol",
    transmission: "Manual",
    seats: 7,
    vehicleNumber: "GJ-01-GH-5678"
  },

  // ================= SUVs =================
  {
    id: 5,
    slug: "hyundai-creta",
    name: "Hyundai Creta",
    type: "SUV",
    category: "Premium",
    pricePerDay: 3000,
    image: "",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    vehicleNumber:"GJ-17-IJ-9012"
  },
  {
    id: 6,
    slug: "kia-seltos",
    name: "Kia Seltos",
    type: "SUV",
    category: "Premium",
    pricePerDay: 3200,
    image: "",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    vehicleNumber: "GJ-03-KL-3456"
  },
  {
    id: 7,
    slug: "mahindra-scorpio",
    name: "Mahindra Scorpio",
    type: "SUV",
    category: "Premium",
    pricePerDay: 3500,
    image: "",
    fuel: "Diesel",
    transmission: "Manual",
    seats: 7,
    vehicleNumber: "GJ-12-MN-7890"
  },
  {
    id: 8,
    slug: "toyota-fortuner",
    name: "Toyota Fortuner",
    type: "SUV",
    category: "Luxury",
    pricePerDay: 6000,
    image: "",
    fuel: "Diesel",
    transmission: "Automatic",
    seats: 7,
    vehicleNumber: "GJ-08-OP-1234"
  },

  // ================= PREMIUM SEDANS =================
  {
    id: 9,
    slug: "honda-city",
    name: "Honda City",
    type: "Car",
    category: "Premium",
    pricePerDay: 2500,
    image: "",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    vehicleNumber: "GJ-14-QR-5678"
  },
  {
    id: 10,
    slug: "skoda-slavia",
    name: "Skoda Slavia",
    type: "Car",
    category: "Premium",
    pricePerDay: 2700,
    image: "",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    vehicleNumber: "GJ-09-ST-9012"
  },

  // ================= LUXURY =================
  {
    id: 11,
    slug: "bmw-3-series",
    name: "BMW 3 Series",
    type: "Car",
    category: "Luxury",
    pricePerDay: 8000,
    image: "",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    vehicleNumber:"GJ-02-UV-3456"
  },
  {
    id: 12,
    slug: "audi-a6",
    name: "Audi A6",
    type: "Car",
    category: "Luxury",
    pricePerDay: 8500,
    image: "",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 5,
    vehicleNumber: "GJ-16-WX-7890"
  },

  // ================= BIKES =================
  {
    id: 13,
    slug: "honda-activa-6g",
    name: "Honda Activa 6G",
    type: "Bike",
    category: "Budget",
    pricePerDay: 500,
    image: "",
    fuel: "Petrol",
    transmission: "Automatic",
    seats: 2,
    vehicleNumber: "GJ-11-YZ-1234"
  },
  {
    id: 14,
    slug: "royal-enfield-classic-350",
    name: "Royal Enfield Classic 350",
    type: "Bike",
    category: "Premium",
    pricePerDay: 1200,
    image: "",
    fuel: "Petrol",
    transmission: "Manual",
    seats: 2,
    vehicleNumber: "GJ-07-AB-5678"
  },
  {
    id: 15,
    slug: "ktm-duke-200",
    name: "KTM Duke 200",
    type: "Bike",
    category: "Premium",
    pricePerDay: 1000,
    image: "",
    fuel: "Petrol",
    transmission: "Manual",
    seats: 2,
    vehicleNumber: "GJ-13-CD-9012"
  },
  {
    id: 16,
    slug: "yamaha-r15",
    name: "Yamaha R15",
    type: "Bike",
    category: "Premium",
    pricePerDay: 1100,
    image: "",
    fuel: "Petrol",
    transmission: "Manual",
    seats: 2,
    vehicleNumber: "GJ-04-EF-3456"
  }
];

export default vehicles;