import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
export default function navbar() {
  function showHome() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  function showAbout() {
    window.scrollTo({
      top: 600,
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
      top: 1600,
      behavior: "smooth",
    });
  }
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
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  // When the user clicks on the button, scroll to the top of the document

  return (
    <>
      {showButton && (
        <button
          id="myBtn"
          title="Go to top"
          className="fixed bottom-4 md:block xs:hidden right-6 z-50 border font-bold text-white  bg-indigo-900 px-2 py-2 rounded-full"
          onClick={showHome}
        >
          <BsArrowUp />
        </button>
      )}
      <section className="xs:hidden md:block">
        <nav className="flex items-center justify-between flex-wrap dark:bg-gray-900 bg-white p-6 border dark:border-none shadow-lg font-sans ">
          <div className="flex-1 items-center flex-shrink-0 text-white md:ml-20 ">
            <p className="font-bold text-xl text-indigo-900 dark:text-white">
              N.Pro
              <span className="font-bold text-xl text-indigo-700 dark:text-indigo-500">
                ject
              </span>
            </p>
          </div>
          <div className="flex">
            <button
              className="cursor-pointer md:hidden mr-2"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Image src={src} width={25} height={25} />
            </button>
            <button
              className=" inline-flex p-3  hover:bg-indigo-700 rounded lg:hidden dark:text-white text-slate-800 ml-auto hover:text-slate-900 outline-none"
              onClick={handleClick}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div
            className={`${
              active ? "" : "hidden"
            }   ustify-items-center w-full md:block md:w-auto mr-20`}
          >
            <ul className="flex flex-col  mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium ">
              <li>
                <Link href="/#home">
                  <a
                    className="font-medium text-indigo-900 hover:text-indigo-700 hover:underline dark:text-white dark:hover:text-slate-400"
                    onClick={showHome}
                  >
                    Home
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/#About">
                  <a
                    className="font-medium text-indigo-900 hover:text-indigo-700 hover:underline dark:text-white dark:hover:text-slate-400"
                    onClick={showAbout}
                  >
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#project">
                  <a
                    className="font-medium text-indigo-900 hover:text-indigo-700 hover:underline dark:text-white dark:hover:text-slate-400"
                    onClick={showProject}
                  >
                    Project
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/#skill">
                  <a
                    className="font-medium text-indigo-900 hover:text-indigo-700 hover:underline dark:text-white dark:hover:text-slate-400"
                    onClick={showSkill}
                  >
                    Skill
                  </a>
                </Link>
              </li>
              <li>
                <div
                  className="cursor-pointer sm:block xs:hidden"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <Image src={src} width={25} height={25} />
                </div>
              </li>
              <li className="sm:mt-0 xs:mt-6">
                <Link href="/About">
                  <a className="font-medium text-white sm:ml-4    bg-indigo-900 hover:bg-indigo-700 shadow-lg rounded-xl px-6 py-2 ">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
}
