const ProjectCategory = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}) => {
  console.log(selectedCategory);

  return (
    <div className="flex justify-center pt-8">
      <div className="flex gap-8">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={` py-1 transition duration-300 font-semibold text-lg text-gray-200 hover:text-gray-400
              ${
                selectedCategory === category
                  ? " border-t-2 border-Primary text-Primary"
                  : "border-t-2 border-Secondary"
              }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProjectCategory;
