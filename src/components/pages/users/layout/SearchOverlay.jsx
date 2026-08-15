import React, { useEffect, useRef, useState } from "react";

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    if (!open) return;

    const timer = setTimeout(() => inputRef.current?.focus(), 120);

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("search-overlay-open");

    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("search-overlay-open");
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleSubmit = (event) => {
    event.preventDefault();
    // Search UI is ready to connect to the site's search/API later.
    // Keeping the query in this component avoids changing existing routing/content.
  };

  return (
    <div
      className="site-search-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Search website"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="site-search-panel">
        <button
          type="button"
          className="site-search-close"
          onClick={onClose}
          aria-label="Close search"
          title="Close search"
        >
          <i className="bi bi-x-lg" aria-hidden="true"></i>
        </button>

        <div className="site-search-heading">
          <span className="site-search-icon">
            <i className="bi bi-search" aria-hidden="true"></i>
          </span>
          <div>
            <small>MINISTRY OF WATER</small>
            <h2>Search the website</h2>
          </div>
        </div>

        <form className="site-search-form" onSubmit={handleSubmit}>
          <div className="site-search-input-wrap">
            <i className="bi bi-search" aria-hidden="true"></i>
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search news, services, publications..."
              aria-label="Search"
            />
            {query && (
              <button
                type="button"
                className="site-search-clear"
                onClick={() => setQuery("")}
                aria-label="Clear search"
              >
                <i className="bi bi-x-circle-fill" aria-hidden="true"></i>
              </button>
            )}
          </div>

          <button type="submit" className="site-search-submit">
            Search
            <i className="bi bi-arrow-right" aria-hidden="true"></i>
          </button>
        </form>

        <p className="site-search-hint">
          Press <kbd>Esc</kbd> or click outside the panel to close.
        </p>
      </div>
    </div>
  );
}
