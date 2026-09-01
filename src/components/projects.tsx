import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { projects, type Project } from "@/data/cv";

const filters = [
  { id: "all", label: "All" },
  { id: "epic", label: "Epic Systems" },
  { id: "rafiqi", label: "Rafiqi" },
  { id: "freelance", label: "Freelance / Personal" },
] as const;

export type ProjectFilter = (typeof filters)[number]["id"];

export function parseProjectFilter(value: unknown): ProjectFilter {
  const raw = Array.isArray(value) ? value[0] : value;
  if (raw === "epic" || raw === "rafiqi" || raw === "freelance") {
    return raw;
  }
  return "all";
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col bg-card/80">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div>
            <CardTitle className="text-xl">
              {project.name}
              {project.arabicName ? (
                <span className="ml-2 text-base font-normal text-muted-foreground">
                  {project.arabicName}
                </span>
              ) : null}
            </CardTitle>
            <CardDescription className="mt-1">
              {project.company} · {project.year}
            </CardDescription>
          </div>
          {project.featured ? (
            <Badge className="shrink-0">Featured</Badge>
          ) : null}
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm leading-6 text-foreground/85">{project.summary}</p>
        <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
          {project.highlights.slice(0, 3).map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/80" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.map((item) => (
            <Badge key={item} variant="secondary" className="font-normal">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
      {project.links?.length ? (
        <CardFooter className="flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-8 items-center gap-1 rounded-lg border border-border px-2.5 text-sm hover:bg-muted"
            >
              {link.label}
              <ArrowUpRight className="size-3.5" />
            </a>
          ))}
        </CardFooter>
      ) : null}
    </Card>
  );
}

export function Projects({ filter }: { filter: ProjectFilter }) {
  const visible =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="scroll-mt-20 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          Projects
        </p>
        <h2 className="font-heading mt-2 text-3xl tracking-tight sm:text-4xl">
          Apps I have shipped
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          TrackN, Cashy, CRMNT, Family Doctor, QudraaTech, Espressolab EG, and
          Adlifiy at Epic Systems; two Rafiqi learning apps; QuickCart and the
          dog social marketplace on the side.
        </p>
        <div className="mt-8 flex flex-wrap gap-2" aria-label="Filter projects">
          {filters.map((item) => {
            const selected = filter === item.id;
            const href =
              item.id === "all" ? "/#projects" : `/?filter=${item.id}#projects`;
            return (
              <Link
                key={item.id}
                href={href}
                aria-current={selected ? "page" : undefined}
                className={cn(
                  "inline-flex h-8 items-center rounded-full border px-3 text-sm font-medium transition-colors",
                  selected
                    ? "border-transparent bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground hover:bg-muted"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Showing {visible.length}{" "}
          {visible.length === 1 ? "project" : "projects"}
          {filter === "all"
            ? ""
            : ` · ${filters.find((item) => item.id === filter)?.label}`}
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        {visible.length === 0 ? (
          <p className="mt-8 text-sm text-muted-foreground">
            No projects in this filter.
          </p>
        ) : null}
      </div>
    </section>
  );
}
