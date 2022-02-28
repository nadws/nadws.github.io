import React from "react";
import { BsFillFileEarmarkPersonFill, BsFillGrid1X2Fill } from "react-icons/bs";
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { useTheme } from "next-themes";
import Image from "next/image";
export default function Navbuttom() {
  const { theme, setTheme } = useTheme();

  const { resolvedTheme } = useTheme();
  let src;

  switch (resolvedTheme) {
    case "light":
      src = "/images/sunny.png";
      break;
    case "dark":
      src = "/images/moon3.png";
      break;
    default:
      src =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      break;
  }

  function showHome() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  function showAbout() {
    window.scrollTo({
      top: 400,
      behavior: "smooth",
    });
  }
  function showProject() {
    window.scrollTo({
      top: 1000,
      behavior: "smooth",
    });
  }
  function showSkill() {
    window.scrollTo({
      top: 4100,
      behavior: "smooth",
    });
  }
  return (
    <>
      <section className="md:hidden xs:block  fixed inset-x-0 bottom-0 z-10 shadow">
        <nav className="flex items-center justify-center  bottom-2 flex-wrap  p-6  ">
          <div className="border rounded-full py-4 px-6 grid grid-cols-5 gap-8 sm:gap-20  bg-gray-900 text-3xl sm:text-5xl text-slate-300">
            <div className="cursor-pointer hover:scale-110" onClick={showHome}>
              <AiFillHome />
            </div>
            <div className="cursor-pointer hover:scale-110" onClick={showAbout}>
              <BsFillFileEarmarkPersonFill />
            </div>
            <div
              className="cursor-pointer hover:scale-110"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Image src={src} width={25} height={25} />
            </div>
            <div
              className="cursor-pointer hover:scale-110"
              onClick={showProject}
            >
              <AiFillProject />
            </div>
            <div className="cursor-pointer hover:scale-110" onClick={showSkill}>
              <BsFillGrid1X2Fill />
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}
