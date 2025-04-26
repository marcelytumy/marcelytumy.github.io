import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

const NavItem = ({ to, children }: NavItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to || (location.pathname === '/' && to === '/');
  
  return (
    <Link 
      to={to} 
      className={`px-3 py-2 rounded-md transition-all flex items-center ${
        isActive 
          ? 'text-accent bg-accent bg-opacity-10' 
          : 'text-gray-400 hover:text-gray-200 hover:bg-surface-light'
      }`}
    >
      <span className="text-sm md:text-base">{children}</span>
    </Link>
  );
};

export default NavItem;