export interface BudgetItem {
  category: string;
  status: string;
  details: string;
  information: string;
  actual: number;
  forecasted: number;
  delta?: number;
}

export const budgetData: BudgetItem[] = [
  // Transport
  { category: "Transport", status: "Paid", details: "Taxi", information: "", actual: 1099.99, forecasted: 1008.00 },
  { category: "Transport", status: "Paid", details: "Health insurance policy for the trip to Prishtina - Roberto, Giuseppe, Marco", information: "", actual: 371.12, forecasted: 0 },
  { category: "Transport", status: "Paid", details: "Travel - Pescara Team", information: "", actual: 2659.61, forecasted: 2620.00 },
  { category: "Transport", status: "Paid", details: "Travel - Milan Team", information: "", actual: 992.33, forecasted: 1022.00 },
  { category: "Transport", status: "Paid", details: "Travel - Luke Judge", information: "", actual: 0, forecasted: 1800.00 },
  { category: "Transport", status: "Paid", details: "Travel - India Team", information: "", actual: 4296.85, forecasted: 3600.00 },
  { category: "Transport", status: "Paid", details: "Travel - Lewis Morfoot", information: "", actual: 187.96, forecasted: 190.00 },
  { category: "Transport", status: "Paid", details: "Travel - Michelle Carter", information: "", actual: 214.74, forecasted: 0 },
  { category: "Transport", status: "Paid", details: "Transfer with Van from Tirana Airport to Prishtina", information: "", actual: 250.00, forecasted: 300.00 },
  { category: "Transport", status: "Paid", details: "Bus transfer from Tirana Airport to Marigona and vice versa", information: "", actual: 800.00, forecasted: 700.00 },
  { category: "Transport", status: "Paid", details: "Administrative costs and license fees", information: "", actual: 45.00, forecasted: 0 },
  { category: "Transport", status: "Paid", details: "Travel - Michele Chiappalone", information: "", actual: 496.80, forecasted: 0 },
  { category: "Transport", status: "Paid", details: "Travel - Matthieu Nicolas Renaud Simon", information: "", actual: 400.04, forecasted: 0 },
  { category: "Transport", status: "Paid", details: "Train Ticket PSR- AOI", information: "", actual: 167.20, forecasted: 0 },

  // Venue
  { category: "Venue", status: "Paid", details: "Accommodation - Singe & Double Rooms", information: "", actual: 9012.71, forecasted: 9735.00 },

  // Workshop
  { category: "Workshop", status: "Paid", details: "Reservation of Gege & Toska Ballroom", information: "", actual: 1144.06, forecasted: 1000.00 },

  // Food and beverage
  { category: "Food and beverage", status: "Paid", details: "Dinners in Sheraton Hotel", information: "", actual: 2881.77, forecasted: 6225.00 },
  { category: "Food and beverage", status: "Paid", details: "Lunches in Sheraton Hotel", information: "", actual: 3750.00, forecasted: 4125.00 },
  { category: "Food and beverage", status: "Paid", details: "Drinks Menu in Sheraton Hotel", information: "", actual: 1000.00, forecasted: 1500.00 },
  { category: "Food and beverage", status: "Paid", details: "Coffee break snacks and coffee breaks", information: "", actual: 1050.00, forecasted: 1100.00 },
  { category: "Food and beverage", status: "Paid", details: "Extras in Sheraton Hotel", information: "", actual: 135.17, forecasted: 0 },
  { category: "Food and beverage", status: "Paid", details: "Gala Night Dinner and Ballroom in Courtyard by Marriott Hotel", information: "", actual: 4788.14, forecasted: 5475.00 },
  { category: "Food and beverage", status: "Paid", details: "Food and beverage supply and tables for rent", information: "", actual: 824.75, forecasted: 1500.00 },
  { category: "Food and beverage", status: "Paid", details: "Drinks", information: "", actual: 197.35, forecasted: 0 },
  { category: "Food and beverage", status: "Paid", details: "Antinori franciacorta", information: "", actual: 1425.51, forecasted: 0 },
  { category: "Food and beverage", status: "Paid", details: "Wine - Elephant Cabernet Sauvignon", information: "", actual: 308.64, forecasted: 0 },
  { category: "Food and beverage", status: "Paid", details: "Ice holder", information: "", actual: 91.47, forecasted: 0 },
  { category: "Food and beverage", status: "Paid", details: "SHE Red and White wines", information: "", actual: 86.86, forecasted: 0 },

  // Leisure activities
  { category: "Leisure activities", status: "Paid", details: "Musical performance", information: "", actual: 560.00, forecasted: 500.00 },
  { category: "Leisure activities", status: "Paid", details: "Photography services", information: "", actual: 1600.00, forecasted: 1500.00 },
  { category: "Leisure activities", status: "Paid", details: "Sound system setup & DJ", information: "", actual: 550.00, forecasted: 500.00 },

  // Tech
  { category: "Tech", status: "Paid", details: "Camera system for livestreaming on 20-22 January 2026", information: "", actual: 508.48, forecasted: 500.00 },
  { category: "Tech", status: "Paid", details: "Services with technical equipment for sound, lighting, stage, and LED screen.", information: "", actual: 1271.19, forecasted: 2000.00 },

  // Gadgets
  { category: "Gadgets", status: "Paid", details: "Printed hoodies, roll-up with mechanism, poster printing, pens", information: "", actual: 994.24, forecasted: 800.00 },
  { category: "Gadgets", status: "Paid", details: "Gadgets - Hyjnesha ne front", information: "", actual: 305.08, forecasted: 2200.00 },
  { category: "Gadgets", status: "Paid", details: "Stickers and postcards", information: "", actual: 42.37, forecasted: 0 },
  { category: "Gadgets", status: "Paid", details: "Markers", information: "", actual: 16.44, forecasted: 0 },
  { category: "Gadgets", status: "Paid", details: "Administrative materials", information: "", actual: 59.11, forecasted: 100.00 },
  { category: "Gadgets", status: "Paid", details: "Winner red medals", information: "", actual: 10.59, forecasted: 0 },

  // Speakers
  { category: "Speakers", status: "Paid", details: "Keynote Speech", information: "", actual: 4294.79, forecasted: 0 },
  { category: "Speakers", status: "Confirmed", details: "Daniel Knapp - Speaker", information: "", actual: 2000.00, forecasted: 0 },
];

export const garbData = {
  keep: [
    { title: "Networking", desc: "High energy from cross-office connection." },
    { title: "Gala Night", desc: "Remains the top-rated highlight." },
    { title: "Internal Workshops", desc: "Learning about other departments (Creative,AI and Chris session) is very valued." },
    { title: "Round Tables", desc: "Very effective for engagement; keep this format." },
    { title: "External Insight", desc: "Mike Pegg and Matthieu Simon provided great future trends." },
    { title: "Founder Stories", desc: "Sharing company values is vital for new joiners." }
  ],
  improve: [
    { title: "Practicality", desc: "Focus on concrete AI use cases, not just theory." },
    { title: "National Mixing", desc: "Increase intentional room/table mixing for office integration." },
    { title: "Communication", desc: "Improve transfer updates, especially for satellite teams (Pescara)." },
    { title: "Work Slots", desc: "Schedule time for urgent client work to avoid burnout." },
    { title: "Prep", desc: "Send technical materials in advance to help attendees follow along." },
    { title: "Agenda Timing", desc: "Several mentions of the agenda being \"too intensive\" with not enough free time to handle urgent client work or recharge." }
  ],
  stop: [
    { title: "Forced Fun", desc: "Stop mandatory dances/chants; they cause awkwardness and feel \"forced.\"" },
    { title: "Dietary Requirements (High Priority)", desc: "This was the most significant negative feedback. Multiple attendees with lactose intolerance or gluten allergies reported having almost nothing to eat or feeling unwell." },
    { title: "Gadget Quality", desc: "Stop using low-quality gear; hoodie prints washed off and sizes were wrong." },
    { title: "Food Quality/Quantity", desc: "Beyond allergies, the general consensus was that dinner portions were small and repetitive." },
    { title: "Exhaustion", desc: "Stop back-to-back 3-day intensities; add recovery time." },
    { title: "Repetitive Music", desc: "Stop playing the same high-volume songs; it becomes unbearable." }
  ],
  dream: [
    { title: "Mixed Rooming/Seating", desc: "Proactively mix Italian and Kosovar colleagues in hotel rooms or assigned seating to force deeper integration." },
    { title: "Industry Masterclasses", desc: "Bringing in external global experts for \"technical refreshers\" specifically in Creative and Marketing fields." },
    { title: "Cultural Spotlights", desc: "A dedicated session to showcase the diverse traditions and stories from the different nationalities in the company." },
    { title: "The \"Great Outdoors\"", desc: "Adding shared team activities that take place entirely outside (nature walks, physical challenges, or city-wide scavenger hunts)." },
    { title: "Pre-Summit Learning Packs", desc: "Sending \"Prep Kits\" (videos/articles) in advance to flip the classroom and jump straight into advanced topics." },
    { title: "Line Manager Involvement", desc: "Involve managers in the agenda-building process 1–2 months earlier so the narrative feels \"co-owned\" rather than \"top-down.\"" }
  ]
};
