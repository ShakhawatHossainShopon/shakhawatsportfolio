import { Link } from "react-router-dom";
import Card from "./Card";
import { cardData } from "./Data";
const CardSection = () => {
  return (
    <div>
      <div className="my-8">
        <h2 className="w-full p-2 border-l-[8px] border-green-600 text-2xl font-semibold">
          What I Do
        </h2>
        <p className="text-lg py-4">
          I have more than 1 years experience building Web Applications for
          clients and Companies. Below is a quick overview of my main technical
          skill sets and technologies I use. Want to find out more about my
          experience? Check out my
          <span>
            <Link
              to={
                "https://drive.google.com/file/d/1Up-OT2rr31EqZ81OhVCZ4k1uYUFa06az/view?usp=drive_link"
              }
              className="text-Primary font-semibold underline px-1"
            >
              online resume
            </Link>
          </span>
          and{" "}
          <Link
            to={"/projects"}
            className="text-Primary font-semibold underline px-1"
          >
            project portfolio.
          </Link>{" "}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 py-6">
        {cardData.map((value, index) => {
          return <Card key={index} data={value} />;
        })}
      </div>
    </div>
  );
};

export default CardSection;
