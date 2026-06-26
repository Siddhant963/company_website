import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Siddhya Technology - IT Company in Jabalpur",
    short_name: "Siddhya Tech",
    description:
      "Jabalpur's leading IT company - Software Development, ERPNext, Digital Marketing & Cloud Solutions.",
    start_url: "/",
    display: "standalone",
    background_color: "#1a237e",
    theme_color: "#1a237e",
    icons: [
      {
        src: "/screen.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
