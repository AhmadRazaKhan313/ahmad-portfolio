import React from 'react';

interface NavLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, label, onClick }) => {
  return (
    <a
      href={href}
      className="relative text-text-secondary hover:text-text-primary transition-colors duration-300 font-medium tracking-wide after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gradient-to-r after:from-primary-start after:to-primary-end hover:after:w-full after:transition-all after:duration-300"
      onClick={onClick}
    >
      {label}
    </a>
  );
};

export default NavLink;