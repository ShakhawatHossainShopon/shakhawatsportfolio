import PorjectCard from "./PorjectCard";
const Project = ({ products }) => {
  console.log(products);

  return (
    <div className="grid md:grid-cols-2 grid-cols-1  py-12 gap-4">
      {products.map((value, index) => {
        return <PorjectCard data={value} key={index} />;
      })}
    </div>
  );
};

export default Project;
