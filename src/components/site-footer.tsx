import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/cv";

export function SiteFooter() {
  return (
    <footer id="contact" className="no-print">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-heading text-2xl tracking-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Flutter developer and Scrum Master in {profile.location}. Epic
            Systems · Rafiqi.{" "}
            <a className="underline-offset-2 hover:underline" href={profile.phoneHref}>
              {profile.phone}
            </a>
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button nativeButton={false} render={<a href={`mailto:${profile.email}`} />}>
            <Mail data-icon="inline-start" />
            {profile.email}
          </Button>
        </div>
      </div>
    </footer>
  );
}
