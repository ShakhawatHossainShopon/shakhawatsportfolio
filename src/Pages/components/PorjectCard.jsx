import { Link } from "react-router-dom";
import rentyard from "../../assets/rentyard.png";

const PorjectCard = ({ data }) => {
  return (
    <>
      <Link
        to={`/projectDetails/${data?.id}`}
        className="w-full relative mb-4 group flex flex-col items-center bg-white border border-gray-200 rounded-sm shadow md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-fit w-full rounded-t-lg h-full  md:w-48 md:rounded-none md:rounded-s-lg"
          src={data?.image}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl underline font-semibold tracking-tight text-gray-900 dark:text-gray-300">
            {data?.title}
          </h5>
          <p className="mb-3 font-normal text-xs text-gray-700 dark:text-gray-400">
            {data?.paragraph}
          </p>
        </div>
        <div className="absolute md:flex gap-2 space-y-2 md:space-y-0 inset-0 hover:bg-gray-200 hover:bg-opacity-20 hover:backdrop-blur-sm  rounded-lg transition duration-300">
          <Link
            to={`/projectDetails/${data?.id}`}
            className="px-4 py-2.5 transition-all duration-500 bg-Secondary font-semibold rounded-md hidden group-hover:block absolute bottom-6 left-6"
          >
            <i className="fa-solid fa-eye me-1"></i> View Case Study
          </Link>
        </div>
      </Link>
    </>
  );
};

export default PorjectCard;
