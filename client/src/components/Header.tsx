'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Match Players', path: '/match' },
    { name: 'Team Selection', path: '/teams' },
  ];

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold flex items-center">
              <span className="bg-white text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-2">⚽</span>
              FIFA Match
            </Link>
          </div>
          
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-1">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`block px-4 py-2 rounded-lg transition-colors ${
                      pathname === item.path
                        ? 'bg-white text-blue-600 font-medium'
                        : 'hover:bg-blue-500'
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}