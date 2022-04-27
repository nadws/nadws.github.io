import Fade from "react-reveal/Fade";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Hero() {
  function showMostPicked() {
    window.scrollTo({
      top: 600,
      behavior: "smooth",
    });
  }
  const { resolvedTheme } = useTheme();
  let email;

  switch (resolvedTheme) {
    case "light":
      email = "/icon/email.svg";
      break;
    case "dark":
      email = "/icon/email2.png";
      break;
    default:
      email =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      break;
  }
  let github;

  switch (resolvedTheme) {
    case "light":
      github = "/icon/github.svg";
      break;
    case "dark":
      github = "/icon/github.png";
      break;
    default:
      github =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      break;
  }
  let instagram;

  switch (resolvedTheme) {
    case "light":
      instagram = "/icon/instagram.svg";
      break;
    case "dark":
      instagram = "/icon/instagram2.png";
      break;
    default:
      instagram =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      break;
  }
  let hero;

  switch (resolvedTheme) {
    case "light":
      hero = "/images/img-hero2.png";
      break;
    case "dark":
      hero = "/images/img-hero2.png";
      break;
    default:
      hero =
        "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
      break;
  }
  return (
    <>
      <section className="mb-2">
        <div className="grid  sm:grid-cols-2 xs:grid-cols-1   sm:gap-4 xs:gap-1  h-screen">
          <Fade right>
            <div className="grid  justify-items-center sm:hidden xs:block ">
              <div className="mt-20 ">
              
                <Image src={hero} width={400} height={400} />
              </div>
            </div>
          </Fade>
          <Fade left>
            <div className="ml-24 xs:ml-6  sm:mt-20 xs:mt-0 sm:ml-20 sm:mr-20">
              <h1 className=" font-bold text-indigo-900 sm:mt-20 xs:mt-2 sm:text-3xl xs:text-2xl dark:text-white font-poppins">
                Hi, I am
              </h1>
              <h1 className=" font-bold text-indigo-700 mt-2 sm:text-6xl xs:text-4xl dark:text-slate-300 font-poppins">
                Nanda Wahyudi
              </h1>
              <h1 className=" font-bold text-indigo-800 mt-2 text-3xl dark:text-white font-poppins">
                Web Developer
              </h1>
              <div className="mt-7">
                <a href="" className="mr-4 hover:w-96">
                  <Image src={email} width={40} height={40} />
                </a>
                <a href="https://github.com/nadws" className="mr-4">
                  <Image src={github} width={40} height={40} />
                </a>
                <a href="" className="mr-4">
                  <Image src={instagram} width={40} height={40} />
                </a>
              </div>
              <button
                type="button"
                className="bg-indigo-900 hover:bg-indigo-700 text-center mt-16 xs:hidden sm:block text-white rounded-lg font-medium px-5 py-2.5 shadow-2xl"
                onClick={showMostPicked}
              >
                Hire Me
              </button>
            </div>
          </Fade>
          <Fade right>
            <div className="mr-6  justify-items-center mt-14 hidden sm:block">
              <div className=" grid place-content-center ">
                <Image src={hero} width={500} height={500} />
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
}
