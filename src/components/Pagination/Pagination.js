import "./Pagination.scss";

const Pagination = ({ page, pages, setPage }) => {
  return (
    <div className="pagination">
      <button onClick={() => setPage(0)} disabled={page === 0}>
        first
      </button>

      <button onClick={() => setPage(page - 1)} disabled={page <= 0}>
        &lt;
      </button>

      <span>
        {page + 1}/{pages}
      </span>

      <button onClick={() => setPage(page + 1)} disabled={page >= pages - 1}>
        &gt;
      </button>

      <button onClick={() => setPage(pages - 1)} disabled={page === pages - 1}>
        last
      </button>
    </div>
  );
};

export default Pagination;
