import { Oval } from "react-loader-spinner";

const SecondaryBtn = ({ onClick, children, loading, type, disabled }) => {
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
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="btn bg-blue-600 text-white border-0 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 w-full"
    >
      {loading && loader}
      {children}
    </button>
  );
};

export default SecondaryBtn;
