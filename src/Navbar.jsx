import { NavLink, Link } from "react-router-dom";
import { useFavourites } from "./StudentProvider";

function Navbar() {
  const { favourites } = useFavourites();

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 py-1 px-4 rounded-full text-sm ${
      isActive ? "bg-[#304332] text-white font-medium" : "text-[#304332]"
    }`;

  return (
    <nav className="mt-5 mx-6 flex items-center justify-between rounded-2xl bg-white px-6 py-3 shadow">
      <h1 className="flex items-center gap-2 text-xl font-semibold">
        <i className="fa-solid fa-graduation-cap"></i>
        <span>
          Campus<span className="text-[#379240]">Connect</span>
        </span>
      </h1>

      <div className="flex items-center gap-4">
        <NavLink to="/" end className={({ isActive }) => `${linkClass({ isActive })} hidden md:flex`}>
          <i className="fa-solid fa-users"></i>
          Student List
        </NavLink>
        <NavLink to="/favourites" className={({ isActive }) => `${linkClass({ isActive })} hidden md:flex`}>
          <i className="fa-solid fa-heart"></i>
          My Favourites
        </NavLink>
      </div>

      <div className="flex items-center gap-4">
        <Link
          to="/favourites"
          className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1 text-sm shadow-sm"
        >
          <i className="fa-solid fa-heart text-red-500"></i>
          <span>({favourites.length})</span>
        </Link>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex h-9 w-9 items-center justify-center rounded-full bg-[#304332] font-medium text-white">
            K
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;