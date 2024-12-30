import { Link } from "react-router-dom";
import img from "../assets/profile5.png";
const Sidebar = ({ toggle, onClick }) => {
  return (
    <>
      <div
        className={`col-span-2 bg-third text-gray-200 p-6 text-center h-[180vh] lg:h-full ${
          toggle ? "absolute z-50  h-[1200px] transition-all duration-700" : ""
        }
        `}
      >
        <div className="w-full text-right">
          <span
            onClick={onClick}
            className="text-3xl mx-4 mb-4 cursor-pointer lg:hidden block"
          >
            <i className="fa-solid fa-close mt-6"></i>
          </span>
        </div>

        <h2 className="text-2xl">Shakhawat Shopon</h2>
        <div className="w-full flex justify-center py-6">
          <img src={img} alt="Profile" className="rounded-full w-36" />
        </div>
        <p className="text-base">
          Frontend developer specializing in responsive UIs and performance
        </p>
        <div className="flex py-10 gap-3 w-full justify-center">
          <div>
            <Link to={"https://x.com/Shakhaw46588640"}>
              <span className="px-2 py-1.5 bg-Primary rounded-full hover:bg-green-600 cursor-pointer duration-500">
                <i className="fa-brands fa-twitter" />
              </span>
            </Link>
          </div>
          <div>
            <Link
              to={"https://www.linkedin.com/in/shakhawat-shopon-5b98a8259/"}
            >
              <span className="px-2 py-1.5 bg-Primary rounded-full hover:bg-green-600 cursor-pointer duration-500">
                <i className="fa-brands fa-linkedin" />
              </span>
            </Link>
          </div>
          <div>
            <Link to={"https://www.facebook.com/shopon.hossain.9615/"}>
              <span className="px-2 py-1.5 bg-Primary rounded-full hover:bg-green-600 cursor-pointer duration-500">
                <i className="fa-brands fa-facebook" />
              </span>
            </Link>
          </div>
          <div>
            <Link
              to={"https://github.com/ShakhawatHossainShopon?tab=repositories"}
            >
              <span className="px-2 py-1.5 bg-Primary rounded-full hover:bg-green-600 cursor-pointer duration-500">
                <i className="fa-brands fa-github" />
              </span>
            </Link>
          </div>
          <div>
            <Link to={"https://www.youtube.com/@ShakhawatShopon"}>
              <span className="px-2 py-1.5 bg-Primary rounded-full hover:bg-green-600 cursor-pointer duration-500">
                <i className="fa-brands fa-youtube" />
              </span>
            </Link>
          </div>
        </div>
        <div className="w-full text-start">
          <ul>
            <li className="mb-4">
              <Link
                to="/"
                className="hover:bg-gray-700 px-4 py-2 rounded flex items-center gap-3 text-lg"
              >
                <i className="fa-solid fa-user" /> About Me
              </Link>
            </li>
            <li className="mb-4">
              <Link
                to="/projects"
                className="hover:bg-gray-700 px-4 py-2 rounded flex items-center gap-3 text-lg"
              >
                <i className="fa-solid fa-diagram-project" /> Portfolio
              </Link>
            </li>

            <li className="mb-4">
              <Link
                to={"/experiances"}
                className="hover:bg-gray-700 px-4 py-2 rounded flex items-center gap-3 text-lg"
              >
                <i className="fa-solid fa-briefcase" /> Experices
              </Link>
            </li>
            <li>
              <Link
                to={"/education"}
                className="hover:bg-gray-700 px-4 py-2 rounded flex items-center gap-3 text-lg"
              >
                <i className="fa-solid fa-graduation-cap" /> Education
              </Link>
            </li>
            <li className="mb-4 mt-2">
              <Link
                to={"/resume"}
                className="hover:bg-gray-700 ml-1 px-4 py-2 rounded flex items-center gap-3 text-lg"
              >
                <i className="fa-solid fa-bars-progress" /> Resume
              </Link>
            </li>
          </ul>
        </div>
        <Link to={"https://www.upwork.com/freelancers/~01ada6a2c4fc72d2d3"}>
          {" "}
          <button className="px-4 py-2 text-lg bg-Primary rounded-lg mt-8">
            <i className="fa-solid fa-paper-plane pe-1" /> Hire Me
          </button>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;
