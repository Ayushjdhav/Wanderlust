const sampleListings = [


  // ...............................................

  {
    title: "Luxury Beach Villa",
    description: "Escape to this luxurious beachfront villa with stunning sea views, a private pool, and direct beach access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    price: 14500,
    location: "Goa",
    country: "India",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [73.8278, 15.4909],
    },
  },

  {
    title: "Swiss Alpine Chalet",
    description: "A cozy wooden chalet surrounded by the Swiss Alps with breathtaking mountain scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 28000,
    location: "Zermatt",
    country: "Switzerland",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [7.7491, 46.0207],
    },
  },

  {
    title: "Santorini Cliff House",
    description: "Stay on the famous white cliffs of Santorini and enjoy spectacular sunsets over the Aegean Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 22000,
    location: "Santorini",
    country: "Greece",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [25.4615, 36.3932],
    },
  },

  {
    title: "Tokyo Skyline Apartment",
    description: "Modern apartment in the heart of Tokyo with city skyline views and excellent transport access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 18500,
    location: "Tokyo",
    country: "Japan",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895],
    },
  },

  {
    title: "Maldives Water Villa",
    description: "Luxury overwater villa featuring crystal-clear lagoons, private deck, and direct ocean access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 42000,
    location: "Male",
    country: "Maldives",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [73.5093, 4.1755],
    },
  },

  {
    title: "Royal Palace Stay",
    description: "Experience royal hospitality inside a beautifully restored heritage palace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    },
    price: 16200,
    location: "Jaipur",
    country: "India",
    category: "castles",
    geometry: {
      type: "Point",
      coordinates: [75.7873, 26.9124],
    },
  },

  {
    title: "Canadian Forest Cabin",
    description: "Quiet wooden cabin surrounded by pine forests and pristine lakes, ideal for a relaxing vacation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 13800,
    location: "Banff",
    country: "Canada",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [-115.5708, 51.1784],
    },
  },

  {
    title: "Dubai Marina Penthouse",
    description: "Luxury penthouse offering panoramic marina views, rooftop pool, and premium amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 26500,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "trending",
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048],
    },
  },
  {
    title: "Paris Luxury Apartment",
    description: "Elegant apartment near the Eiffel Tower with modern interiors, balcony views, and excellent cafes nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    },
    price: 24500,
    location: "Paris",
    country: "France",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566],
    },
  },

  {
    title: "Bali Jungle Villa",
    description: "Private villa surrounded by lush tropical forests featuring an infinity pool and peaceful atmosphere.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    price: 15800,
    location: "Ubud",
    country: "Indonesia",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [115.2625, -8.5069],
    },
  },

  {
    title: "New York City Loft",
    description: "Spacious loft in Manhattan with skyline views, stylish interiors, and easy subway access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 28500,
    location: "New York",
    country: "United States",
    category: "rooms",
    geometry: {
      type: "Point",
      coordinates: [-74.0060, 40.7128],
    },
  },

  {
    title: "Banff Mountain Resort",
    description: "Luxury mountain resort surrounded by Canada's Rocky Mountains with hiking trails and lake views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 19200,
    location: "Banff",
    country: "Canada",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [-115.5708, 51.1784],
    },
  },

  {
    title: "Phuket Beach Resort",
    description: "Beachfront resort offering crystal-clear waters, luxurious rooms, and unforgettable sunsets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 17600,
    location: "Phuket",
    country: "Thailand",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [98.3381, 7.8804],
    },
  },

  {
    title: "Scottish Castle Estate",
    description: "Historic castle converted into a luxury estate surrounded by rolling green hills.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    },
    price: 31000,
    location: "Edinburgh",
    country: "United Kingdom",
    category: "castles",
    geometry: {
      type: "Point",
      coordinates: [-3.1883, 55.9533],
    },
  },

  {
    title: "Sydney Harbour Penthouse",
    description: "Premium penthouse overlooking the Sydney Opera House and Harbour Bridge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 29500,
    location: "Sydney",
    country: "Australia",
    category: "trending",
    geometry: {
      type: "Point",
      coordinates: [151.2093, -33.8688],
    },
  },

  {
    title: "Iceland Glass Cabin",
    description: "Modern glass cabin designed for viewing the Northern Lights in complete comfort.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 26500,
    location: "Reykjavik",
    country: "Iceland",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [-21.9426, 64.1466],
    },
  },
  {
    title: "Santorini Sunset Villa",
    description: "Experience breathtaking sunsets from this luxurious whitewashed villa overlooking the Aegean Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 32500,
    location: "Santorini",
    country: "Greece",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [25.4615, 36.3932],
    },
  },

  {
    title: "Kyoto Zen Ryokan",
    description: "Traditional Japanese ryokan featuring tatami rooms, hot springs, and peaceful gardens.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    price: 21000,
    location: "Kyoto",
    country: "Japan",
    category: "rooms",
    geometry: {
      type: "Point",
      coordinates: [135.7681, 35.0116],
    },
  },

  {
    title: "Maldives Ocean Retreat",
    description: "Overwater villa with glass floors, turquoise lagoons, and private snorkeling access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 48000,
    location: "Male",
    country: "Maldives",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [73.5093, 4.1755],
    },
  },

  {
    title: "Norwegian Fjord Cabin",
    description: "Cozy cabin overlooking majestic fjords with hiking trails and stunning natural beauty.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 24000,
    location: "Bergen",
    country: "Norway",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [5.3221, 60.39299],
    },
  },

  {
    title: "Venice Grand Canal Apartment",
    description: "Elegant apartment beside the Grand Canal with classic Italian architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 27500,
    location: "Venice",
    country: "Italy",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [12.3155, 45.4408],
    },
  },

  {
    title: "Amazon Rainforest Eco Lodge",
    description: "Eco-friendly jungle lodge offering wildlife adventures and unforgettable rainforest experiences.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 19500,
    location: "Manaus",
    country: "Brazil",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [-60.0217, -3.1190],
    },
  },

  {
    title: "Cape Town Ocean View Penthouse",
    description: "Luxury penthouse overlooking Table Mountain and the Atlantic Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 25500,
    location: "Cape Town",
    country: "South Africa",
    category: "trending",
    geometry: {
      type: "Point",
      coordinates: [18.4241, -33.9249],
    },
  },

  {
    title: "Queenstown Adventure Lodge",
    description: "Stay in New Zealand's adventure capital surrounded by mountains and crystal-clear lakes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
    },
    price: 22800,
    location: "Queenstown",
    country: "New Zealand",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [168.6626, -45.0312],
    },
  },
  {
    title: "Luxury Beach Villa",
    description: "Enjoy a luxurious stay overlooking the Arabian Sea with a private pool and modern amenities.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    price: 14500,
    location: "Goa",
    country: "India",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [73.8278, 15.4909],
    },
  },

  {
    title: "Mountain Escape Chalet",
    description: "A peaceful wooden chalet surrounded by the Himalayas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 9800,
    location: "Manali",
    country: "India",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [77.1892, 32.2432],
    },
  },

  {
    title: "Royal Heritage Palace",
    description: "Experience royal Rajasthani hospitality in this magnificent palace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    },
    price: 16500,
    location: "Jaipur",
    country: "India",
    category: "castles",
    geometry: {
      type: "Point",
      coordinates: [75.7873, 26.9124],
    },
  },

  {
    title: "Backwater Retreat",
    description: "Relax in a luxury houseboat surrounded by Kerala's beautiful backwaters.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 8200,
    location: "Alleppey",
    country: "India",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [76.3388, 9.4981],
    },
  },

  {
    title: "Tea Garden Cottage",
    description: "Cozy stay amidst lush green tea plantations.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 7200,
    location: "Munnar",
    country: "India",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [77.0595, 10.0889],
    },
  },

  {
    title: "Swiss Alpine Chalet",
    description: "Luxury mountain chalet with breathtaking Alpine scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 29500,
    location: "Zermatt",
    country: "Switzerland",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [7.7491, 46.0207],
    },
  },

  {
    title: "Santorini Cliff Villa",
    description: "Iconic white villa with panoramic Aegean Sea views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 31000,
    location: "Santorini",
    country: "Greece",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [25.4615, 36.3932],
    },
  },

  {
    title: "Tokyo Sky Apartment",
    description: "Modern apartment in central Tokyo close to famous attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 24000,
    location: "Tokyo",
    country: "Japan",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [139.6917, 35.6895],
    },
  },

  {
    title: "Maldives Water Villa",
    description: "Luxury overwater villa with crystal-clear lagoon access.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 45000,
    location: "Male",
    country: "Maldives",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [73.5093, 4.1755],
    },
  },

  {
    title: "Dubai Marina Penthouse",
    description: "Premium penthouse with spectacular marina skyline views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 28500,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "trending",
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048],
    },
  },

  {
    title: "New York Loft",
    description: "Luxury loft in Manhattan close to Times Square.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 32000,
    location: "New York",
    country: "United States",
    category: "rooms",
    geometry: {
      type: "Point",
      coordinates: [-74.0060, 40.7128],
    },
  },

  {
    title: "Paris Boutique Apartment",
    description: "Elegant apartment near the Eiffel Tower.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
    },
    price: 26000,
    location: "Paris",
    country: "France",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [2.3522, 48.8566],
    },
  },

  {
    title: "Venice Canal House",
    description: "Beautiful canal-side home with classic Italian architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 24000,
    location: "Venice",
    country: "Italy",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [12.3155, 45.4408],
    },
  },

  {
    title: "Bali Jungle Villa",
    description: "Private tropical villa surrounded by lush forests.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    price: 17500,
    location: "Ubud",
    country: "Indonesia",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [115.2625, -8.5069],
    },
  },

  {
    title: "Sydney Harbour Apartment",
    description: "Luxury apartment overlooking the Sydney Opera House.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 29000,
    location: "Sydney",
    country: "Australia",
    category: "trending",
    geometry: {
      type: "Point",
      coordinates: [151.2093, -33.8688],
    },
  },

  {
    title: "Banff Mountain Lodge",
    description: "Cozy mountain lodge in Canada's famous national park.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 21000,
    location: "Banff",
    country: "Canada",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [-115.5708, 51.1784],
    },
  },

  {
    title: "Cape Town Ocean Villa",
    description: "Luxury oceanfront villa with Table Mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 19500,
    location: "Cape Town",
    country: "South Africa",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [18.4241, -33.9249],
    },
  },

  {
    title: "Iceland Glass Cabin",
    description: "Modern glass cabin perfect for viewing the Northern Lights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 27500,
    location: "Reykjavik",
    country: "Iceland",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [-21.9426, 64.1466],
    },
  },

  {
    title: "Queenstown Adventure Lodge",
    description: "Stay in New Zealand's adventure capital surrounded by mountains and lakes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c",
    },
    price: 23500,
    location: "Queenstown",
    country: "New Zealand",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [168.6626, -45.0312],
    },
  },

  {
    title: "Amazon Eco Lodge",
    description: "An unforgettable rainforest experience with eco-friendly luxury.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 18000,
    location: "Manaus",
    country: "Brazil",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [-60.0217, -3.1190],
    },
  }, {
    title: "Barcelona Beach Apartment",
    description: "Modern apartment near Barceloneta Beach with beautiful Mediterranean views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 22000,
    location: "Barcelona",
    country: "Spain",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [2.1734, 41.3851],
    },
  },

  {
    title: "Lisbon Ocean Retreat",
    description: "Luxury apartment overlooking Portugal's beautiful Atlantic coastline.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 19800,
    location: "Lisbon",
    country: "Portugal",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [-9.1393, 38.7223],
    },
  },

  {
    title: "Cappadocia Cave Hotel",
    description: "Unique cave hotel with magical sunrise hot air balloon views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    price: 20500,
    location: "Cappadocia",
    country: "Turkey",
    category: "trending",
    geometry: {
      type: "Point",
      coordinates: [34.8283, 38.6431],
    },
  },

  {
    title: "Marrakech Royal Riad",
    description: "Traditional Moroccan riad featuring stunning architecture and luxurious interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    },
    price: 17200,
    location: "Marrakech",
    country: "Morocco",
    category: "castles",
    geometry: {
      type: "Point",
      coordinates: [-7.9811, 31.6295],
    },
  },

  {
    title: "Singapore Marina Suite",
    description: "Premium suite overlooking Marina Bay Sands and Singapore skyline.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 28500,
    location: "Singapore",
    country: "Singapore",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [103.8198, 1.3521],
    },
  },

  {
    title: "Seoul Skyline Apartment",
    description: "Stylish apartment in Seoul with panoramic city skyline views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 19200,
    location: "Seoul",
    country: "South Korea",
    category: "rooms",
    geometry: {
      type: "Point",
      coordinates: [126.9780, 37.5665],
    },
  },

  {
    title: "Phuket Luxury Pool Villa",
    description: "Private villa with infinity pool overlooking the Andaman Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 21200,
    location: "Phuket",
    country: "Thailand",
    category: "pools",
    geometry: {
      type: "Point",
      coordinates: [98.3381, 7.8804],
    },
  },

  {
    title: "Vienna Heritage Residence",
    description: "Elegant residence surrounded by historic European architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 24800,
    location: "Vienna",
    country: "Austria",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [16.3738, 48.2082],
    },
  },

  {
    title: "Prague Castle View Stay",
    description: "Beautiful apartment offering direct views of Prague Castle.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    },
    price: 19800,
    location: "Prague",
    country: "Czech Republic",
    category: "castles",
    geometry: {
      type: "Point",
      coordinates: [14.4378, 50.0755],
    },
  },

  {
    title: "Rio Beach Resort",
    description: "Luxury beachfront resort near the famous Copacabana Beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 18200,
    location: "Rio de Janeiro",
    country: "Brazil",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [-43.1729, -22.9068],
    },
  },

  {
    title: "Machu Picchu Mountain Lodge",
    description: "Adventure lodge surrounded by Peru's breathtaking Andes Mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 22600,
    location: "Cusco",
    country: "Peru",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [-71.9675, -13.5319],
    },
  },

  {
    title: "Nairobi Safari Camp",
    description: "Luxury safari camp offering unforgettable African wildlife experiences.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 24500,
    location: "Nairobi",
    country: "Kenya",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [36.8219, -1.2921],
    },
  },

  {
    title: "Hallstatt Lake Cottage",
    description: "Charming lakeside cottage in Austria's most beautiful village.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 23200,
    location: "Hallstatt",
    country: "Austria",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [13.6493, 47.5622],
    },
  },

  {
    title: "Swiss Forest Cabin",
    description: "Wooden cabin surrounded by peaceful pine forests and alpine scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 18800,
    location: "Interlaken",
    country: "Switzerland",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [7.8632, 46.6863],
    },
  },

  {
    title: "Hong Kong Harbour Apartment",
    description: "Modern apartment overlooking Victoria Harbour with world-class skyline views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 29800,
    location: "Hong Kong",
    country: "China",
    category: "trending",
    geometry: {
      type: "Point",
      coordinates: [114.1694, 22.3193],
    },
  },

  {
    title: "Srinagar Houseboat",
    description: "Traditional Kashmiri houseboat on Dal Lake with breathtaking Himalayan scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 9200,
    location: "Srinagar",
    country: "India",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [74.7973, 34.0837],
    },
  }, {
    title: "Bora Bora Overwater Villa",
    description: "Luxury overwater villa with crystal-clear lagoons and private deck.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 52000,
    location: "Bora Bora",
    country: "French Polynesia",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [-151.7415, -16.5004],
    },
  },

  {
    title: "Fiji Paradise Resort",
    description: "Beachfront resort with turquoise waters and tropical gardens.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 36000,
    location: "Nadi",
    country: "Fiji",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [177.4430, -17.7765],
    },
  },

  {
    title: "Seychelles Island Retreat",
    description: "Private luxury villa on one of the world's most beautiful islands.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 44500,
    location: "Mahé",
    country: "Seychelles",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [55.4513, -4.6796],
    },
  },

  {
    title: "Blue Lagoon Cabin",
    description: "Modern cabin near Iceland's famous geothermal Blue Lagoon.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 28500,
    location: "Grindavik",
    country: "Iceland",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [-22.4338, 63.8804],
    },
  },

  {
    title: "Alaskan Wilderness Lodge",
    description: "Adventure lodge surrounded by glaciers, forests, and wildlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 26500,
    location: "Anchorage",
    country: "United States",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [-149.9003, 61.2181],
    },
  },

  {
    title: "Ladakh Mountain Camp",
    description: "Camping under the stars with panoramic Himalayan landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 8900,
    location: "Leh",
    country: "India",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [77.5770, 34.1526],
    },
  },

  {
    title: "Kerala Backwater Villa",
    description: "Luxury villa surrounded by peaceful backwaters and coconut trees.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 11200,
    location: "Kumarakom",
    country: "India",
    category: "pools",
    geometry: {
      type: "Point",
      coordinates: [76.4298, 9.6175],
    },
  },

  {
    title: "Ooty Hill Cottage",
    description: "Charming cottage overlooking tea plantations and misty hills.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    price: 7800,
    location: "Ooty",
    country: "India",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [76.6950, 11.4064],
    },
  },

  {
    title: "Andaman Beach House",
    description: "Luxury beach house steps away from white sand and turquoise waters.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 14200,
    location: "Port Blair",
    country: "India",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [92.7265, 11.6234],
    },
  },

  {
    title: "Yellowstone Forest Cabin",
    description: "Cabin near Yellowstone National Park surrounded by nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 22500,
    location: "Yellowstone",
    country: "United States",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [-110.5885, 44.4280],
    },
  },

  {
    title: "Yosemite Valley Lodge",
    description: "Stay in the heart of Yosemite National Park with spectacular scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 24800,
    location: "Yosemite",
    country: "United States",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [-119.5383, 37.8651],
    },
  },

  {
    title: "Swiss Alps Resort",
    description: "Five-star alpine resort with skiing and panoramic mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 33800,
    location: "St. Moritz",
    country: "Switzerland",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [9.8372, 46.4908],
    },
  },

  {
    title: "Petra Desert Camp",
    description: "Luxury Bedouin-style tents close to the ancient city of Petra.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 16800,
    location: "Petra",
    country: "Jordan",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [35.4444, 30.3285],
    },
  },

  {
    title: "Amalfi Coast Villa",
    description: "Elegant cliffside villa with breathtaking Mediterranean sea views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 32500,
    location: "Amalfi",
    country: "Italy",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [14.6027, 40.6333],
    },
  },

  {
    title: "Bali Infinity Pool Villa",
    description: "Luxury tropical villa featuring an infinity pool overlooking rice terraces.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    price: 19800,
    location: "Ubud",
    country: "Indonesia",
    category: "pools",
    geometry: {
      type: "Point",
      coordinates: [115.2625, -8.5069],
    },
  }, {
    title: "Lake Como Luxury Villa",
    description: "Elegant lakeside villa with breathtaking views of Lake Como and the Italian Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    price: 31500,
    location: "Lake Como",
    country: "Italy",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [9.2572, 46.0160],
    },
  },

  {
    title: "Neuschwanstein Castle Stay",
    description: "Stay near Germany's most famous fairytale castle surrounded by alpine scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    },
    price: 27500,
    location: "Schwangau",
    country: "Germany",
    category: "castles",
    geometry: {
      type: "Point",
      coordinates: [10.7498, 47.5576],
    },
  },

  {
    title: "Machu Picchu Eco Lodge",
    description: "A peaceful eco lodge surrounded by the breathtaking Andes Mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 24500,
    location: "Cusco",
    country: "Peru",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [-71.9675, -13.5319],
    },
  },

  {
    title: "Cairo Nile View Hotel",
    description: "Luxury hotel overlooking the Nile River with views of the pyramids nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 18500,
    location: "Cairo",
    country: "Egypt",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [31.2357, 30.0444],
    },
  },

  {
    title: "Petra Desert Resort",
    description: "Luxury desert resort inspired by Bedouin culture near the ancient city of Petra.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 19800,
    location: "Petra",
    country: "Jordan",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [35.4444, 30.3285],
    },
  },

  {
    title: "Great Barrier Reef Beach House",
    description: "Luxury beachfront home with direct access to Australia's famous coral reef.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 32500,
    location: "Cairns",
    country: "Australia",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [145.7700, -16.9186],
    },
  },

  {
    title: "Sapa Mountain Retreat",
    description: "Traditional wooden retreat overlooking Vietnam's spectacular rice terraces.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 13200,
    location: "Sapa",
    country: "Vietnam",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [103.8438, 22.3364],
    },
  },

  {
    title: "Kruger Safari Lodge",
    description: "Luxury safari lodge offering unforgettable wildlife experiences.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 25500,
    location: "Kruger National Park",
    country: "South Africa",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [31.5547, -23.9884],
    },
  },

  {
    title: "Bhutan Himalayan Resort",
    description: "Peaceful resort nestled in the Himalayas with stunning monastery views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 15200,
    location: "Paro",
    country: "Bhutan",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [89.4133, 27.4286],
    },
  },

  {
    title: "Kyoto Bamboo Villa",
    description: "Traditional Japanese villa near the famous Arashiyama Bamboo Forest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 21800,
    location: "Kyoto",
    country: "Japan",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [135.7681, 35.0116],
    },
  },

  {
    title: "Moscow Royal Apartment",
    description: "Luxury apartment close to Red Square with elegant European interiors.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 21200,
    location: "Moscow",
    country: "Russia",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [37.6173, 55.7558],
    },
  },

  {
    title: "Lofoten Arctic Cabin",
    description: "Modern glass cabin perfect for viewing the Northern Lights.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 29800,
    location: "Lofoten",
    country: "Norway",
    category: "arctic",
    geometry: {
      type: "Point",
      coordinates: [13.1900, 68.1460],
    },
  },

  {
    title: "Coorg Coffee Estate Villa",
    description: "Luxury villa surrounded by coffee plantations and lush greenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    price: 9800,
    location: "Coorg",
    country: "India",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [75.8069, 12.3375],
    },
  },

  {
    title: "Nubra Valley Camp",
    description: "Luxury desert camp surrounded by the majestic Himalayas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 11200,
    location: "Nubra Valley",
    country: "India",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [77.5500, 34.6500],
    },
  },

  {
    title: "Havelock Island Resort",
    description: "Beachfront luxury resort on one of India's most beautiful islands.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 16800,
    location: "Havelock Island",
    country: "India",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [92.9900, 11.9800],
    },
  }, {
    title: "Blue Mountains Eco Lodge",
    description: "A peaceful eco-lodge surrounded by eucalyptus forests and breathtaking mountain scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 18600,
    location: "Blue Mountains",
    country: "Australia",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [150.3119, -33.7128],
    },
  },

  {
    title: "Cinque Terre Cliff House",
    description: "Colorful seaside home overlooking the Ligurian Sea with unforgettable sunsets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 27200,
    location: "Cinque Terre",
    country: "Italy",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [9.7076, 44.1270],
    },
  },

  {
    title: "Niagara Riverside Resort",
    description: "Luxury resort just minutes from the world-famous Niagara Falls.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 21500,
    location: "Niagara Falls",
    country: "Canada",
    category: "trending",
    geometry: {
      type: "Point",
      coordinates: [-79.0849, 43.0896],
    },
  },

  {
    title: "Havana Colonial Mansion",
    description: "Stay in a beautifully restored colonial mansion in the heart of Old Havana.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    },
    price: 15200,
    location: "Havana",
    country: "Cuba",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [-82.3666, 23.1136],
    },
  },

  {
    title: "Patagonia Adventure Camp",
    description: "Luxury camping experience surrounded by glaciers, lakes and rugged mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 24800,
    location: "Patagonia",
    country: "Argentina",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [-72.8860, -50.9423],
    },
  },

  {
    title: "Seychelles Ocean Villa",
    description: "Private beachfront villa with crystal-clear waters and tropical gardens.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 43800,
    location: "Mahé",
    country: "Seychelles",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [55.4513, -4.6796],
    },
  },

  {
    title: "Doha Skyline Residence",
    description: "Modern apartment with panoramic views of Doha's impressive skyline.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 21200,
    location: "Doha",
    country: "Qatar",
    category: "rooms",
    geometry: {
      type: "Point",
      coordinates: [51.5310, 25.2854],
    },
  },

  {
    title: "Maui Beach Resort",
    description: "Luxury Hawaiian resort with direct beach access and breathtaking sunsets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 39200,
    location: "Maui",
    country: "United States",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [-156.3319, 20.7984],
    },
  },

  {
    title: "Bled Lake Cottage",
    description: "A charming lakeside cottage overlooking the famous island church.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 19800,
    location: "Lake Bled",
    country: "Slovenia",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [14.1146, 46.3633],
    },
  },

  {
    title: "Antelope Canyon Camp",
    description: "Desert luxury camp surrounded by the breathtaking sandstone canyons.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 16800,
    location: "Arizona",
    country: "United States",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [-111.3743, 36.8619],
    },
  },

  {
    title: "Shillong Pine Retreat",
    description: "Cozy mountain stay surrounded by lush pine forests and waterfalls.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 8400,
    location: "Shillong",
    country: "India",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [91.8933, 25.5788],
    },
  },

  {
    title: "Darjeeling Tea Estate Villa",
    description: "Elegant villa overlooking rolling tea gardens and Himalayan peaks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    price: 9200,
    location: "Darjeeling",
    country: "India",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [88.2627, 27.0410],
    },
  },

  {
    title: "Spiti Valley Homestay",
    description: "Traditional Himalayan homestay surrounded by dramatic mountain landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 7800,
    location: "Spiti Valley",
    country: "India",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [78.1710, 32.2461],
    },
  },

  {
    title: "Mysore Heritage Palace Stay",
    description: "Luxury heritage accommodation inspired by the royal Mysore Palace.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    },
    price: 10800,
    location: "Mysuru",
    country: "India",
    category: "castles",
    geometry: {
      type: "Point",
      coordinates: [76.6394, 12.2958],
    },
  },

  {
    title: "Ranthambore Safari Lodge",
    description: "Stay close to the tiger reserve in a luxury wildlife safari lodge.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 12600,
    location: "Ranthambore",
    country: "India",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [76.5026, 26.0173],
    },
  }, {
    title: "Bora Bora Lagoon Villa",
    description: "Luxury overwater villa with crystal-clear lagoons and breathtaking tropical sunsets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 48500,
    location: "Bora Bora",
    country: "French Polynesia",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [-151.7415, -16.5004],
    },
  },

  {
    title: "Banff Lake Cabin",
    description: "Wooden lakeside cabin surrounded by the Canadian Rockies.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 24500,
    location: "Banff",
    country: "Canada",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [-115.5708, 51.1784],
    },
  },

  {
    title: "Amsterdam Canal House",
    description: "Classic Dutch canal house in the heart of Amsterdam.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 23500,
    location: "Amsterdam",
    country: "Netherlands",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [4.9041, 52.3676],
    },
  },

  {
    title: "Budapest Riverside Apartment",
    description: "Luxury apartment overlooking the Danube River and Parliament building.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 18200,
    location: "Budapest",
    country: "Hungary",
    category: "rooms",
    geometry: {
      type: "Point",
      coordinates: [19.0402, 47.4979],
    },
  },

  {
    title: "Dubrovnik Old Town Villa",
    description: "Historic villa overlooking Croatia's famous Adriatic coastline.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 25800,
    location: "Dubrovnik",
    country: "Croatia",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [18.0944, 42.6507],
    },
  },

  {
    title: "Swiss Glacier Chalet",
    description: "Elegant alpine chalet surrounded by glaciers and snowy peaks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 34500,
    location: "Grindelwald",
    country: "Switzerland",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [8.0369, 46.6242],
    },
  },

  {
    title: "Petra Heritage Camp",
    description: "Luxury Bedouin camp near the ancient city of Petra.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 16400,
    location: "Petra",
    country: "Jordan",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [35.4444, 30.3285],
    },
  },

  {
    title: "Maldives Infinity Resort",
    description: "Five-star island resort with infinity pools and overwater villas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 54000,
    location: "Male",
    country: "Maldives",
    category: "pools",
    geometry: {
      type: "Point",
      coordinates: [73.5093, 4.1755],
    },
  },

  {
    title: "Napa Valley Vineyard Cottage",
    description: "Peaceful vineyard cottage surrounded by California's famous wineries.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 21500,
    location: "Napa Valley",
    country: "United States",
    category: "farms",
    geometry: {
      type: "Point",
      coordinates: [-122.2869, 38.5025],
    },
  },

  {
    title: "Serengeti Safari Lodge",
    description: "Luxury safari lodge in the heart of the Serengeti National Park.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 28600,
    location: "Serengeti",
    country: "Tanzania",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [34.6857, -2.3333],
    },
  },

  {
    title: "Auli Ski Resort",
    description: "Mountain resort famous for skiing and Himalayan landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 9800,
    location: "Auli",
    country: "India",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [79.5669, 30.5284],
    },
  },

  {
    title: "Hampi Heritage Stay",
    description: "Traditional stone house surrounded by UNESCO World Heritage ruins.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    },
    price: 7600,
    location: "Hampi",
    country: "India",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [76.4600, 15.3350],
    },
  },

  {
    title: "Rann of Kutch Desert Camp",
    description: "Luxury tent experience in India's famous white salt desert.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 9200,
    location: "Kutch",
    country: "India",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [70.4707, 23.7337],
    },
  },

  {
    title: "Kashmir Valley Cottage",
    description: "Luxury wooden cottage surrounded by snow-covered mountains and pine forests.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    price: 12400,
    location: "Pahalgam",
    country: "India",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [75.3175, 34.0159],
    },
  },

  {
    title: "Lakshadweep Coral Villa",
    description: "Private beachfront villa with coral reefs and turquoise lagoons.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 16800,
    location: "Lakshadweep",
    country: "India",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [72.6417, 10.5667],
    },
  }, {
    title: "Bled Lake Villa",
    description: "Luxury lakeside villa with breathtaking views of Lake Bled and its famous island church.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 24800,
    location: "Lake Bled",
    country: "Slovenia",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [14.1146, 46.3633],
    },
  },

  {
    title: "Maui Beach Villa",
    description: "Luxury beachfront villa with oceanfront infinity pool and sunset views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 42500,
    location: "Maui",
    country: "United States",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [-156.3319, 20.7984],
    },
  },

  {
    title: "Edinburgh Castle Residence",
    description: "Historic apartment offering spectacular views of Edinburgh Castle.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    },
    price: 23400,
    location: "Edinburgh",
    country: "United Kingdom",
    category: "castles",
    geometry: {
      type: "Point",
      coordinates: [-3.1883, 55.9533],
    },
  },

  {
    title: "Oslo Fjord Cabin",
    description: "Modern Scandinavian cabin overlooking Norway's spectacular fjords.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 26900,
    location: "Oslo",
    country: "Norway",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [10.7522, 59.9139],
    },
  },

  {
    title: "Marrakech Desert Palace",
    description: "Royal Moroccan palace with elegant courtyards and luxury suites.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    },
    price: 19500,
    location: "Marrakech",
    country: "Morocco",
    category: "castles",
    geometry: {
      type: "Point",
      coordinates: [-7.9811, 31.6295],
    },
  },

  {
    title: "Chiang Mai Forest Retreat",
    description: "Peaceful luxury retreat surrounded by lush forests and waterfalls.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 12800,
    location: "Chiang Mai",
    country: "Thailand",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [98.9817, 18.7883],
    },
  },

  {
    title: "Lucerne Alpine Hotel",
    description: "Luxury lakeside hotel surrounded by the Swiss Alps.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 31800,
    location: "Lucerne",
    country: "Switzerland",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [8.3093, 47.0502],
    },
  },

  {
    title: "Phnom Penh Riverside Apartment",
    description: "Elegant riverside apartment overlooking the Mekong River.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 11200,
    location: "Phnom Penh",
    country: "Cambodia",
    category: "rooms",
    geometry: {
      type: "Point",
      coordinates: [104.9282, 11.5564],
    },
  },

  {
    title: "Zanzibar Beach Resort",
    description: "Luxury beachfront resort with white sand beaches and turquoise waters.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 28600,
    location: "Zanzibar",
    country: "Tanzania",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [39.2083, -6.1659],
    },
  },

  {
    title: "Bhopal Lake House",
    description: "Modern lakeside villa overlooking Upper Lake with peaceful surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 8200,
    location: "Bhopal",
    country: "India",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [77.4126, 23.2599],
    },
  },

  {
    title: "Meghalaya Living Root Lodge",
    description: "Nature lodge close to the famous living root bridges and waterfalls.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 7600,
    location: "Cherrapunji",
    country: "India",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [91.7336, 25.2708],
    },
  },

  {
    title: "Jodhpur Blue City Haveli",
    description: "Heritage haveli in the Blue City with authentic Rajasthani architecture.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    },
    price: 11400,
    location: "Jodhpur",
    country: "India",
    category: "castles",
    geometry: {
      type: "Point",
      coordinates: [73.0243, 26.2389],
    },
  },

  {
    title: "Mount Abu Hill Resort",
    description: "Relaxing hill resort with panoramic Aravalli mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 9800,
    location: "Mount Abu",
    country: "India",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [72.7156, 24.5926],
    },
  },

  {
    title: "Varkala Cliff Cottage",
    description: "Beautiful cliffside cottage overlooking the Arabian Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 13200,
    location: "Varkala",
    country: "India",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [76.7163, 8.7379],
    },
  },

  {
    title: "Kaziranga Safari Camp",
    description: "Luxury safari camp near Kaziranga National Park, home of the one-horned rhinoceros.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 10800,
    location: "Kaziranga",
    country: "India",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [93.1711, 26.5775],
    },
  }, {
    title: "Cappadocia Cave Suite",
    description: "Experience a luxurious cave suite with breathtaking hot air balloon views every morning.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 23800,
    location: "Cappadocia",
    country: "Turkey",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [34.8283, 38.6431],
    },
  },

  {
    title: "Venice Grand Canal Apartment",
    description: "Elegant apartment overlooking Venice's famous Grand Canal.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 27800,
    location: "Venice",
    country: "Italy",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [12.3155, 45.4408],
    },
  },

  {
    title: "Bali Infinity Villa",
    description: "Private luxury villa with infinity pool overlooking lush rice terraces.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    price: 19200,
    location: "Ubud",
    country: "Indonesia",
    category: "pools",
    geometry: {
      type: "Point",
      coordinates: [115.2625, -8.5069],
    },
  },

  {
    title: "Hallstatt Lakeside Chalet",
    description: "Wooden chalet overlooking Austria's most picturesque alpine lake.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 26200,
    location: "Hallstatt",
    country: "Austria",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [13.6493, 47.5622],
    },
  },

  {
    title: "Lake Tahoe Cabin",
    description: "Cozy mountain cabin surrounded by pine forests and crystal-clear lake views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 21400,
    location: "Lake Tahoe",
    country: "United States",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [-120.0324, 39.0968],
    },
  },

  {
    title: "Athens Acropolis Residence",
    description: "Luxury apartment with stunning views of the Acropolis.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 20500,
    location: "Athens",
    country: "Greece",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [23.7275, 37.9838],
    },
  },

  {
    title: "Bora Bora Coral Resort",
    description: "Exclusive beachfront resort with turquoise lagoons and luxury villas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 49500,
    location: "Bora Bora",
    country: "French Polynesia",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [-151.7415, -16.5004],
    },
  },

  {
    title: "Seoul Modern Loft",
    description: "Contemporary loft in Seoul's vibrant downtown district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 18600,
    location: "Seoul",
    country: "South Korea",
    category: "rooms",
    geometry: {
      type: "Point",
      coordinates: [126.9780, 37.5665],
    },
  },

  {
    title: "Munnar Tea Estate Bungalow",
    description: "Stay among Kerala's famous tea gardens with breathtaking mountain views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 9800,
    location: "Munnar",
    country: "India",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [77.0595, 10.0889],
    },
  },

  {
    title: "Rishikesh Riverside Camp",
    description: "Adventure campsite beside the Ganges with rafting and bonfire experiences.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 7200,
    location: "Rishikesh",
    country: "India",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [78.2676, 30.0869],
    },
  },

  {
    title: "Coorg Coffee Plantation Stay",
    description: "Premium plantation bungalow surrounded by coffee estates.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 8900,
    location: "Coorg",
    country: "India",
    category: "farms",
    geometry: {
      type: "Point",
      coordinates: [75.8069, 12.3375],
    },
  },

  {
    title: "Udaipur Lake Palace Suite",
    description: "Royal suite overlooking the beautiful Lake Pichola.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    },
    price: 18200,
    location: "Udaipur",
    country: "India",
    category: "castles",
    geometry: {
      type: "Point",
      coordinates: [73.7125, 24.5854],
    },
  },

  {
    title: "Shimla Snow Cottage",
    description: "Beautiful mountain cottage surrounded by cedar forests and snowy peaks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 9200,
    location: "Shimla",
    country: "India",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [77.1734, 31.1048],
    },
  },

  {
    title: "Goa Beach Resort",
    description: "Luxury beach resort with direct access to golden sands and nightlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 14200,
    location: "Goa",
    country: "India",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [73.8278, 15.4909],
    },
  },

  {
    title: "Dubai Marina Sky Penthouse",
    description: "Luxury penthouse with breathtaking Marina skyline views and rooftop pool.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 32500,
    location: "Dubai",
    country: "United Arab Emirates",
    category: "trending",
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048],
    },
  }, {
    title: "Lapland Glass Igloo",
    description: "Sleep beneath the Northern Lights in a luxury glass igloo surrounded by snowy forests.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963",
    },
    price: 38500,
    location: "Rovaniemi",
    country: "Finland",
    category: "arctic",
    geometry: {
      type: "Point",
      coordinates: [25.7294, 66.5039],
    },
  },

  {
    title: "Tulum Beach Villa",
    description: "Private beachfront villa overlooking the Caribbean Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 26500,
    location: "Tulum",
    country: "Mexico",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [-87.4653, 20.2114],
    },
  },

  {
    title: "Cancun Ocean Resort",
    description: "Luxury all-inclusive resort with turquoise waters and white sandy beaches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 28900,
    location: "Cancun",
    country: "Mexico",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [-86.8515, 21.1619],
    },
  },

  {
    title: "Everest View Lodge",
    description: "Mountain lodge offering panoramic views of Mount Everest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 19500,
    location: "Namche Bazaar",
    country: "Nepal",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [86.7140, 27.8053],
    },
  },

  {
    title: "Palawan Island Resort",
    description: "Luxury island escape with crystal-clear lagoons and limestone cliffs.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 24800,
    location: "El Nido",
    country: "Philippines",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [119.3956, 11.2027],
    },
  },

  {
    title: "Ella Tea Plantation Cottage",
    description: "Relax in a peaceful cottage surrounded by Sri Lanka's lush tea estates.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    price: 11800,
    location: "Ella",
    country: "Sri Lanka",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [81.0466, 6.8667],
    },
  },

  {
    title: "Langkawi Beach Resort",
    description: "Five-star beach resort surrounded by tropical islands.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 18200,
    location: "Langkawi",
    country: "Malaysia",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [99.7318, 6.3500],
    },
  },

  {
    title: "Bruges Canal House",
    description: "Historic canal-side home in Belgium's medieval city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 21400,
    location: "Bruges",
    country: "Belgium",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [3.2247, 51.2093],
    },
  },

  {
    title: "Stockholm Waterfront Apartment",
    description: "Modern Scandinavian apartment overlooking Stockholm's beautiful waterfront.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 23600,
    location: "Stockholm",
    country: "Sweden",
    category: "rooms",
    geometry: {
      type: "Point",
      coordinates: [18.0686, 59.3293],
    },
  },

  {
    title: "Copenhagen Harbor Loft",
    description: "Stylish loft in Denmark's colorful waterfront district.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 22800,
    location: "Copenhagen",
    country: "Denmark",
    category: "trending",
    geometry: {
      type: "Point",
      coordinates: [12.5683, 55.6761],
    },
  },

  {
    title: "Cliffs of Moher Cottage",
    description: "Stone cottage overlooking Ireland's dramatic coastal cliffs.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 19800,
    location: "County Clare",
    country: "Ireland",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [-9.4309, 52.9715],
    },
  },

  {
    title: "Zhangjiajie Sky Resort",
    description: "Mountain resort inspired by the floating mountains of Avatar.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 25800,
    location: "Zhangjiajie",
    country: "China",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [110.4792, 29.1171],
    },
  },

  {
    title: "Gangtok Himalayan Hotel",
    description: "Luxury hotel offering panoramic views of Kanchenjunga.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 9400,
    location: "Gangtok",
    country: "India",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [88.6065, 27.3389],
    },
  },

  {
    title: "Mahabalipuram Beach House",
    description: "Beautiful beach house near UNESCO World Heritage temples.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 9800,
    location: "Mahabalipuram",
    country: "India",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [80.1920, 12.6269],
    },
  },

  {
    title: "Nainital Lake View Cottage",
    description: "Cozy lakeside cottage overlooking the famous Naini Lake.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 8900,
    location: "Nainital",
    country: "India",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [79.4636, 29.3803],
    },
  }, {
    title: "Palawan Crystal Lagoon Villa",
    description: "Luxury beachfront villa surrounded by crystal-clear lagoons and limestone cliffs.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 27600,
    location: "El Nido",
    country: "Philippines",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [119.3956, 11.2027],
    },
  },

  {
    title: "Atacama Desert Lodge",
    description: "Luxury lodge in the world's driest desert with breathtaking stargazing.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 21400,
    location: "San Pedro de Atacama",
    country: "Chile",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [-68.1997, -22.9087],
    },
  },

  {
    title: "Rainbow Mountain Retreat",
    description: "Mountain retreat near Peru's colorful Rainbow Mountain.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 18200,
    location: "Cusco",
    country: "Peru",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [-71.9675, -13.5319],
    },
  },

  {
    title: "Brunei Rainforest Resort",
    description: "Exclusive rainforest resort with luxury villas and river adventures.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 20500,
    location: "Bandar Seri Begawan",
    country: "Brunei",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [114.9398, 4.9031],
    },
  },

  {
    title: "Krakow Old Town Apartment",
    description: "Elegant apartment in Poland's beautiful medieval Old Town.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 16500,
    location: "Krakow",
    country: "Poland",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [19.9449, 50.0647],
    },
  },

  {
    title: "Langtang Mountain Lodge",
    description: "Traditional Himalayan lodge with spectacular mountain scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 12400,
    location: "Langtang",
    country: "Nepal",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [85.5167, 28.2167],
    },
  },

  {
    title: "Lake Louise Resort",
    description: "Luxury resort overlooking Canada's iconic turquoise lake.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 29800,
    location: "Lake Louise",
    country: "Canada",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [-116.1773, 51.4254],
    },
  },

  {
    title: "Colosseum Luxury Suite",
    description: "Premium suite within walking distance of Rome's Colosseum.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 25800,
    location: "Rome",
    country: "Italy",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [12.4964, 41.9028],
    },
  },

  {
    title: "Baku Seaside Apartment",
    description: "Modern apartment overlooking the Caspian Sea promenade.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 15400,
    location: "Baku",
    country: "Azerbaijan",
    category: "rooms",
    geometry: {
      type: "Point",
      coordinates: [49.8671, 40.4093],
    },
  },

  {
    title: "Munnar Tree House",
    description: "Luxury tree house surrounded by tea gardens and misty hills.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 9800,
    location: "Munnar",
    country: "India",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [77.0595, 10.0889],
    },
  },

  {
    title: "Tawang Monastery Retreat",
    description: "Mountain retreat near India's largest Buddhist monastery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 8600,
    location: "Tawang",
    country: "India",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [91.8639, 27.5861],
    },
  },

  {
    title: "Puri Beach Resort",
    description: "Beachfront resort located just steps from the Bay of Bengal.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 9200,
    location: "Puri",
    country: "India",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [85.8312, 19.8135],
    },
  },

  {
    title: "Kodaikanal Lake Cottage",
    description: "Charming lakeside cottage surrounded by pine forests.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 8700,
    location: "Kodaikanal",
    country: "India",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [77.4892, 10.2381],
    },
  },

  {
    title: "Jaisalmer Desert Camp",
    description: "Luxury desert camp featuring camel safaris and cultural performances.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 10500,
    location: "Jaisalmer",
    country: "India",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [70.9083, 26.9157],
    },
  },

  {
    title: "Alibaug Beach Villa",
    description: "Weekend getaway villa with private beach access near Mumbai.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 14500,
    location: "Alibaug",
    country: "India",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [72.8722, 18.6414],
    },
  }, {
    title: "Positano Cliff Villa",
    description: "Luxury cliffside villa overlooking the breathtaking Amalfi Coast.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 34800,
    location: "Positano",
    country: "Italy",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [14.4849, 40.6281],
    },
  },

  {
    title: "Milos White Cave House",
    description: "Traditional Cycladic cave house with stunning sea views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 22800,
    location: "Milos",
    country: "Greece",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [24.4286, 36.6968],
    },
  },

  {
    title: "Reine Arctic Cabin",
    description: "Glass-front cabin surrounded by Norway's dramatic fjords.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 28600,
    location: "Reine",
    country: "Norway",
    category: "arctic",
    geometry: {
      type: "Point",
      coordinates: [13.0838, 67.9322],
    },
  },

  {
    title: "Meteora Monastery Stay",
    description: "Unique accommodation beneath Greece's famous cliff monasteries.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    },
    price: 19400,
    location: "Meteora",
    country: "Greece",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [21.6269, 39.7217],
    },
  },

  {
    title: "Antalya Beach Resort",
    description: "Mediterranean luxury resort with private beach and marina.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 21500,
    location: "Antalya",
    country: "Turkey",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [30.7133, 36.8969],
    },
  },

  {
    title: "Sossusvlei Desert Camp",
    description: "Luxury safari tents surrounded by Namibia's famous red dunes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 23600,
    location: "Sossusvlei",
    country: "Namibia",
    category: "camping",
    geometry: {
      type: "Point",
      coordinates: [15.8850, -24.7282],
    },
  },

  {
    title: "Machu Picchu Valley Lodge",
    description: "Luxury lodge surrounded by Peru's Sacred Valley.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 24200,
    location: "Aguas Calientes",
    country: "Peru",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [-72.5450, -13.1547],
    },
  },

  {
    title: "Salzburg Old Town Apartment",
    description: "Elegant apartment in Austria's historic Mozart city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 18600,
    location: "Salzburg",
    country: "Austria",
    category: "iconic-cities",
    geometry: {
      type: "Point",
      coordinates: [13.0550, 47.8095],
    },
  },

  {
    title: "Jiufen Mountain House",
    description: "Traditional mountain house overlooking Taiwan's misty hills.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 16800,
    location: "Jiufen",
    country: "Taiwan",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [121.8442, 25.1097],
    },
  },

  {
    title: "Sapa Rice Terrace Lodge",
    description: "Mountain lodge overlooking Vietnam's iconic rice terraces.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 12600,
    location: "Sapa",
    country: "Vietnam",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [103.8438, 22.3364],
    },
  },

  {
    title: "Auroville Eco Villa",
    description: "Eco-friendly retreat surrounded by forests and sustainable gardens.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 7800,
    location: "Auroville",
    country: "India",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [79.8135, 12.0067],
    },
  },

  {
    title: "Valley of Flowers Cottage",
    description: "Beautiful mountain cottage near the Valley of Flowers National Park.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 8600,
    location: "Chamoli",
    country: "India",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [79.5941, 30.7280],
    },
  },

  {
    title: "Gokarna Beach Cottage",
    description: "Relaxing beachfront cottage away from the crowds.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 9400,
    location: "Gokarna",
    country: "India",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [74.3188, 14.5479],
    },
  },

  {
    title: "Orchha Heritage Palace",
    description: "Historic palace stay in the heart of Madhya Pradesh.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    },
    price: 9800,
    location: "Orchha",
    country: "India",
    category: "castles",
    geometry: {
      type: "Point",
      coordinates: [78.6400, 25.3510],
    },
  },

  {
    title: "Ziro Valley Homestay",
    description: "Traditional Apatani homestay surrounded by lush green valleys.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 7200,
    location: "Ziro",
    country: "India",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [93.8285, 27.5442],
    },
  }, {
    title: "Faroe Islands Cliff Cabin",
    description: "Luxury cabin perched on dramatic cliffs overlooking the North Atlantic Ocean.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 28400,
    location: "Tórshavn",
    country: "Faroe Islands",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [-6.7716, 62.0079],
    },
  },

  {
    title: "Yosemite Valley Lodge",
    description: "Premium lodge surrounded by Yosemite's granite cliffs and waterfalls.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 24200,
    location: "Yosemite National Park",
    country: "United States",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [-119.5383, 37.8651],
    },
  },

  {
    title: "Galápagos Eco Resort",
    description: "Exclusive eco-resort surrounded by unique wildlife and volcanic islands.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 32500,
    location: "Puerto Ayora",
    country: "Ecuador",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [-90.3126, -0.7402],
    },
  },

  {
    title: "Kyoto Bamboo Retreat",
    description: "Traditional Japanese villa beside the Arashiyama Bamboo Forest.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 21500,
    location: "Kyoto",
    country: "Japan",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [135.7681, 35.0116],
    },
  },

  {
    title: "Santorini Sunset Suite",
    description: "Luxury cliffside suite overlooking the caldera and Aegean Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 31800,
    location: "Santorini",
    country: "Greece",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [25.4615, 36.3932],
    },
  },

  {
    title: "Yellowstone Riverside Cabin",
    description: "Peaceful riverside cabin near Yellowstone National Park.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 22800,
    location: "Yellowstone",
    country: "United States",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [-110.5885, 44.4280],
    },
  },

  {
    title: "Swiss Glacier Resort",
    description: "Luxury ski resort overlooking majestic glaciers and Alpine peaks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 35600,
    location: "Zermatt",
    country: "Switzerland",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [7.7491, 46.0207],
    },
  },

  {
    title: "Maldives Coral Villa",
    description: "Luxury overwater villa with direct access to colorful coral reefs.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 54800,
    location: "Male",
    country: "Maldives",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [73.5093, 4.1755],
    },
  },

  {
    title: "Petra Desert Palace",
    description: "Luxury desert palace near the ancient city carved into sandstone cliffs.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 19800,
    location: "Petra",
    country: "Jordan",
    category: "castles",
    geometry: {
      type: "Point",
      coordinates: [35.4444, 30.3285],
    },
  },

  {
    title: "Phuket Infinity Resort",
    description: "Beachfront resort featuring infinity pools overlooking the Andaman Sea.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 21400,
    location: "Phuket",
    country: "Thailand",
    category: "pools",
    geometry: {
      type: "Point",
      coordinates: [98.3381, 7.8804],
    },
  },

  {
    title: "Valley of Flowers Lodge",
    description: "Stay beside India's famous UNESCO Valley of Flowers National Park.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 8400,
    location: "Joshimath",
    country: "India",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [79.5640, 30.5554],
    },
  },

  {
    title: "Chikmagalur Coffee Estate",
    description: "Luxury plantation bungalow surrounded by coffee estates and forests.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 9100,
    location: "Chikmagalur",
    country: "India",
    category: "farms",
    geometry: {
      type: "Point",
      coordinates: [75.7720, 13.3161],
    },
  },

  {
    title: "Mount Fuji View Cabin",
    description: "Wooden cabin offering breathtaking views of Japan's iconic Mount Fuji.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 23600,
    location: "Fujikawaguchiko",
    country: "Japan",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [138.7556, 35.4973],
    },
  },

  {
    title: "Blue Lagoon Spa Resort",
    description: "Luxury geothermal spa resort in Iceland's volcanic landscape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 31200,
    location: "Grindavik",
    country: "Iceland",
    category: "pools",
    geometry: {
      type: "Point",
      coordinates: [-22.4338, 63.8804],
    },
  },

  {
    title: "Lake Pichola Palace Stay",
    description: "Royal palace stay overlooking the beautiful waters of Lake Pichola.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
    },
    price: 18400,
    location: "Udaipur",
    country: "India",
    category: "castles",
    geometry: {
      type: "Point",
      coordinates: [73.7125, 24.5854],
    },
  }, {
    title: "French Riviera Sea Villa",
    description: "Elegant Mediterranean villa overlooking the sparkling waters of the French Riviera.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 39500,
    location: "Nice",
    country: "France",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [7.2619, 43.7102],
    },
  },

  {
    title: "Lake Garda Luxury Resort",
    description: "Luxury lakeside resort surrounded by vineyards and Italian mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
    },
    price: 27800,
    location: "Lake Garda",
    country: "Italy",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [10.6866, 45.6042],
    },
  },

  {
    title: "Jungfrau Alpine Chalet",
    description: "Premium Swiss chalet offering spectacular views of the Jungfrau mountains.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    price: 36500,
    location: "Interlaken",
    country: "Switzerland",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [7.8632, 46.6863],
    },
  },

  {
    title: "Grand Canyon Sky Lodge",
    description: "Luxury lodge overlooking one of the world's greatest natural wonders.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 25400,
    location: "Grand Canyon",
    country: "United States",
    category: "mountains",
    geometry: {
      type: "Point",
      coordinates: [-112.1401, 36.0544],
    },
  },

  {
    title: "Milford Sound Waterfront Cabin",
    description: "A peaceful waterfront cabin surrounded by dramatic fjords and waterfalls.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    },
    price: 28600,
    location: "Milford Sound",
    country: "New Zealand",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [167.9256, -44.6700],
    },
  },

  {
    title: "Andaman Island Luxury Resort",
    description: "Beachfront resort with crystal-clear water and white sand beaches.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    },
    price: 17200,
    location: "Havelock Island",
    country: "India",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [92.9895, 11.9807],
    },
  },

  {
    title: "Dal Lake Royal Houseboat",
    description: "Traditional Kashmiri houseboat offering luxury on the beautiful Dal Lake.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
    },
    price: 12600,
    location: "Srinagar",
    country: "India",
    category: "amazing-views",
    geometry: {
      type: "Point",
      coordinates: [74.7973, 34.0837],
    },
  },

  {
    title: "Mykonos Windmill Villa",
    description: "Luxury Cycladic villa with panoramic Aegean Sea views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1494526585095-c41746248156",
    },
    price: 31800,
    location: "Mykonos",
    country: "Greece",
    category: "beach",
    geometry: {
      type: "Point",
      coordinates: [25.3289, 37.4467],
    },
  },

  {
    title: "Iguazu Falls Jungle Lodge",
    description: "Eco-lodge surrounded by tropical rainforest and the magnificent Iguazu Falls.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
    },
    price: 23800,
    location: "Puerto Iguazu",
    country: "Argentina",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [-54.5736, -25.5972],
    },
  },

  {
    title: "Ngorongoro Safari Lodge",
    description: "Luxury safari lodge overlooking Africa's world-famous Ngorongoro Crater.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
    },
    price: 29800,
    location: "Ngorongoro",
    country: "Tanzania",
    category: "forest",
    geometry: {
      type: "Point",
      coordinates: [35.5877, -3.1619],
    },
  },

];

module.exports = { data: sampleListings };