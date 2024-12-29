import ProjectCategory from "./components/ProjectCategory";
import Project from "./components/Project";
import Layout from "./../Components/Layout";
import { useState } from "react";
import { products } from "./components/ProjectData";
import { Link } from "react-router-dom";

// Categories derived from the product data
const categories = ["All", "RentYard", "Perceptron", "Freelance", "Others"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter products based on selected category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <Layout>
      <div className="w-full  items-center py-16 border-b text-gray-300 border-gray-700">
        <div className="w-full text-center">
          <h1 className="md:text-4xl text-2xl font-bold mb-4">Portfolio</h1>
          <div className="w-full flex justify-center">
            <p className="md:text-base text-sm md:w-2/3 font-semibold">
              A portfolio is a collection of work samples that showcases your
              skills, achievements, and experience. It is often used by creative
              professionals such as designers, writers, and photographers but
              can be useful in any field to demonstrate your capabilities.
            </p>
          </div>
          <Link to={"https://www.upwork.com/freelancers/~01ada6a2c4fc72d2d3"}>
            <button className="px-4 py-2 text-lg bg-Primary rounded-lg mt-8">
              <i className="fa-solid fa-paper-plane pe-1" /> Hire Me
            </button>
          </Link>
        </div>
      </div>
      <div className="h-full">
        <ProjectCategory
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Project products={filteredProducts} />
      </div>
    </Layout>
  );
};

export default Projects;
