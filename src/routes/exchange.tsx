import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/SiteLayout";
import img from "@/assets/exchange.jpg";

export const Route = createFileRoute("/exchange")({
  head: () => ({
    meta: [
      { title: "The Exchange — Plants, Animals, People, Disease" },
      { name: "description", content: "What crossed the Atlantic? A detailed look at the plants, animals, people, and diseases exchanged between the Old and New Worlds." },
    ],
  }),
  component: Exchange,
});

const oldToNew = ["Wheat", "Rice", "Sugarcane", "Coffee", "Bananas", "Horses", "Cattle", "Pigs", "Sheep", "Smallpox", "Measles", "Influenza"];
const newToOld = ["Maize (Corn)", "Potatoes", "Tomatoes", "Cacao", "Tobacco", "Peppers", "Beans", "Pineapples", "Turkeys", "Vanilla", "Quinine", "Rubber"];

function Exchange() {
  return (
    <>
      <PageHero eyebrow="Part II" title="The Great Exchange" image={img} />
      <article className="max-w-3xl mx-auto px-6 py-16 prose-history">
        <p className="drop-cap">
          The flow of living things across the Atlantic after 1492 was the most consequential biological event since the end of the last Ice Age. Within a few generations, species that had evolved in isolation on separate continents were transplanted thousands of miles, reshaping landscapes, diets, and disease environments on every populated continent.
        </p>
        <p>
          The Americas gave the world maize and the potato — two crops so productive that they fueled population booms from Ireland to China. Tomatoes transformed Italian cuisine; chili peppers became indispensable in Indian, Thai, and Sichuan cooking. Cacao, vanilla, and tobacco became global commodities. None of these foods had existed in Europe, Africa, or Asia before 1492.
        </p>
        <p>
          Europe and Africa sent wheat, rice, sugarcane, bananas, and coffee to the Americas — along with horses, cattle, pigs, sheep, and goats. The horse, in particular, revolutionized Indigenous life on the Great Plains. Sugar plantations in the Caribbean and Brazil drove a brutal demand for enslaved African labor, making the Atlantic slave trade one of the darkest dimensions of the exchange.
        </p>
      </article>

      <section className="max-w-5xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-lg p-8">
            <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-2">Old World → New World</p>
            <h3 className="font-serif text-2xl mb-5">From Europe, Africa, and Asia</h3>
            <ul className="grid grid-cols-2 gap-y-2 text-muted-foreground font-serif text-lg">
              {oldToNew.map((x) => <li key={x}>· {x}</li>)}
            </ul>
          </div>
          <div className="bg-card border border-border rounded-lg p-8">
            <p className="text-xs uppercase tracking-widest text-secondary font-semibold mb-2">New World → Old World</p>
            <h3 className="font-serif text-2xl mb-5">From the Americas</h3>
            <ul className="grid grid-cols-2 gap-y-2 text-muted-foreground font-serif text-lg">
              {newToOld.map((x) => <li key={x}>· {x}</li>)}
            </ul>
          </div>
        </div>

        <article className="prose-history max-w-3xl mx-auto mt-16">
          <h2 className="font-serif text-3xl text-primary mb-4">The Microbial Catastrophe</h2>
          <p>
            The most devastating element of the exchange was invisible. Old World diseases — smallpox, measles, influenza, typhus, and malaria — found populations in the Americas with no inherited immunity. Within a century of contact, scholars estimate that 80 to 90 percent of the Indigenous population of the Americas perished, a demographic collapse without parallel in recorded human history. This catastrophe enabled European conquest and reshaped the political map of two continents.
          </p>
        </article>
      </section>
    </>
  );
}
