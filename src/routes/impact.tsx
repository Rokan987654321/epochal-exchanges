import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/SiteLayout";
import img from "@/assets/impact.jpg";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Global Impact — The Columbian Exchange" },
      { name: "description", content: "The long-term demographic, economic, ecological, and cultural impact of the Columbian Exchange on the modern world." },
    ],
  }),
  component: Impact,
});

function Impact() {
  return (
    <>
      <PageHero eyebrow="Part III" title="A World Remade" image={img} />
      <article className="max-w-3xl mx-auto px-6 py-16 prose-history">
        <p className="drop-cap">
          The Columbian Exchange did not end in the sixteenth century. Its consequences cascaded across centuries, producing the demographic, economic, and ecological foundations of the modern world. Understanding its legacy is essential to understanding why nations, cuisines, and ecosystems look the way they do today.
        </p>

        <h2 className="font-serif text-3xl text-primary mt-10 mb-4">Demographic Revolution</h2>
        <p>
          American crops sustained extraordinary population growth in the Old World. The potato alone is credited with adding hundreds of millions of people to Europe. In China, maize and sweet potatoes allowed cultivation of previously marginal land, contributing to a population that tripled between 1500 and 1800. Meanwhile, the catastrophic loss of Indigenous Americans created a labor vacuum that European empires filled by transporting an estimated 12 million enslaved Africans across the Atlantic — the largest forced migration in history.
        </p>

        <h2 className="font-serif text-3xl text-primary mt-10 mb-4">The Birth of Global Trade</h2>
        <p>
          Silver mined at Potosí in modern Bolivia flowed through Spain to Asia in exchange for Chinese silk and porcelain, creating the first truly global economy. Plantation agriculture in the Americas — producing sugar, tobacco, cotton, and coffee — generated immense wealth that helped finance the Industrial Revolution. Capitalism as we know it is in many ways a child of the Columbian Exchange.
        </p>

        <h2 className="font-serif text-3xl text-primary mt-10 mb-4">Ecological Transformation</h2>
        <p>
          European livestock multiplied rapidly in the Americas, transforming grasslands and displacing native species. Old World weeds, rats, and insects arrived as invisible stowaways and spread across two continents. In the opposite direction, American plants reshaped landscapes from Italian tomato fields to Irish potato patches. Few ecosystems on Earth remain untouched by this great mixing.
        </p>

        <h2 className="font-serif text-3xl text-primary mt-10 mb-4">A Contested Legacy</h2>
        <p>
          The Columbian Exchange brought new foods and global connection, but it also delivered conquest, slavery, and the destruction of civilizations. Historians today emphasize both dimensions: the long arc of biological and cultural integration, and the human cost paid disproportionately by Indigenous peoples and enslaved Africans. To study the Columbian Exchange is to confront the foundations of the modern world — and the unequal terms on which it was built.
        </p>
      </article>
    </>
  );
}
