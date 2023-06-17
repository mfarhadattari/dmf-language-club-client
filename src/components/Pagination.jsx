const Pagination = ({ totalPage, currentPage, setCurrentPage }) => {
  const allPages = [...Array(totalPage)].map((_, index) => index + 1);
  return (
    <div className="flex justify-center items-center">
      <div className="join">
        <button
          className="join-item btn btn-square"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          «
        </button>
        {allPages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            key={page}
            className={`join-item btn btn-square ${
              page === currentPage ? "bg-blue-500 text-white" : ""
            }`}
          >
            {page}
          </button>
        ))}
        <button
          className="join-item btn btn-square"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPage}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;
