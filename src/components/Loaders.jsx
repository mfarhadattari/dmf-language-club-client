import { RotatingLines } from "react-loader-spinner";

const Loaders = () => {
  return (
    <div className="flex justify-center my-20">
      <RotatingLines
        strokeColor="black"
        strokeWidth="5"
        animationDuration="0.5"
        width="200"
        visible={true}
      />
    </div>
  );
};

export default Loaders;
