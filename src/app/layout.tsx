import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Roboto } from "next/font/google";
import { StyledComponentsRegistry } from "@/lib/registry";

// The wordmark and every headline: Roboto Bold Italic, as in the logo.
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-roboto",
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const description =
  "The independent engineering studio behind GitWarren. Software for trading floors, power grids and patient records — Shell, Eneco, DZ Bank, Quin, WellSync.";

export const metadata: Metadata = {
  title: "Klarluft — Software engineering studio",
  description,
  openGraph: {
    title: "Klarluft",
    description,
    url: "https://klarluft.com",
    images: [{ url: "https://klarluft.com/klarluft.png" }],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#000000" }],
  },
  metadataBase: new URL("https://klarluft.com"),
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${roboto.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
