import { useState } from 'react';
import { CloseIcon, MenuIcon } from '../icons';

function Navbar({ logoSrc, navLinks }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 items-center z-50 hidden lg:flex pl-20">
        <div>
          <img src={logoSrc} className="h-20" alt="logo" />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center rounded-full h-10 py-1 px-4 bg-white/10 border border-white/20 gap-4 shadow-lg shadow-black/30">
          <ul className="flex gap-6 outfit text-white/80 text-md items-center">
            {navLinks.map((item) => (
              <a key={item.name} href={item.href}>
                <li
                  className={`hover:text-white transition cursor-pointer ${
                    item.name === 'Connect'
                      ? 'bg-gradient-to-b from-black/50 to-white/20 rounded-full px-2 py-1 transition'
                      : ''
                  }`}
                >
                  {item.name}
                </li>
              </a>
            ))}
          </ul>
        </div>
      </nav>

      <nav className="fixed top-4 left-0 right-0 z-50 flex lg:hidden justify-between items-center px-6 text-white">
        <img src={logoSrc} className="w-24 h-auto" alt="logo" />
        <button onClick={openMenu} className="text-white text-3xl" aria-label="Open menu">
          <MenuIcon className="w-8 h-8" />
        </button>
      </nav>

      {isMenuOpen && (
        <div className="fixed z-[100] inset-0 bg-black/80 backdrop-blur-md flex flex-col justify-center items-center gap-5 text-white text-2xl outfit">
          <button onClick={closeMenu} className="absolute top-5 right-14 text-4xl" aria-label="Close menu">
            <CloseIcon className="w-10 h-10" />
          </button>

          {navLinks.map((item) => (
            <a key={item.name} href={item.href} onClick={closeMenu} className="hover:text-teal-400 transition">
              {item.name}
            </a>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;
