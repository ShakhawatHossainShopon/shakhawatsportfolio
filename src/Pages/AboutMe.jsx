import Layout from "./../Components/Layout";
import img from "../assets/profile.png";
import CardSection from "./components/CardSection";
import { Link } from "react-router-dom";
const AboutMe = () => {
  return (
    <div>
      <Layout>
        <div className="h-full text-gray-300">
          <div className="w-full xl:grid grid-cols-1 md:grid-cols-2  items-center py-16 border-b border-gray-400">
            <div>
              <h1 className="md:text-4xl text-2xl font-semibold mb-4">
                Shakhawat Hossain
              </h1>
              <h3 className="md:text-xl text-xl mb-4">
                Web Developer & UI/UX Designer
              </h3>
              <p className="md:text-base text-sm">
                Passionate Web developer adept at crafting robust digital
                solutions. Enthusiastic about pushing boundaries and creating
                engaging user experiences.Want to know how I may help your
                project? Check out my{" "}
                <Link
                  to={"/projects"}
                  className="text-Primary font-semibold underline px-1"
                >
                  project portfolio.
                </Link>{" "}
                and{" "}
                <Link
                  to={
                    "https://drive.google.com/file/d/1C8uQ4t7MmrGcgk-KPlreomz6RAUUWCyX/view?usp=drive_link"
                  }
                  className="text-Primary font-semibold underline px-1"
                >
                  online resume.
                </Link>{" "}
              </p>
              <div className="flex gap-5 my-8">
                <Link to={"/projects"}>
                  <button className="md:py-2 md:px-4 px-3 py-2 text-xs md:text-base  bg-Primary cursor-pointer rounded-md hover:bg-green-600 duration-500 font-semibold">
                    <i className="fa-solid fa-diagram-project pe-1 hover:bg-green-600 duration-500"></i>{" "}
                    View Portfolio
                  </button>
                </Link>
                <Link
                  to={
                    "https://drive.google.com/file/d/1U9FYxkorEg9gc2d6fm4Kp42c2Z8pfbLJ/view?usp=sharing"
                  }
                >
                  <button className="md:py-2 md:px-4 px-3 py-2  text-xs md:text-base bg-Primary cursor-pointer rounded-md hover:bg-green-600 duration-500 font-semibold">
                    <i className="fa-regular fa-file pe-1 hover:bg-green-600 duration-500"></i>{" "}
                    View Resume
                  </button>
                </Link>
              </div>
            </div>
            <div className="rounded-lg flex justify-center lg:hidden xl:flex">
              <img src={img} className="w-72 rounded-lg" />
            </div>
          </div>

          <CardSection />
        </div>
      </Layout>
    </div>
  );
};

export default AboutMe;
