// Sample data for MongoDB collections
require("dotenv").config();
// 20 Sample Users
const users = [
  {
    _id: { oid: "67a1b1ca59615304febd1a01" },
    email: "ahmed.hassan@gmail.com",
    password: "password123",
    role: "User",
    age: 28,
    gender: "male",
    city: "Cairo",
    purchasedEvents: [],
  },
  {
    _id: { oid: "67a1b1ca59615304febd1a02" },
    email: "fatma.mohamed@gmail.com",
    password: "password123",
    role: "User",
    age: 32,
    gender: "female",
    city: "Alexandria",
    purchasedEvents: [],
  },
  {
    _id: { oid: "67a1b1ca59615304febd1a03" },
    email: "omar.ali@gmail.com",
    password: "password123",
    role: "User",
    age: 24,
    gender: "male",
    city: "Cairo",
    purchasedEvents: [],
  },
  {
    _id: { oid: "67a1b1ca59615304febd1a04" },
    email: "nour.salem@gmail.com",
    password: "password123",
    role: "User",
    age: 19,
    gender: "female",
    city: "Giza",
    purchasedEvents: [],
  },
  {
    _id: { oid: "67a1b1ca59615304febd1a05" },
    email: "hassan.ahmed@gmail.com",
    password: "password123",
    role: "User",
    age: 35,
    gender: "male",
    city: "Cairo",
    purchasedEvents: [],
  },
  {
    _id: { oid: "67a1b1ca59615304febd1a06" },
    email: "mona.ibrahim@gmail.com",
    password: "password123",
    role: "User",
    age: 41,
    gender: "female",
    city: "Alexandria",
    purchasedEvents: [],
  },
  {
    _id: { oid: "67a1b1ca59615304febd1a07" },
    email: "khaled.mostafa@gmail.com",
    password: "password123",
    role: "User",
    age: 29,
    gender: "male",
    city: "Mansoura",
    purchasedEvents: [],
  },
  {
    _id: { oid: "67a1b1ca59615304febd1a08" },
    email: "sara.mahmoud@gmail.com",
    password: "password123",
    role: "User",
    age: 26,
    gender: "female",
    city: "Cairo",
    purchasedEvents: [],
  },
  {
    _id: { oid: "67a1b1ca59615304febd1a09" },
    email: "mahmoud.farouk@gmail.com",
    password: "password123",
    role: "User",
    age: 45,
    gender: "male",
    city: "Aswan",
    purchasedEvents: [],
  },
  {
    _id: { oid: "67a1b1ca59615304febd1a10" },
    email: "yasmin.nasser@gmail.com",
    password: "password123",
    role: "User",
    age: 22,
    gender: "female",
    city: "Cairo",
    purchasedEvents: [],
  },
  {
    _id: { oid: "67a1b1ca59615304febd1a11" },
    email: "tarek.hassan@gmail.com",
    password: "password123",
    role: "User",
    age: 33,
    gender: "male",
    city: "Luxor",
    purchasedEvents: [],
  },
  {
    _id: { oid: "67a1b1ca59615304febd1a12" },
    email: "dina.rashad@gmail.com",
    password: "password123",
    role: "User",
    age: 38,
    gender: "female",
    city: "Giza",
    purchasedEvents: [],
  },
  {
    _id: { oid: "67a1b1ca59615304febd1a13" },
    email: "youssef.kamel@gmail.com",
    password: "password123",
    role: "User",
    age: 27,
    gender: "male",
    city: "Alexandria",
    purchasedEvents: [],
  },
  {
    _id: { oid: "67a1b1ca59615304febd1a14" },
    email: "rana.mohamed@gmail.com",
    password: "password123",
    role: "User",
    age: 31,
    gender: "female",
    city: "Cairo",
    purchasedEvents: [],
  },
  {
    _id: { oid: "67a1b1ca59615304febd1a15" },
    email: "amr.sayed@gmail.com",
    password: "password123",
    role: "User",
    age: 36,
    gender: "male",
    city: "Tanta",
    purchasedEvents: [],
  },
  {
    _id: { oid: "67a1b1ca59615304febd1a16" },
    email: "reem.ali@gmail.com",
    password: "password123",
    role: "User",
    age: 23,
    gender: "female",
    city: "Cairo",
    purchasedEvents: [],
  },
  {
    _id: { oid: "67a1b1ca59615304febd1a17" },
    email: "karim.abdel@gmail.com",
    password: "password123",
    role: "User",
    age: 40,
    gender: "male",
    city: "Alexandria",
    purchasedEvents: [],
  },
  {
    _id: { oid: "67a1b1ca59615304febd1a18" },
    email: "hala.ahmed@gmail.com",
    password: "password123",
    role: "User",
    age: 29,
    gender: "female",
    city: "Giza",
    purchasedEvents: [],
  },
  {
    _id: { oid: "67a1b1ca59615304febd1a19" },
    email: "mohamed.omar@gmail.com",
    password: "password123",
    role: "User",
    age: 34,
    gender: "male",
    city: "Cairo",
    purchasedEvents: [],
  },
  {
    _id: { oid: "67a1b1ca59615304febd1a20" },
    email: "laila.hassan@gmail.com",
    password: "password123",
    role: "User",
    age: 42,
    gender: "female",
    city: "Alexandria",
    purchasedEvents: [],
  },
];

// 15 Sample Events with realistic buyer distributions
const events = [
  {
    _id: { oid: "68b2f1157ceb5b091df79901" },
    name: "Cairo International Book Fair",
    venue: "Cairo International Convention Center",
    date: "2025-01-15",
    time: "10:00AM - 10:00PM",
    price: 25,
    totalSeats: 5000,
    availableSeats: 1200,
    soldSeats: 3800,
    status: "ongoing",
    category: "literature",
    description: "The largest book fair in the Arab world.",
    tags: ["#Books", "#Literature", "#Culture"],
    expectedAttendance: 4500,
    popularity: "High",
    buyers: [
      // Multiple buyers from our user list (representing sold tickets)
      ...Array(15)
        .fill(null)
        .map((_, i) => users[i % 20]), // 15 attendees
    ],
  },
  {
    _id: { oid: "68b2f1157ceb5b091df79902" },
    name: "Rock the Nile Festival",
    venue: "New Administrative Capital",
    date: "2025-02-20",
    time: "7:00PM - 2:00AM",
    price: 150,
    totalSeats: 8000,
    availableSeats: 500,
    soldSeats: 7500,
    status: "upcoming",
    category: "music",
    description: "Egypt's biggest rock music festival.",
    tags: ["#Music", "#Rock", "#Festival"],
    expectedAttendance: 7800,
    popularity: "High",
    buyers: [
      ...Array(25)
        .fill(null)
        .map((_, i) => users[i % 20]), // 25 attendees (some repeat customers)
    ],
  },
  {
    _id: { oid: "68b2f1157ceb5b091df79903" },
    name: "Tech Summit Cairo 2025",
    venue: "Smart Village",
    date: "2025-03-10",
    time: "9:00AM - 6:00PM",
    price: 300,
    totalSeats: 1500,
    availableSeats: 200,
    soldSeats: 1300,
    status: "upcoming",
    category: "technology",
    description: "Annual technology conference for MENA region.",
    tags: ["#Tech", "#AI", "#Innovation"],
    expectedAttendance: 1400,
    popularity: "High",
    buyers: [
      ...Array(18)
        .fill(null)
        .map((_, i) => users[i % 20]),
    ],
  },
  {
    _id: { oid: "68b2f1157ceb5b091df79904" },
    name: "Alexandria Art Exhibition",
    venue: "Bibliotheca Alexandrina",
    date: "2025-01-25",
    time: "11:00AM - 8:00PM",
    price: 40,
    totalSeats: 800,
    availableSeats: 150,
    soldSeats: 650,
    status: "ongoing",
    category: "art",
    description: "Contemporary Egyptian art exhibition.",
    tags: ["#Art", "#Culture", "#Exhibition"],
    expectedAttendance: 700,
    popularity: "Medium",
    buyers: [
      ...Array(12)
        .fill(null)
        .map((_, i) => users[i % 20]),
    ],
  },
  {
    _id: { oid: "68b2f1157ceb5b091df79905" },
    name: "Cairo Marathon 2025",
    venue: "Tahrir Square to Pyramids",
    date: "2025-02-15",
    time: "6:00AM - 12:00PM",
    price: 80,
    totalSeats: 3000,
    availableSeats: 800,
    soldSeats: 2200,
    status: "upcoming",
    category: "sports",
    description: "Annual international marathon in Cairo.",
    tags: ["#Marathon", "#Sports", "#Fitness"],
    expectedAttendance: 2500,
    popularity: "High",
    buyers: [
      ...Array(20)
        .fill(null)
        .map((_, i) => users[i % 20]),
    ],
  },
  {
    _id: { oid: "68b2f1157ceb5b091df79906" },
    name: "Stand-up Comedy Night",
    venue: "Cairo Opera House",
    date: "2025-01-30",
    time: "8:00PM - 11:00PM",
    price: 120,
    totalSeats: 500,
    availableSeats: 80,
    soldSeats: 420,
    status: "upcoming",
    category: "entertainment",
    description: "Egypt's funniest comedians in one night.",
    tags: ["#Comedy", "#Entertainment", "#Laughs"],
    expectedAttendance: 480,
    popularity: "High",
    buyers: [
      ...Array(14)
        .fill(null)
        .map((_, i) => users[i % 20]),
    ],
  },
  {
    _id: { oid: "68b2f1157ceb5b091df79907" },
    name: "Startup Pitch Competition",
    venue: "AUC New Cairo",
    date: "2025-03-05",
    time: "10:00AM - 5:00PM",
    price: 50,
    totalSeats: 600,
    availableSeats: 250,
    soldSeats: 350,
    status: "upcoming",
    category: "business",
    description: "Young entrepreneurs pitch their ideas.",
    tags: ["#Startup", "#Business", "#Innovation"],
    expectedAttendance: 500,
    popularity: "Medium",
    buyers: [
      ...Array(10)
        .fill(null)
        .map((_, i) => users[i % 20]),
    ],
  },
  {
    _id: { oid: "68b2f1157ceb5b091df79908" },
    name: "Classical Music Concert",
    venue: "Cairo Opera House",
    date: "2025-02-28",
    time: "7:30PM - 10:00PM",
    price: 200,
    totalSeats: 900,
    availableSeats: 300,
    soldSeats: 600,
    status: "upcoming",
    category: "music",
    description: "Cairo Symphony Orchestra performance.",
    tags: ["#Classical", "#Orchestra", "#Music"],
    expectedAttendance: 750,
    popularity: "Medium",
    buyers: [
      ...Array(16)
        .fill(null)
        .map((_, i) => users[i % 20]),
    ],
  },
  {
    _id: { oid: "68b2f1157ceb5b091df79909" },
    name: "Food Festival Cairo",
    venue: "Al Azhar Park",
    date: "2025-04-12",
    time: "4:00PM - 11:00PM",
    price: 60,
    totalSeats: 2000,
    availableSeats: 400,
    soldSeats: 1600,
    status: "upcoming",
    category: "food",
    description: "Egyptian and international cuisine festival.",
    tags: ["#Food", "#Festival", "#Cuisine"],
    expectedAttendance: 1800,
    popularity: "High",
    buyers: [
      ...Array(22)
        .fill(null)
        .map((_, i) => users[i % 20]),
    ],
  },
  {
    _id: { oid: "68b2f1157ceb5b091df79910" },
    name: "Photography Workshop",
    venue: "Downtown Cairo",
    date: "2025-01-28",
    time: "2:00PM - 6:00PM",
    price: 180,
    totalSeats: 50,
    availableSeats: 12,
    soldSeats: 38,
    status: "upcoming",
    category: "education",
    description: "Professional photography techniques workshop.",
    tags: ["#Photography", "#Workshop", "#Skills"],
    expectedAttendance: 45,
    popularity: "Medium",
    buyers: [
      ...Array(8)
        .fill(null)
        .map((_, i) => users[i % 20]),
    ],
  },
  {
    _id: { oid: "68b2f1157ceb5b091df79911" },
    name: "Fashion Week Cairo",
    venue: "Four Seasons Hotel",
    date: "2025-03-22",
    time: "6:00PM - 11:00PM",
    price: 250,
    totalSeats: 400,
    availableSeats: 50,
    soldSeats: 350,
    status: "upcoming",
    category: "fashion",
    description: "Latest fashion trends from Egyptian designers.",
    tags: ["#Fashion", "#Design", "#Style"],
    expectedAttendance: 380,
    popularity: "High",
    buyers: [
      ...Array(13)
        .fill(null)
        .map((_, i) => users[i % 20]),
    ],
  },
  {
    _id: { oid: "68b2f1157ceb5b091df79912" },
    name: "Gaming Convention",
    venue: "Cairo Festival City",
    date: "2025-04-05",
    time: "10:00AM - 10:00PM",
    price: 90,
    totalSeats: 1200,
    availableSeats: 300,
    soldSeats: 900,
    status: "upcoming",
    category: "entertainment",
    description: "Latest games and esports tournaments.",
    tags: ["#Gaming", "#Esports", "#Technology"],
    expectedAttendance: 1100,
    popularity: "High",
    buyers: [
      ...Array(17)
        .fill(null)
        .map((_, i) => users[i % 20]),
    ],
  },
  {
    _id: { oid: "68b2f1157ceb5b091df79913" },
    name: "Health & Wellness Expo",
    venue: "Cairo International Conference Center",
    date: "2025-02-10",
    time: "9:00AM - 7:00PM",
    price: 35,
    totalSeats: 1800,
    availableSeats: 600,
    soldSeats: 1200,
    status: "upcoming",
    category: "health",
    description: "Health, fitness and wellness exhibition.",
    tags: ["#Health", "#Wellness", "#Fitness"],
    expectedAttendance: 1500,
    popularity: "Medium",
    buyers: [
      ...Array(19)
        .fill(null)
        .map((_, i) => users[i % 20]),
    ],
  },
  {
    _id: { oid: "68b2f1157ceb5b091df79914" },
    name: "Real Estate Summit",
    venue: "Sheraton Cairo",
    date: "2025-03-18",
    time: "9:00AM - 5:00PM",
    price: 400,
    totalSeats: 300,
    availableSeats: 80,
    soldSeats: 220,
    status: "upcoming",
    category: "business",
    description: "Egyptian real estate market insights.",
    tags: ["#RealEstate", "#Investment", "#Business"],
    expectedAttendance: 280,
    popularity: "Medium",
    buyers: [
      ...Array(11)
        .fill(null)
        .map((_, i) => users[i % 20]),
    ],
  },
  {
    _id: { oid: "68b2f1157ceb5b091df79915" },
    name: "Children's Theater Festival",
    venue: "Hanager Arts Center",
    date: "2025-04-15",
    time: "3:00PM - 7:00PM",
    price: 45,
    totalSeats: 600,
    availableSeats: 200,
    soldSeats: 400,
    status: "upcoming",
    category: "entertainment",
    description: "Family-friendly theater performances.",
    tags: ["#Theater", "#Kids", "#Family"],
    expectedAttendance: 550,
    popularity: "Medium",
    buyers: [
      ...Array(12)
        .fill(null)
        .map((_, i) => users[i % 20]),
    ],
  },
];

// MongoDB insertion script
const insertSampleData = async () => {
  const { MongoClient } = require("mongodb");

  // Replace with your MongoDB connection string

  const client = new MongoClient(process.env.DATABASE_URL);

  try {
    await client.connect();
    const db = client.db("eventX");

    // Clear existing data (optional)
    await db.collection("users").deleteMany({});
    await db.collection("events").deleteMany({});

    // Insert users
    await db.collection("users").insertMany(users);
    console.log("✅ Inserted 20 users");

    // Insert events
    await db.collection("events").insertMany(events);
    console.log("✅ Inserted 15 events");

    console.log("🎉 Sample data inserted successfully!");
  } catch (error) {
    console.error("Error inserting sample data:", error);
  } finally {
    await client.close();
  }
};
insertSampleData();
