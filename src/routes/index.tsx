import { createFileRoute, Link } from "@tanstack/react-router";
import heroMap from "@/assets/hero-map.jpg";
import { ArrowRight, Sprout, Globe2, Users } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Columbian Exchange — Home" },
      { name: "description", content: "An overview of the Columbian Exchange: the transfer of plants, animals, people, and disease between the Old and New Worlds after 1492." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="relative min-h-[80vh] flex items-center overflow-hidden">
        <img src={heroMap} alt="Antique world map of the Atlantic" className="absolute inset-0 w-full h-full object-cover opacity-60" width={1600} height={900} />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-secondary font-semibold mb-4">A World Transformed · 1492</p>
            <h1 className="font-serif text-5xl md:text-7xl font-semibold leading-[1.05] text-foreground">
              When two worlds met, everything changed.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground font-serif leading-relaxed max-w-xl">
              The Columbian Exchange was the vast transfer of plants, animals, peoples, cultures, technologies, and diseases between the Americas, Europe, Africa, and Asia following Christopher Columbus's 1492 voyage. It reshaped every continent on Earth.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/causes" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition">
                Begin the journey <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/references" className="inline-flex items-center px-6 py-3 rounded-md border border-border hover:bg-muted transition font-medium">
                View sources
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Sprout, title: "New Foods", text: "Potatoes, maize, and tomatoes from the Americas reshaped diets across Europe, Africa, and Asia, fueling population booms." },
            { icon: Users, title: "New Peoples", text: "Voluntary and forced migrations — including the Atlantic slave trade — moved millions across the ocean, remaking societies." },
            { icon: Globe2, title: "New Diseases", text: "Smallpox, measles, and influenza devastated Indigenous populations, who had no immunity to Old World pathogens." },
          ].map((c) => (
            <div key={c.title} className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition">
              <c.icon className="w-8 h-8 text-secondary mb-4" />
              <h3 className="font-serif text-2xl font-semibold mb-3">{c.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16 prose-history">
        <h2 className="font-serif text-4xl mb-6 text-primary">An Introduction</h2>
        <p className="drop-cap">
          On October 12, 1492, the Genoese navigator Christopher Columbus made landfall in the Bahamas, opening a sustained connection between the Eastern and Western Hemispheres that had been separated for tens of thousands of years. The historian Alfred W. Crosby coined the term "Columbian Exchange" in 1972 to describe the sweeping biological and cultural transfer that followed. Few events in human history have had so profound or lasting an impact.
        </p>
        <p>
          What began as a quest for trade routes to Asia became the foundation of the modern global economy. Spanish, Portuguese, English, French, and Dutch ships crisscrossed the Atlantic, carrying crops, livestock, manufactured goods, people, and microbes. The consequences — for diets, demographics, ecosystems, and empires — continue to shape our world today.
        </p>
      </section>
    </>
  );
}
