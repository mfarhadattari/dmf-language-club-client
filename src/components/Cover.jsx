const Cover = ({ bgImage, heading }) => {
  console.log(bgImage);
  return (
    <div className={`hero h-[400px] ${bgImage} bg-fixed my-10`}>
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-fit mx-auto">
          <div className="my-5 text-center">
            <h1 className="text-5xl uppercase w-fit mx-auto border-b-4 p-3 border-blue-600">
              {heading}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cover;
