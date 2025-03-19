import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white p-4 text-center mt-10">
      <div className="flex justify-center gap-4 mb-2">
        <a href="https://github.com/G1KUMAR-INDIA" target="_blank" rel="noopener noreferrer"><FaGithub size={24} /></a>
        <a href="https://www.linkedin.com/in/g1kumarr/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
      </div>
      <p>&copy; 2025 R Jeevan Kumar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;