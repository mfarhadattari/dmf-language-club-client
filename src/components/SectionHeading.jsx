const SectionHeading = ({ heading }) => {
  return (
    <div className="my-5 text-center">
      <h1 className="text-4xl w-fit mx-auto border-b-4 p-3 border-blue-600">
        {heading}
      </h1>
    </div>
  );
};

export default SectionHeading;
