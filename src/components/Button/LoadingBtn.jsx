import { Oval } from "react-loader-spinner";

const LoadingBtn = ({ children, loading, type }) => {
  const loader = (
    <>
      <Oval
        height={25}
        width={25}
        color="white"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="white"
        strokeWidth={10}
        strokeWidthSecondary={10}
      />
    </>
  );
  return (
    <button
      className="btn bg-blue-600 text-white hover:bg-blue-800"
      type={type}
    >
      {loading && loader}
      {children}
    </button>
  );
};

export default LoadingBtn;
