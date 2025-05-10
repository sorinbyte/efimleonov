import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  const isProjectPage = location.pathname.startsWith('/projects/');

  if (isProjectPage) return null;

  return (
    <header className="text-center mb-0 md:mb-6">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-center">
        <h1 className="font-mono font-extralight">
          <a
            href="/"
            className="text-gray-700  dark:text-amber-300 dark:hover:text-amber-100 hover:text-amber-300 transition font-mono font-extralight select-none text-4xl xl:text-5xl"
          >
            EFIM LEONOV
          </a>
        </h1>
      </div>
    </header>
  );
};

export default Header;