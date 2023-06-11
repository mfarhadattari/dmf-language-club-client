import { Oval } from "react-loader-spinner";

const PrimaryBtn = ({ onClick, children, disabled, loading }) => {
  const loader = (
    <>
      <Oval
        height={25}
        width={25}
        color="white"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="blue"
        strokeWidth={10}
        strokeWidthSecondary={10}
      />
    </>
  );
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="btn btn-outline text-blue-600 border-2 hover:bg-blue-600 hover:text-white hover:border-0 w-full"
    >
      {loading && loader}
      {children}
    </button>
  );
};

export default PrimaryBtn;
