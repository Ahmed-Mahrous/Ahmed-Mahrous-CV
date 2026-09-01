import type { Metadata } from "next";
import { PrintCv } from "@/components/print-cv";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "CV · Ahmed Mahrous",
  description:
    "Printable CV for Ahmed Mahrous, Flutter developer at Epic Systems.",
};

export default function CvPage() {
  return (
    <>
      <SiteHeader />
      <PrintCv />
    </>
  );
}
