import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "IT Services  -  Software, ERP, Cloud & Digital Marketing in Jabalpur",
  description:
    "Complete IT services in Jabalpur, MP: Custom Software Development, ERPNext Implementation, Mobile Apps, Cloud Infrastructure, Digital Marketing, AI/ML & Managed IT. Serving businesses Pan-India.",
  keywords: [
    "software development services Jabalpur",
    "ERPNext implementation Jabalpur",
    "ERP services Madhya Pradesh",
    "digital marketing services Jabalpur",
    "mobile app development Jabalpur",
    "cloud consulting Jabalpur",
    "AI ML services Jabalpur",
    "managed IT services Jabalpur",
    "web development services Jabalpur",
    "IT services MP",
  ],
  alternates: { canonical: "https://siddhyatechnology.in/services" },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
