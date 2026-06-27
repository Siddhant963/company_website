import type { Metadata } from "next";
import OurWorkClient from "./OurWorkClient";

export const metadata: Metadata = {
  title: "Our Work & Portfolio  -  50+ Projects Delivered | Jabalpur IT Company",
  description:
    "Explore Siddhya Technology's portfolio of 50+ delivered projects  -  mobile apps, SaaS platforms, ERPNext implementations, and enterprise software for clients across Jabalpur, Madhya Pradesh and India.",
  keywords: [
    "IT portfolio Jabalpur",
    "software projects Madhya Pradesh",
    "ERP projects India",
    "tech company portfolio Jabalpur",
    "mobile app portfolio MP",
    "software case studies Jabalpur",
  ],
  alternates: { canonical: "https://siddhyatechnology.in/our-work" },
};

export default function OurWorkPage() {
  return <OurWorkClient />;
}
