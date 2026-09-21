import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { playbookSections } from "../playbook-data";

export const metadata: Metadata = {
  title: "AOS Work Playbook",
  description:
    "The AOS Work Playbook, rebuilt as a section-by-section playbook guide.",
};

export default function PlaybookRedirectPage() {
  redirect(`/bluebook/${playbookSections[0].id}`);
}
