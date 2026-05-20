import { createFileRoute } from "@tanstack/react-router";
import { Clock } from "lucide-react";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Timeline — The Columbian Exchange" },
      { name: "description", content: "A chronological timeline of the major events of the Columbian Exchange from 1492 onward." },
    ],
  }),
  component: TimelinePage,
});

const events = [
  { year: "1492", title: "Columbus's First Voyage", text: "On October 12, Columbus makes landfall in the Bahamas, beginning sustained contact between Europe and the Americas." },
  { year: "1493", title: "Second Voyage Brings Livestock", text: "Columbus returns with horses, cattle, pigs, sheep, and sugarcane — seeding Old World species across the Caribbean." },
  { year: "1494", title: "Treaty of Tordesillas", text: "Spain and Portugal divide the non-European world between them, formalizing the race for empire." },
  { year: "1518", title: "First Smallpox Epidemic", text: "Smallpox arrives in Hispaniola and begins to devastate Indigenous populations across the Americas." },
  { year: "1521", title: "Fall of Tenochtitlán", text: "Hernán Cortés, aided by disease and Indigenous allies, conquers the Aztec capital." },
  { year: "1532", title: "Conquest of the Inca", text: "Francisco Pizarro captures the Inca emperor Atahualpa, opening South America to Spanish silver mining." },
  { year: "1545", title: "Silver Discovered at Potosí", text: "The richest silver mountain in history begins fueling Spain's empire and global trade with China." },
  { year: "1565", title: "Manila Galleon Established", text: "Spanish ships begin a 250-year route connecting Acapulco and Manila, completing the global trade web." },
  { year: "1607", title: "Jamestown Founded", text: "England establishes its first permanent American colony; tobacco soon becomes the engine of its economy." },
  { year: "1619", title: "First Enslaved Africans in Virginia", text: "Twenty Africans arrive at Jamestown, marking the start of chattel slavery in English North America." },
  { year: "1769", title: "Potato Sustains Europe", text: "By the late 18th century, the American potato has become a staple crop across Europe, fueling population growth." },
  { year: "1845", title: "Irish Potato Famine", text: "A blight on Ireland's potato monocrop kills more than a million — a late, tragic echo of the exchange." },
];

function TimelinePage() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="flex items-center gap-3 mb-3">
        <Clock className="w-6 h-6 text-secondary" />
        <p className="text-xs uppercase tracking-[0.25em] text-secondary font-semibold">Chronology</p>
      </div>
      <h1 className="font-serif text-5xl font-semibold mb-4">Timeline of the Exchange</h1>
      <p className="text-muted-foreground font-serif text-lg leading-relaxed mb-12 max-w-2xl">
        Four centuries of voyages, conquests, and consequences.
      </p>

      <ol className="relative border-l-2 border-secondary/40 ml-3 space-y-10">
        {events.map((e) => (
          <li key={e.year} className="pl-8 relative">
            <span className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-secondary border-4 border-background" />
            <div className="font-serif text-3xl text-primary font-semibold">{e.year}</div>
            <h3 className="font-serif text-xl mt-1 mb-2">{e.title}</h3>
            <p className="text-muted-foreground leading-relaxed font-serif text-lg">{e.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
