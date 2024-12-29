import React from "react";
import Layout from "./../Components/Layout";
import { Link } from "react-router-dom";

const Experiance = () => {
  return (
    <div>
      <Layout>
        <div className="h-screen">
          <div className="w-full  items-center py-16 border-b text-gray-300 border-gray-700">
            <div className="w-full text-center">
              <h1 className="md:text-4xl text-2xl font-bold mb-4">
                1+ Years of Experiance
              </h1>
              <div className="w-full flex justify-center">
                <p className="md:text-base text-sm md:w-2/3 font-semibold">
                  The experience section of a resume details your work history,
                  showcasing the roles you’ve held and the skills you’ve gained.
                  It typically includes the company name, job title, dates of
                  employment, and a brief description of your responsibilities
                  and accomplishments in each position.
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
            Experiance
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
                RentYard - Search Your Next Home
                <span className="md:block hidden bg-Primary text-gray-200 text-sm font-medium me-2 px-2.5 py-0.5 rounded ms-3">
                  Currently Working
                </span>
              </h3>
              <time className="block mb-2 text-base py-4 font-semibold  leading-none text-gray-300">
                From April 2024
              </time>
              <p className="mb-4 text-base font-normal text-gray-300">
                RentYard offers seamless property management with tools for
                managing leases, handling maintenance issues, and processing
                payments all in one place. Its intuitive design ensures
                efficient operations and enhanced communication between
                landlords and tenants.
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
                Attractive UI
              </h3>
              <time className="block mb-2 text-base py-4 font-semibold  leading-none text-gray-300">
                From February - April 2024
              </time>
              <p className="mb-4 text-base font-normal text-gray-300">
                Attactive UI is an agency with a group of Great Experienced
                Designer who are working for different clients/agencies to solve
                their UI/UX design solutions (e.g., Web Design, Logo Design,
                Dashboard Design, Landing Page, Mobile App and so on)!
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
                Perseptron (Intern)
              </h3>
              <time className="block mb-2 text-base py-4 font-semibold  leading-none text-gray-300">
                From November 2023 - February 2024
              </time>
              <p className="mb-4 text-base font-normal text-gray-300">
                By embracing the spirit of continuous improvement and learning,
                we aim to provide cutting-edge software solutions that empower
                businesses to achieve their goals. Join us on this exciting
                journey as we leverage the power of AI and technology to create
                a smarter, more efficient future!
              </p>
            </li>
          </ol>
        </div>
      </Layout>
    </div>
  );
};

export default Experiance;
