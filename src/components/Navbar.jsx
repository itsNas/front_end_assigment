import { BsArrowLeft } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { navbarItems } from "../constant";

function Navbar() {
  const location = useLocation();
  const [selectedPage, setSelectedPage] = useState(location.pathname);

  useEffect(() => {
    // Set the "Home" page as the initially selected page on first loading
    setSelectedPage(location.pathname);
  }, [location.pathname]);

  return (
    <div className="mx-auto p-6 max-w-md">
      <Link to="/">
        <button className="text-rose-500 text-2xl mb-4">
          <BsArrowLeft />
        </button>
      </Link>
      <h1 className="text-3xl mb-4">Morning Masscoder</h1>
      <ul className="flex justify-between border-b pt-4 pb-0">
        {navbarItems.map((page) => (
          <li key={page.path} onClick={() => setSelectedPage(page.path)}>
            <Link to={page.path} className="relative py-2 first:pl-4 last:pr-4">
              <span
                className={`relative z-10 text-sm xs:text-base ${
                  selectedPage === page.path ? "" : "text-slate-400"
                }`}
              >
                {page.label}
              </span>
              <span
                className={`absolute bottom-0 left-0 w-full h-1 bg-zinc-700 ${
                  selectedPage === page.path ? "scale-x-100" : "scale-x-0"
                } transition-transform`}
              ></span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
