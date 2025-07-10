import FlightCard from "./FlightCard ";


const flights = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/en/7/7e/US-Bangla_Airlines_logo.png",
    airline: "US Bangla",
    departureTime: "19:10",
    arrivalTime: "20:15",
    duration: "1h 5m",
    origin: "DAC",
    destination: "CXB",
    price: "BDT 4,918",
    oldPrice: "BDT 5,199",
    code: "DOMB0725",
  },
  {
    logo: "/src/assets/novoair.png",
    airline: "NOVOAIR",
    departureTime: "18:30",
    arrivalTime: "19:35",
    duration: "1h 5m",
    origin: "DAC",
    destination: "CXB",
    price: "BDT 4,797",
    oldPrice: "BDT 5,199",
    code: "NOVO1860",
  },
  {
    logo: "/src/assets/biman-bangla.jpeg",
    airline: "Biman Bangladesh Airlines",
    departureTime: "15:30",
    arrivalTime: "16:45",
    duration: "1h 15m",
    origin: "DAC",
    destination: "CXB",
    price: "BDT 5,747",
    oldPrice: "BDT 6,199",
    code: "BG1530",
  },
];

export default function FlightResultsList() {
  return (
    <div className="space-y-4">
      {flights.map((flight, index) => (
        <FlightCard key={index} flight={flight} />
      ))}
    </div>
  );
}
