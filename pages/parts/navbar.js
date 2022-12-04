import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function navbar() {
  // When the user clicks on the button, scroll to the top of the document
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

  return (
    <>
      <nav className=" justify-between  flex px-4 py-4 ">
        <div className="flex-initial w-40 text-left ml-6">
          <h1 className="font-bold text-2xl dark:text-white text-[#404258] font-poppins">
            N.Pro<span className="dark:text-white text-[#404258]">Ject</span>
          </h1>
        </div>
        <div className="flex-initial w-auto sm:block xs:hidden">
          <ul className="flex  py-2">
            <Link href="/">
              <li className=" mr-20 font-poppins font-semibold text-[#404258] dark:text-white hover:text-slate-500 cursor-pointer hover:underline">
                Home
              </li>
            </Link>
            <Link href="/service">
              <li className="mr-20 font-poppins font-semibold text-[#404258] dark:text-white hover:text-slate-500 cursor-pointer hover:underline">
                About
              </li>
            </Link>
            <Link href="/Product">
              <li className="mr-20 font-poppins font-semibold text-[#404258] dark:text-white hover:text-slate-500 cursor-pointer hover:underline">
                Project
              </li>
            </Link>
            <Link href="/About">
              <li className="mr-20 font-poppins font-semibold text-[#404258] dark:text-white hover:text-slate-500 cursor-pointer hover:underline">
                Contact
              </li>
            </Link>
            <div
              className="cursor-pointer hover:scale-110"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Image src={src} width={25} height={25} />
            </div>
          </ul>
        </div>
        <div className="flex-initial w-auto mr-6"></div>
      </nav>
    </>
  );
}
