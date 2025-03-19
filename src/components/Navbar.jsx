import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-blue-600 shadow-md p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-[#D60A6A]">Reddyvari Jeevan Kumar</h1>
      <ul className="flex flex-wrap gap-4 text-white">
        <li class="hover:text-[#EF3E42]"><Link to="/">Home</Link></li>
        <li class="hover:text-[#EF3E42]"><Link to="/about">About</Link></li>
        <li class="hover:text-[#EF3E42]"><Link to="/skills">Skills</Link></li>
        <li class="hover:text-[#EF3E42]"><Link to="/projects">Projects</Link></li>
        <li class="hover:text-[#EF3E42]"><Link to="/education">Education</Link></li>
        <li class="hover:text-[#EF3E42]"><Link to="/experience">Experience</Link></li>
        <li class="hover:text-[#EF3E42]"><Link to="/contact">Contact</Link></li>
      </ul>
    </div>
  );
};

export default Navbar;