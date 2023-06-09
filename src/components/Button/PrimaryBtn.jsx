const PrimaryBtn = ({ onClick, children, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="btn btn-outline text-blue-600 border-2 hover:bg-blue-600 hover:text-white hover:border-0 w-full"
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
