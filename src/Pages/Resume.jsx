import React from "react";
import Layout from "./../Components/Layout";
import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <div>
      <Layout>
        <div className="h-screen">
          <div className="w-full  items-center py-16 border-b text-gray-300 border-gray-700">
            <div className="w-full text-center">
              <h1 className="md:text-4xl text-2xl font-bold mb-4">My Resume</h1>
              <div className="w-full flex justify-center">
                <p className="md:text-base text-sm md:w-2/3 font-semibold">
                  A resume is a professional document that provides a summary of
                  a person's qualifications, skills, work experience, and
                  educational background. It serves as a key tool for job
                  seekers, allowing them to showcase their strengths and
                  achievements to potential employers.
                </p>
              </div>
              <div className="mt-8">
                <Link
                  to={
                    "https://drive.google.com/file/d/1Up-OT2rr31EqZ81OhVCZ4k1uYUFa06az/view?usp=drive_link"
                  }
                  className="px-4 py-2 text-lg bg-Primary rounded-lg mt-8 hover:bg-green-700"
                >
                  <i className="fa-solid fa-file"></i> View Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Resume;
