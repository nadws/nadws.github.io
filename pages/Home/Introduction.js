import Fade from "react-reveal/Fade";
export default function Introduction() {
  return (
    <>
      <section className="bg-slate-50 dark:bg-gray-900">
        <div className="grid grid-cols-1 justify-items-center  ">
          <div className=" container grid  ">
            <Fade buttom delay={500}>
              <div className="mt-10 ">
                <h1 className=" font-bold text-indigo-900 mt-2 text-2xl text-center dark:text-white font-poppins">
                  About
                </h1>
                <h1 className=" font-semi-bold text-indigo-700 mt-2 text-2xl text-center dark:text-white font-poppins">
                  My Introduction
                </h1>
              </div>

              <div className="mt-5 mb-10">
                <p className="text-indigo-700 font-medium text-center dark:text-slate-300 font-poppins ">
                  My name is Nanda Wahyudi
                </p>
                <p className="text-indigo-700 font-medium text-center dark:text-slate-300 font-poppins">
                  i am from Banjarmasin, Indonesia.
                </p>
                <p className="text-indigo-700 font-medium text-center dark:text-slate-300 font-poppins">
                  I like to make website for personal and commercial projects.
                </p>
                <p className="text-indigo-700 font-medium text-center dark:text-slate-300 font-poppins">
                  And i hope we can work together on a project.
                </p>
                <p className="text-indigo-700 font-medium text-center dark:text-slate-300 font-poppins">
                  Thank You
                </p>
              </div>
            </Fade>
          </div>
        </div>
      </section>
    </>
  );
}
