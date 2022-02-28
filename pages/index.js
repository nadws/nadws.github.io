import Head from "next/head";

import Navbar from "./parts/navbar";
import Navbuttom from "./parts/Navbuttom";
import Hero from "./Home/Hero";
import Introduction from "./Home/Introduction";
import Myproject from "./Home/Myproject";
import Skill from "./Home/Skill";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <>
      <ThemeProvider attribute="class">
        <Head>
          <title>Portofolio</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>

        <Navbuttom />
        <Navbar />
        <Hero />
        <Introduction />
        <Myproject />
        <Skill />
      </ThemeProvider>
    </>
  );
}
