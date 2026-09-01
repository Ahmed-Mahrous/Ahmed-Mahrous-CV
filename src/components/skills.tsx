import { Badge } from "@/components/ui/badge";
import { courses, education, languages, skillGroups } from "@/data/cv";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-b border-border/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          Skills
        </p>
        <h2 className="font-heading mt-2 text-3xl tracking-tight sm:text-4xl">
          What I work with
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Production Flutter stack from Epic Systems and Rafiqi, plus Firebase,
          live location, and the design skills I still use on freelance work.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-border/70 bg-card p-5"
            >
              <h3 className="text-sm font-semibold tracking-wide uppercase">
                {group.title}
              </h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <Badge key={item} variant="secondary" className="font-normal">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          id="education"
          className="mt-12 grid gap-6 scroll-mt-20 lg:grid-cols-[0.9fr_1.4fr_0.7fr]"
        >
          <div className="rounded-2xl border border-border/70 bg-card p-5">
            <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">
              Education
            </h3>
            {education.map((item) => (
              <div key={item.school} className="mt-3">
                <p className="font-medium">{item.degree}</p>
                <p className="text-sm text-muted-foreground">{item.school}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.years} · {item.detail}
                </p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-border/70 bg-card p-5">
            <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">
              Courses
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {courses.map((item) => (
                <li key={item.name}>
                  <span className="font-medium">{item.name}</span>
                  <span className="text-muted-foreground"> · {item.issuer}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border/70 bg-card p-5">
            <h3 className="text-sm font-semibold tracking-wide text-primary uppercase">
              Languages
            </h3>
            {languages.map((item) => (
              <p key={item.name} className="mt-3 text-sm">
                <span className="font-medium">{item.name}</span>
                <span className="text-muted-foreground"> · {item.level}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
