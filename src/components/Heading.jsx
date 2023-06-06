import icon from "/icon.png";

const Heading = () => {
  return (
    <div className="flex flex-col items-center font-bebas-neue w-fit">
      <div className="flex items-center gap-2">
        <img src={icon} className="w-12 h-12" alt="" />
        <h1 className="text-5xl font-bebas-neue">DMF</h1>
      </div>
      <h1 className="text-xl font-bebas-neue uppercase">Language Club</h1>
    </div>
  );
};

export default Heading;
