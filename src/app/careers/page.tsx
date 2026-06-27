import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers  -  IT & Software Jobs in Jabalpur, Madhya Pradesh",
  description:
    "Join Siddhya Technology's growing team in Jabalpur, MP. We're hiring software engineers, designers, and IT professionals. Build your career at Jabalpur's leading tech company.",
  keywords: [
    "IT jobs Jabalpur",
    "software developer jobs Jabalpur",
    "tech jobs Madhya Pradesh",
    "developer jobs MP",
    "IT careers Jabalpur",
    "software engineer jobs Jabalpur",
    "careers Siddhya Technology",
  ],
  alternates: { canonical: "https://siddhyatechnology.in/careers" },
};

export default function CareersPage() {
  return <CareersClient />;
}
