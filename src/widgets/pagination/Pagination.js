import { useEffect, useState, useCallback } from "react";
import "./styles.css";

export const Widget = () => {
  const [pages, setPages] = useState([]);
  const [activePage, setActivePage] = useState(0);
  const pageCount = 10;

  const buildPages = useCallback(() => {
    let start = 0,
      end = 5;

    if (activePage > 3 && activePage < pageCount - 3) {
      start = activePage - 1;
      end = activePage - 1 + 3;
    }

    if (pageCount > 5 && activePage > pageCount - 5) {
      start = pageCount - 5;
      end = pageCount - 1;
    }

    const newPages = [];
    for (let i = start; i < end; i++) {
      newPages.push(i);
    }

    setPages(newPages);
  }, [activePage]);

  const onChange = (page) => setActivePage(page);

  const isActive = (page) => (activePage === page ? "active" : "");

  useEffect(() => {
    buildPages();
  }, [activePage]);

  return (
    <ul className="pagination">
      {activePage >= 4 && <button onClick={() => onChange(0)}>1</button>}
      {activePage >= 4 && <span>...</span>}
      {pages.map((page) => (
        <button
          className={isActive(page)}
          onClick={() => onChange(page)}
          key={page}
        >
          {page + 1}
        </button>
      ))}
      {activePage < pageCount - 4 && <span>...</span>}
      {pageCount > 5 && (
        <button
          className={isActive(pageCount - 1)}
          onClick={() => onChange(pageCount - 1)}
        >
          {pageCount}
        </button>
      )}
    </ul>
  );
};
