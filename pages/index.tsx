import Head from "next/head";
import { Homepage } from "../components/homepage";
import { GlobalStyle } from "../styles/global-styles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Klarluft - Software Engineering Services</title>
        <meta property="og:title" content="Klarluft" />
        <meta
          property="og:description"
          content="Software Engineering Services"
        />
        <meta property="og:image" content="https://klarluft.com/klarluft.png" />
        <meta property="og:url" content="https://klarluft.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,300;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <Homepage />
    </>
  );
}
