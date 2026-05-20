import { createFileRoute } from "@tanstack/react-router";
import { ColumbianMap } from "@/components/ColumbianMap";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/map")({
  head: () => ({
    meta: [
      { title: "Interactive Map — The Columbian Exchange" },
      { name: "description", content: "Explore key locations of the Columbian Exchange on an interactive world map." },
    ],
  }),
  component: MapPage,
});

function MapPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <div className="flex items-center gap-3 mb-3">
        <MapPin className="w-6 h-6 text-secondary" />
        <p className="text-xs uppercase tracking-[0.25em] text-secondary font-semibold">Atlas</p>
      </div>
      <h1 className="font-serif text-5xl font-semibold mb-4">An Interactive Map</h1>
      <p className="text-muted-foreground font-serif text-lg leading-relaxed mb-10 max-w-2xl">
        Click each marker to explore the cities, settlements, and ports that defined the Columbian Exchange. The red line traces Columbus's first transatlantic voyage of 1492.
      </p>
      <ColumbianMap />
    </section>
  );
}
