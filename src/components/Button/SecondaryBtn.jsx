const SecondaryBtn = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="btn bg-blue-600 text-white border-0 hover:bg-white hover:text-blue-600 hover:border-2 hover:border-blue-600 w-full"
    >
      {children}
    </button>
  );
};

export default SecondaryBtn;
