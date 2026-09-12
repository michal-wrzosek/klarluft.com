"use client";

import { GlobalStyle } from "@/styles/global-styles";
import { Hero } from "@/components/site/hero";
import { GitWarren } from "@/components/site/gitwarren";
import { Work } from "@/components/site/work";
import { Studio } from "@/components/site/studio";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

export default function Page() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <main>
        <GitWarren />
        <Work />
        <Studio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
