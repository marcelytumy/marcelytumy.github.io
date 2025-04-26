import NavItem from './NavItem';

const Navbar = () => (
  <nav className="flex justify-between p-5 bg-surface border-b border-border">
    <div className="flex items-center">
      <span className="text-xl font-medium text-white mr-2">MS</span>
      <span className="text-accent">_</span>
    </div>
    
    <div className="flex space-x-1 md:space-x-2">
      <NavItem to="/">whoami</NavItem>
      <NavItem to="/projects">projects</NavItem>
      <NavItem to="/skills">skills</NavItem>
      <NavItem to="/contact">contact</NavItem>
    </div>
  </nav>
);

export default Navbar;