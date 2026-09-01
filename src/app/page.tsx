import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { parseProjectFilter, Projects } from "@/components/projects";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Skills } from "@/components/skills";

export default async function Home({ searchParams }: PageProps<"/">) {
  const params = await searchParams;
  const filter = parseProjectFilter(params.filter);

  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Experience />
        <Projects filter={filter} />
        <Skills />
      </main>
      <SiteFooter />
    </>
  );
}
