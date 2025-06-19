import React from "react";
import Layout from "../Components/Layout";
import { Link } from "react-router-dom";

const Education = () => {
  return (
    <div>
      <Layout>
        <div className="h-screen">
          <div className="w-full  items-center py-16 border-b text-gray-300 border-gray-700">
            <div className="w-full text-center">
              <h1 className="md:text-4xl text-2xl font-bold mb-4">
                My Education
              </h1>
              <div className="w-full flex justify-center">
                <p className="md:text-base text-sm md:w-2/3 font-semibold">
                  Your education section on a resume highlights your academic
                  background and any relevant qualifications. It typically
                  includes the names of schools or universities you've attended,
                  degrees or certifications earned, graduation dates, and any
                  honors or notable achievements
                </p>
              </div>
              <Link
                to={"https://www.upwork.com/freelancers/~01ada6a2c4fc72d2d3"}
              >
                {" "}
                <button className="px-4 py-2 text-lg bg-Primary rounded-lg mt-8">
                  <i className="fa-solid fa-paper-plane pe-1" /> Hire Me
                </button>
              </Link>
            </div>
          </div>
          <h2 className="mt-8 mb-10  text-gray-300 font-semibold text-2xl">
            Education
          </h2>
          <ol className="relative border-s-2 border-gray-400 ">
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-Secondary rounded-full -start-3 ring-8 ring-third">
                <svg
                  className="w-2.5 h-2.5 text-gray-50"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="ml-3 flex items-center mb-1 text-2xl font-semibold text-gray-300">
                Dhaka College ( BSC )
                <span className="md:block hidden bg-Primary text-gray-200 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">
                  Currently Studying
                </span>
              </h3>
              <time className="block mb-2 text-base py-4 font-semibold  leading-none text-gray-300">
                From June 2022
              </time>
              <p className="mb-4 text-base font-normal text-gray-300">
                Dhaka College, founded in 1841, is one of the oldest and most
                respected educational institutions in Bangladesh. Located in
                Dhaka, it offers a variety of programs in science, humanities,
                and business. Known for its academic excellence, the college has
                produced many prominent leaders and professionals. With modern
                facilities and a vibrant student community, Dhaka College
                remains a key institution in shaping the country's future.
              </p>
            </li>

            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-Secondary rounded-full -start-3 ring-8 ring-third">
                <svg
                  className="w-2.5 h-2.5 text-gray-50"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="flex items-center mb-1 ml-3 text-2xl font-semibold text-gray-300">
                Birshreshtha Munshi Abdur Rouf Public College ( HSC )
              </h3>

              <p className="mb-4 text-base font-normal text-gray-300">
                The first Digitalized and one of the largest & most renowned
                college of Bangladesh, located at the lush green campus of BGB
                Head Quarters in Peelkhana.
              </p>
            </li>

            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-6 h-6 bg-Secondary rounded-full -start-3 ring-8 ring-third">
                <svg
                  className="w-2.5 h-2.5 text-gray-50"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </span>
              <h3 className="flex items-center mb-1 ml-3 text-2xl font-semibold text-gray-300">
                Birshreshtha Munshi Abdur Rouf Public College ( SSC )
              </h3>

              <p className="mb-4 text-base font-normal text-gray-300">
                The first Digitalized and one of the largest & most renowned
                college of Bangladesh, located at the lush green campus of BGB
                Head Quarters in Peelkhana.
              </p>
            </li>
          </ol>
        </div>
      </Layout>
    </div>
  );
};

export default Education;
