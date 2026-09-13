export interface ClientLogo {
  name: string;
  src: string;
  width: number;
  height: number;
  /** Rendered height on desktop, in px — set per logo so the wall reads at one optical weight. */
  size: number;
  /** Rendered height on phones. */
  phoneSize: number;
  /** The file is the brand's own colour; the page turns it white. */
  invert?: boolean;
}

export const clientLogos: ClientLogo[] = [
  { name: "Shell", src: "/logos/shell.svg", width: 150, height: 139, size: 46, phoneSize: 38 },
  { name: "Eneco", src: "/logos/eneco.svg", width: 152, height: 66, size: 36, phoneSize: 30 },
  { name: "DZ Bank", src: "/logos/dzbank.svg", width: 300, height: 48, size: 27, phoneSize: 22 },
  { name: "Quin", src: "/logos/quin.png", width: 661, height: 260, size: 34, phoneSize: 28, invert: true },
  { name: "WellSync", src: "/logos/wellsync.png", width: 720, height: 279, size: 44, phoneSize: 36 },
  { name: "Bitbond", src: "/logos/bitbond.png", width: 600, height: 160, size: 29, phoneSize: 24, invert: true },
];

export interface Engagement {
  client: string;
  years: string;
  sector: string;
  summary: string;
  stack: string[];
}

/** The two engagements that get the wide cards. */
export const featuredWork: Engagement[] = [
  {
    client: "Shell",
    years: "2020–2025",
    sector: "Energy trading",
    summary:
      "Intelligence for Shell's trading department: refinery margin calculations, voyage times for ships carrying crude, a refinery maintenance tool, and a long tail of instruments traders asked for by name.",
    stack: ["React", "GraphQL", "Node.js", "TypeScript", "Kubernetes", "Azure"],
  },
  {
    client: "Eneco",
    years: "2025–2026",
    sector: "Energy trading",
    summary:
      "An electricity imbalance tool for Eneco's trading department — one of the instruments the desk uses to keep supply and demand matched on the Dutch grid, settlement period by settlement period.",
    stack: ["Vue", "ECharts", "SignalR", "TypeScript", "Azure DevOps"],
  },
];

export const moreWork: Engagement[] = [
  {
    client: "WellSync",
    years: "2026–present",
    sector: "United States · Healthcare",
    summary: "An electronic medical records platform for the US healthcare market.",
    stack: ["React", "Next.js", "TypeScript"],
  },
  {
    client: "DZ Bank",
    years: "2021",
    sector: "Banking · via Bitbond",
    summary:
      "Reviewing Solidity contracts and running blockchain workshops for the bank, contracted through Bitbond.",
    stack: ["Solidity", "Ethereum", "Hardhat"],
  },
  {
    client: "Quin",
    years: "2022–2023",
    sector: "Healthcare",
    summary:
      "Video consultation between patients and their doctors, built for medical care in the Netherlands.",
    stack: ["React", "React Native", "WebRTC"],
  },
];
