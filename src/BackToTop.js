import React, { useEffect, useState } from "react";

const BackToTop = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition < 400) {
        setIsSticky(false);
        setShowBackTop(false);
      } else {
        setIsSticky(true);
        setShowBackTop(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={`header-sticky ${isSticky ? "sticky-bar" : ""}`}>
      </header>

      {showBackTop && (
        <div
          id="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <a title="Go to Top" href="">
            <i className="fas fa-level-up-alt"></i>
          </a>
        </div>
      )}
    </>
  );
};

export default BackToTop;
