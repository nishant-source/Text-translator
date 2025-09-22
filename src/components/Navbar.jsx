import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const loc = useLocation();
  const linkClass = (path) =>
    "px-3 py-2 rounded " +
    (loc.pathname === path
      ? "bg-blue-600 text-white"
      : "text-slate-700 hover:bg-slate-100");

  return (
    <header className="bg-white shadow">
      <nav className="container mx-auto p-4 flex items-center justify-between">
        <div className="font-bold text-lg">My Frontend Project</div>
        <div className="flex gap-2">
          <Link className={linkClass("/")} to="/">
            Home
          </Link>
          <Link className={linkClass("/translate")} to="/translate">
            Translator
          </Link>
          <Link className={linkClass("/random")} to="/random">
            Random String
          </Link>
        </div>
      </nav>
    </header>
  );
}
