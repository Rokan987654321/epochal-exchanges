import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink, BookOpen } from "lucide-react";

export const Route = createFileRoute("/references")({
  head: () => ({
    meta: [
      { title: "References — The Columbian Exchange" },
      { name: "description", content: "Works cited and sources used in the study of the Columbian Exchange." },
    ],
  }),
  component: References,
});

const sources = [
  {
    author: "Crosby, Alfred W.",
    title: "The Columbian Exchange: Biological and Cultural Consequences of 1492",
    pub: "Greenwood Publishing, 1972 (30th Anniversary Edition, Praeger, 2003).",
    note: "The foundational scholarly work that coined the term 'Columbian Exchange.'",
    url: "https://www.britannica.com/event/Columbian-exchange",
  },
  {
    author: "Mann, Charles C.",
    title: "1493: Uncovering the New World Columbus Created",
    pub: "Alfred A. Knopf, 2011.",
    note: "A sweeping survey of how the post-1492 exchange built today's global economy.",
    url: "https://www.charlesmann.org/books/1493/",
  },
  {
    author: "Nunn, Nathan and Nancy Qian.",
    title: "\"The Columbian Exchange: A History of Disease, Food, and Ideas.\"",
    pub: "Journal of Economic Perspectives, vol. 24, no. 2, Spring 2010, pp. 163–188.",
    note: "Peer-reviewed economic analysis of the exchange's demographic effects.",
    url: "https://www.aeaweb.org/articles?id=10.1257/jep.24.2.163",
  },
  {
    author: "National Geographic Society.",
    title: "\"The Columbian Exchange.\"",
    pub: "National Geographic Education, 2023.",
    note: "Encyclopedia entry covering the biological and cultural transfers after 1492.",
    url: "https://education.nationalgeographic.org/resource/columbian-exchange/",
  },
  {
    author: "Library of Congress.",
    title: "\"1492: An Ongoing Voyage.\"",
    pub: "Library of Congress Exhibitions.",
    note: "Primary-source exhibition documenting the era of contact.",
    url: "https://www.loc.gov/exhibits/1492/",
  },
];

function References() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20">
      <div className="flex items-center gap-3 mb-3">
        <BookOpen className="w-6 h-6 text-secondary" />
        <p className="text-xs uppercase tracking-[0.25em] text-secondary font-semibold">Bibliography</p>
      </div>
      <h1 className="font-serif text-5xl font-semibold mb-4">Works Cited</h1>
      <p className="text-muted-foreground font-serif text-lg leading-relaxed mb-12 max-w-2xl">
        The following scholarly and educational sources informed the content of this site.
      </p>

      <ol className="space-y-8">
        {sources.map((s, i) => (
          <li key={i} className="border-l-2 border-secondary pl-6 py-1">
            <p className="font-serif text-xl text-foreground">
              <span className="font-semibold">{s.author}</span> <em>{s.title}</em> {s.pub}
            </p>
            <p className="text-muted-foreground text-sm mt-2">{s.note}</p>
            <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-2 text-sm text-primary hover:underline">
              View source <ExternalLink className="w-3 h-3" />
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
