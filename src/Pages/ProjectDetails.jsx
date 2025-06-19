import { Link, useParams } from "react-router-dom";
import Layout from "./../Components/Layout";
import { products } from "../Pages/components/ProjectData"; // Update the import path accordingly

const ProjectDetails = () => {
  const { id } = useParams(); // Access the project ID from the URL params
  const project = products.find((product) => product.id.toString() === id); // Find the project based on the ID

  if (!project) {
    return (
      <Layout>
        <div className="h-screen">
          {" "}
          <h1 className="text-white">Project not found</h1>
        </div>
      </Layout>
    );
  }

  return (
    <div>
      <Layout>
        <div>
          <div className="w-full  items-center py-16 border-b text-gray-300 border-gray-700">
            <div className="w-full text-center">
              <h1 className="md:text-4xl text-2xl font-bold mb-4">
                Case Study: {project.title}
              </h1>
              <div className="w-full flex justify-center">
                <p className="md:text-base text-sm md:w-2/3 font-semibold">
                  A portfolio is a collection of work samples that showcases
                  your skills, achievements, and experience. It is often used by
                  creative professionals such as designers, writers, and
                  photographers but can be useful in any field to demonstrate
                  your capabilities.
                </p>
              </div>
            </div>
          </div>

          <>
            <div className="flex gap-5">
              <Link to={project.LiveLink}>
                {" "}
                <button className="px-4 py-2 text-lg bg-Primary rounded-lg mt-8">
                  <i className="fa-solid fa-eye"></i> View Live
                </button>
              </Link>
              <Link to={project.github}>
                {" "}
                <button className="px-4 py-2 text-lg bg-blue-600 rounded-lg mt-8">
                  <i className="fa-brands fa-github pe-1" /> Codebase
                </button>
              </Link>
            </div>
            <main className="pt-6 pb-16 lg:pt-10 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
              <div className="flex justify-between px-4 mx-auto">
                <article className="mx-auto w-full format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
                  <header className="mb-4 lg:mb-6 not-format">
                    <h1 className="mb-4 text-2xl font-semibold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                      {project.title}
                    </h1>
                  </header>
                  <p className="lead">{project.paragraph}</p>

                  <figure>
                    <div className="rounded-2xl">
                      <img
                        src={project.image}
                        className="md:w-2/4 py-10 w-full"
                        alt=""
                      />
                    </div>
                  </figure>
                  <h2 className=" text-lg md:text-2xl font-semibold py-4">
                    Tecnology Used
                  </h2>
                  <p>{project.tecnology}</p>
                  <h2 className=" text-lg md:text-2xl font-semibold py-4">
                    Chalanges Faced
                  </h2>
                  <p>{project.chalanges}</p>
                  <h2 className=" text-lg md:text-2xl font-semibold py-4">
                    Summary
                  </h2>
                  <p>{project.summary}</p>
                </article>
              </div>
            </main>
          </>
        </div>
      </Layout>
    </div>
  );
};

export default ProjectDetails;
