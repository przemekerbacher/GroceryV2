import React from "react";

const Pagination = ({ page, maxPage, setPage }) => {
  const pageNumber = parseInt(page);
  const maxPagesNumber = parseInt(maxPage);

  const handleChangePage = e => {
    e.preventDefault();
    setPage(parseInt(e.currentTarget.getAttribute("data-page")));
  };

  const onePage = () => (
    <li className="page-item active">
      <button
        className="btn page-link"
        onClick={handleChangePage}
        data-page={pageNumber}
      >
        {pageNumber}
      </button>
    </li>
  );

  const twoPages = () => {
    if (pageNumber === 1) {
      return (
        <>
          <li className="page-item active">
            <button
              className="btn page-link"
              onClick={handleChangePage}
              data-page={pageNumber}
            >
              {pageNumber}
            </button>
          </li>

          <li className="page-item">
            <button
              className="btn page-link"
              onClick={handleChangePage}
              data-page={pageNumber + 1}
            >
              {pageNumber + 1}
            </button>
          </li>
        </>
      );
    }

    if (pageNumber === 2)
      return (
        <>
          <li className="page-item">
            <button
              className="btn page-link"
              onClick={handleChangePage}
              data-page={pageNumber - 1}
            >
              {pageNumber - 1}
            </button>
          </li>

          <li className="page-item active">
            <button
              className="btn page-link"
              onClick={handleChangePage}
              data-page={pageNumber}
            >
              {pageNumber}
            </button>
          </li>
        </>
      );
  };

  const threePages = () => {
    if (pageNumber === 1)
      return (
        <>
          <li className="page-item active">
            <button
              className="btn page-link"
              onClick={handleChangePage}
              data-page={pageNumber}
            >
              {pageNumber}
            </button>
          </li>
          <li className="page-item">
            <button
              className="btn page-link"
              onClick={handleChangePage}
              data-page={pageNumber + 1}
            >
              {pageNumber + 1}
            </button>
          </li>
          <li className="page-item">
            <button
              className="btn page-link"
              onClick={handleChangePage}
              data-page={pageNumber + 2}
            >
              {pageNumber + 2}
            </button>
          </li>
        </>
      );

    if (pageNumber === 2)
      return (
        <>
          <li className="page-item">
            <button
              className="btn page-link"
              onClick={handleChangePage}
              data-page={pageNumber - 1}
            >
              {pageNumber - 1}
            </button>
          </li>
          <li className="page-item active">
            <button
              className="btn page-link"
              onClick={handleChangePage}
              data-page={pageNumber}
            >
              {pageNumber}
            </button>
          </li>
          <li className="page-item">
            <button
              className="btn page-link"
              onClick={handleChangePage}
              data-page={pageNumber + 1}
            >
              {pageNumber + 1}
            </button>
          </li>
        </>
      );

    if (pageNumber === 3)
      return (
        <>
          <li className="page-item">
            <button
              className="btn page-link"
              onClick={handleChangePage}
              data-page={pageNumber - 2}
            >
              {pageNumber - 2}
            </button>
          </li>
          <li className="page-item">
            <button
              className="btn page-link"
              onClick={handleChangePage}
              data-page={pageNumber - 1}
            >
              {pageNumber - 1}
            </button>
          </li>
          <li className="page-item active">
            <button
              className="btn page-link"
              onClick={handleChangePage}
              data-page={pageNumber}
            >
              {pageNumber}
            </button>
          </li>
        </>
      );
  };

  const moreThanThreePages = () => {
    if (pageNumber === 1) {
      return (
        <>
          <li className="page-item active">
            <button
              className="btn page-link"
              onClick={handleChangePage}
              data-page={pageNumber}
            >
              {pageNumber}
            </button>
          </li>
          <li className="page-item">
            <button
              className="btn page-link"
              onClick={handleChangePage}
              data-page={pageNumber + 1}
            >
              {pageNumber + 1}
            </button>
          </li>
          <li className="page-item">
            <button
              className="btn page-link"
              onClick={handleChangePage}
              data-page={pageNumber + 2}
            >
              {pageNumber + 2}
            </button>
          </li>
        </>
      );
    }

    return (
      <>
        <li className="page-item">
          <button
            className="btn page-link"
            onClick={handleChangePage}
            data-page={pageNumber - 1}
          >
            {pageNumber - 1}
          </button>
        </li>
        <li className="page-item active">
          <button
            className="btn page-link"
            onClick={handleChangePage}
            data-page={pageNumber}
          >
            {pageNumber}
          </button>
        </li>
        <li className="page-item">
          <button
            className="btn page-link"
            onClick={handleChangePage}
            data-page={pageNumber + 1}
          >
            {pageNumber + 1}
          </button>
        </li>
      </>
    );
  };

  const lastPage = () => {
    return (
      <>
        <li className="page-item">
          <button
            className="btn page-link"
            onClick={handleChangePage}
            data-page={pageNumber - 2}
          >
            {pageNumber - 2}
          </button>
        </li>
        <li className="page-item">
          <button
            className="btn page-link"
            onClick={handleChangePage}
            data-page={pageNumber - 1}
          >
            {pageNumber - 1}
          </button>
        </li>
        <li className="page-item active">
          <button
            className="btn page-link"
            onClick={handleChangePage}
            data-page={pageNumber}
          >
            {pageNumber}
          </button>
        </li>
      </>
    );
  };

  const paginationItem = () => {
    if (maxPagesNumber === 1) {
      return (
        <>
          <li className="page-item disabled">
            <button
              className="btn page-link "
              onClick={handleChangePage}
              aria-label="Previous"
              data-page={pageNumber - 1}
            >
              <span aria-hidden="true">&laquo;</span>
            </button>
          </li>
          {onePage()}
          <li className="page-item disabled">
            <button
              className="btn page-link"
              onClick={handleChangePage}
              aria-label="Next"
              data-page={pageNumber + 1}
            >
              <span aria-hidden="true">&raquo;</span>
            </button>
          </li>
        </>
      );
    }
    if (maxPagesNumber === 2) {
      if (pageNumber === 1) {
        return (
          <>
            <li className="page-item disabled">
              <button
                className="btn page-link "
                onClick={handleChangePage}
                aria-label="Previous"
                data-page={pageNumber - 1}
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            {twoPages()}
            <li className="page-item">
              <button
                className="btn page-link"
                onClick={handleChangePage}
                aria-label="Next"
                data-page={pageNumber + 1}
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </>
        );
      }
      if (pageNumber === 2) {
        return (
          <>
            <li className="page-item">
              <button
                className="btn page-link "
                onClick={handleChangePage}
                aria-label="Previous"
                data-page={pageNumber - 1}
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            {twoPages()}
            <li className="page-item disabled">
              <button
                className="btn page-link"
                onClick={handleChangePage}
                aria-label="Next"
                data-page={pageNumber + 1}
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </>
        );
      }
    }

    if (maxPagesNumber === 3) {
      if (pageNumber === 1) {
        return (
          <>
            <li className="page-item disabled">
              <button
                className="btn page-link "
                onClick={handleChangePage}
                aria-label="Previous"
                data-page={pageNumber - 1}
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            {threePages()}
            <li className="page-item">
              <button
                className="btn page-link"
                onClick={handleChangePage}
                aria-label="Next"
                data-page={pageNumber + 1}
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </>
        );
      }
      if (pageNumber === 2) {
        return (
          <>
            <li className="page-item">
              <button
                className="btn page-link "
                onClick={handleChangePage}
                aria-label="Previous"
                data-page={pageNumber - 1}
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            {threePages()}
            <li className="page-item">
              <button
                className="btn page-link"
                onClick={handleChangePage}
                aria-label="Next"
                data-page={pageNumber + 1}
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </>
        );
      }
      if (pageNumber === 3) {
        return (
          <>
            <li className="page-item">
              <button
                className="btn page-link "
                onClick={handleChangePage}
                aria-label="Previous"
                data-page={pageNumber - 1}
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            {threePages()}
            <li className="page-item disabled">
              <button
                className="btn page-link"
                onClick={handleChangePage}
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </>
        );
      }
    }

    if (maxPagesNumber > 3) {
      if (pageNumber === 1)
        return (
          <>
            <li className="page-item disabled">
              <button
                className="btn page-link"
                onClick={handleChangePage}
                aria-label="Previous"
                data-page={pageNumber - 1}
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            {moreThanThreePages()}
            <li className="page-item">
              <button
                className="btn page-link"
                onClick={handleChangePage}
                aria-label="Next"
                data-page={pageNumber + 1}
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </>
        );

      if (maxPagesNumber === pageNumber) {
        return (
          <>
            <li className="page-item">
              <button
                className="btn page-link"
                onClick={handleChangePage}
                aria-label="Previous"
                data-page={pageNumber - 1}
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            {lastPage()}
            <li className="page-item disabled">
              <button
                className="btn page-link"
                onClick={handleChangePage}
                aria-label="Next"
                data-page={pageNumber + 1}
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </>
        );
      }
      if (pageNumber > 1 && pageNumber < maxPagesNumber)
        return (
          <>
            <li className="page-item">
              <button
                className="btn page-link"
                onClick={handleChangePage}
                aria-label="Previous"
                data-page={pageNumber - 1}
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
            {moreThanThreePages()}
            <li className="page-item">
              <button
                className="btn page-link"
                onClick={handleChangePage}
                aria-label="Next"
                data-page={pageNumber + 1}
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </>
        );
    }
  };

  return (
    <nav aria-label="Page navigation">
      <ul className="pagination">{paginationItem()}</ul>
    </nav>
  );
};

export default Pagination;
