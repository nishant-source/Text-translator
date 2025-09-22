import { Outlet, Link } from "react-router-dom";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 flex gap-6">
        <Link to="/" className="font-semibold hover:underline">
          Home
        </Link>
        <Link to="/translator" className="hover:underline">
          Translator
        </Link>
        <Link to="/random" className="hover:underline">
          Random String
        </Link>
      </nav>

      {/* Page Content */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-4">
        © {new Date().getFullYear()} My Frontend Project
      </footer>
    </div>
  );
}
