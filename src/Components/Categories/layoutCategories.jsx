import { NavLink, Outlet } from "react-router-dom";

export default function LayoutCategories() {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "bg-green-500 text-white"
      : "text-gray-700 hover:bg-green-100 hover:text-green-600";

  return (
    <div className="min-h-screen flex bg-gray-100">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-5">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">
          Categories
        </h2>

        <nav className="flex flex-col gap-3">
          <NavLink
            to="men"
            className={`${linkStyle} px-4 py-3 rounded-lg duration-300`}
          >
            Men
          </NavLink>

          <NavLink
            to="women"
            className={`${linkStyle} px-4 py-3 rounded-lg duration-300`}
          >
            Women
          </NavLink>

          <NavLink
            to="kids"
            className={`${linkStyle} px-4 py-3 rounded-lg duration-300`}
          >
            Kids
          </NavLink>

        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-8">
        <div className="bg-white rounded-xl shadow-md p-6 min-h-[400px]">
          <Outlet />
        </div>
      </main>
    </div>
  );
}