import Fade from "react-reveal/Fade";
import Typical from "react-typical";

export default function Hero() {
  return (
    <>
      <section className="mb-2 mt-4">
        <div className="flex justify-center sm:grid-cols-1 xs:grid-cols-1   sm:gap-1 xs:gap-1  h-screen">
          <Fade left>
            <div>
              <h1 className=" font-extrabold text-[#404258] text-center mt-2 sm:text-4xl xs:text-4xl dark:text-slate-300 font-poppins">
                Hi, Iam NProject
              </h1>
              <h1 className=" font-extrabold text-[#404258] text-center mt-2 sm:text-4xl xs:text-4xl dark:text-slate-300 font-poppins">
                As
                <span className="text-[#CBA033]">
                  Web Developer & UI/UX Design
                </span>
              </h1>
              <div className="dark:flex hidden justify-center mt-2 ">
                <img src="../images/Facebook.svg" className="w-16 mr-2" />
                <img src="../images/Instagram.svg" className="w-16 mr-2" />
                <img src="../images/Github.svg" className="w-16 mr-2" />
              </div>
              <div className="flex justify-center mt-2 dark:hidden ">
                <img src="../images/Facebook2.svg" className="w-16 mr-2" />
                <img src="../images/Instagram2.svg" className="w-16 mr-2" />
                <img src="../images/Github2.svg" className="w-16 mr-2" />
              </div>

              <div className="flex justify-center mt-4">
                <img src="../fx-hero.png" className="h-72" />
              </div>
              <div className="flex justify-center mt-4">
                <div className="bg-[#404258] pt-4 pb-4 pr-16 pl-16 rounded-3xl font-poppins font-bold text-3xl text-white">
                  Hire Me
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
}
