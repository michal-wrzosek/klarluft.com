import { StyledComponentsRegistry } from "@/lib/registry";
import { Metadata } from "next";
import "@/styles/global.css";

export const metadata: Metadata = {
  title: "Klarluft - Software Engineering Services",
  description: "Software Engineering Services",
  openGraph: {
    title: "Klarluft",
    description: "Software Engineering Services",
    url: "https://klarluft.com",
    images: [
      {
        url: "https://klarluft.com/klarluft.png",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  themeColor: "#ffffff",
  metadataBase: new URL("https://klarluft.com"),
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
