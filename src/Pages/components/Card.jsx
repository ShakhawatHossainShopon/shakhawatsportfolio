const Card = ({ data }) => {
  const { img } = data;
  const { heading } = data;
  const { paragraph } = data;
  console.log(img);

  return (
    <div>
      <div className="flex">
        <div className="w-8 flex gap-4 rounded-sm">
          {img.map((value, index) => {
            return (
              <img
                className="w-full rounded-sm"
                src={value.image}
                key={index}
                alt="img"
              />
            );
          })}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold pt-4 pb-2">{heading}</h3>
        <p className="text-sm">{paragraph}</p>
      </div>
    </div>
  );
};

export default Card;
