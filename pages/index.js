import Head from "next/head";

import Navbar from "./parts/navbar";
import Navbuttom from "./parts/Navbuttom";
import Hero from "./Home/Hero";
import Introduction from "./Home/Introduction";
import Myproject from "./Home/Myproject";
import Skill from "./Home/Skill";
import { ThemeProvider } from "next-themes";

export default function index() {
  return (
    <>
      <ThemeProvider attribute="class">
        <Head>
          <title>Portofolio</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-white dark:bg-gradient-to-br dark:from-[#042b68] dark:via-[#050d22] dark:to-[#04204f]">
          <Navbuttom />
          <Navbar />
          <Hero />
          <Introduction />
          <Myproject />
          <Skill />
        </body>
      </ThemeProvider>
    </>
  );
}
