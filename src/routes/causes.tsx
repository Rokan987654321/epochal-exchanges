import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/SiteLayout";
import img from "@/assets/causes.jpg";

export const Route = createFileRoute("/causes")({
  head: () => ({
    meta: [
      { title: "The Causes — The Columbian Exchange" },
      { name: "description", content: "Why did European powers cross the Atlantic? Explore the technological, economic, and political causes of the Columbian Exchange." },
    ],
  }),
  component: Causes,
});

function Causes() {
  return (
    <>
      <PageHero eyebrow="Part I" title="The Causes of an Exchange" image={img} />
      <article className="max-w-3xl mx-auto px-6 py-16 prose-history">
        <p className="drop-cap">
          The Columbian Exchange did not begin with a single voyage; it emerged from centuries of converging forces. By the late fifteenth century, European kingdoms — particularly Portugal and the newly unified Spain — possessed the wealth, motivation, and maritime technology necessary to sail beyond familiar waters. The fall of Constantinople to the Ottoman Empire in 1453 disrupted overland trade with Asia, pushing merchants to seek alternative sea routes to the lucrative spice markets of the East.
        </p>

        <h2 className="font-serif text-3xl text-primary mt-10 mb-4">Technological Breakthroughs</h2>
        <p>
          The development of the caravel — a small, highly maneuverable sailing ship — allowed Iberian sailors to navigate Atlantic winds and currents. Advances in cartography, the magnetic compass, the astrolabe, and the quadrant gave captains tools to determine latitude and chart their position far from shore. Without these technologies, sustained transatlantic travel would have been impossible.
        </p>

        <h2 className="font-serif text-3xl text-primary mt-10 mb-4">Economic Hunger</h2>
        <p>
          Spices, silk, gold, and silver drove European exploration. Portuguese expeditions down the African coast, sponsored by Prince Henry the Navigator, established a pattern of state-backed exploration aimed at bypassing Mediterranean middlemen. When Columbus proposed sailing west to reach Asia, the Spanish monarchs Ferdinand and Isabella saw an opportunity to leapfrog Portuguese gains.
        </p>

        <h2 className="font-serif text-3xl text-primary mt-10 mb-4">Religion and Empire</h2>
        <p>
          The Reconquista — the centuries-long campaign to expel Muslim rule from Iberia — ended in 1492, the same year Columbus set sail. Spain emerged with militarized religious zeal and a tradition of conquest. The expansion of Christianity provided ideological justification for empire, while the prospect of new subjects and tribute fueled royal ambition. These motivations, layered upon technological capacity and economic need, made the Columbian Exchange not merely possible but inevitable.
        </p>
      </article>
    </>
  );
}
