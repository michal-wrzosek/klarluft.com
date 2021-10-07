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

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#000000" />
        <meta name="msapplication-TileColor" content="#00a300" />
        <meta name="theme-color" content="#ffffff"></meta>

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
