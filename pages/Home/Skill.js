import Fade from "react-reveal/Fade";
export default function Skill() {
  return (
    <>
      <section className=" xs:h-screen ">
        <div className="grid grid-cols-1 justify-items-center  ">
          <Fade bottom delay={500}>
            <div className=" container  grid justify-items-center mt-20">
              <h1 className=" font-bold text-indigo-900 mt-2 text-2xl dark:text-white">
                MY Top Skills
              </h1>
            </div>
          </Fade>
        </div>
        <div className="grid sm:grid-cols-4 xs:grid-cols-2 justify-items-center sm:gap-8 xs:gap-4 mt-16 sm:ml-24 sm:mr-24">
          <Fade buttom delay={500}>
            <img
              src="../images/skill/codeigniter-2.svg"
              className="rounded-xl w-24 h-32 "
            />
          </Fade>
          <Fade buttom delay={1000}>
            <img
              src="../images/skill/laravel-1.svg"
              className="rounded-xl w-24 h-32 "
            />
          </Fade>
          <Fade buttom delay={1500}>
            <img
              src="../images/skill/bootstrap-5-1.svg"
              className="rounded-xl w-24 h-32 "
            />
          </Fade>
          <Fade buttom delay={2000}>
            <img
              src="../images/skill/tailwindcss.svg"
              className="rounded-xl w-24 h-32 "
            />
          </Fade>
          <Fade buttom delay={2500}>
            <img
              src="../images/skill/jquery-4.svg"
              className="rounded-xl w-24 h-32 mt-5"
            />
          </Fade>
          <Fade buttom delay={3000}>
            <img
              src="../images/skill/react-2.svg"
              className="rounded-xl w-24 h-32 mt-5"
            />
          </Fade>
          <Fade buttom delay={3500}>
            <img
              src="../images/skill/mysql-3.svg"
              className="rounded-xl w-24 h-32 mt-5"
            />
          </Fade>
          <Fade buttom delay={4000}>
            <img
              src="../images/skill/next-js.svg"
              className="rounded-xl w-24 h-32 mt-5"
            />
          </Fade>
        </div>
      </section>
    </>
  );
}
