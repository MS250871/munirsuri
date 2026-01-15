import { FaLinkedin } from 'react-icons/fa';
import { FaGithub, FaYoutube } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';

const SocialButtons = ({ isLight, size = 32 }) => {
  return (
    <div
      className={`${
        isLight ? 'text-white' : 'text-[#003d3d]'
      } flex items-center justify-center gap-6`}
    >
      <a
        href="https://www.linkedin.com/in/munir-suri-29b13661/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 w-8 h-8"
      >
        <FaLinkedin size={size} />
      </a>
      <a
        href="https://www.instagram.com/munir.suri/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-pink-500  w-8 h-8"
      >
        <FaInstagram size={size} />
      </a>
      <a
        href="https://www.youtube.com/@munirsuri8313"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-400  w-8 h-8"
      >
        <FaYoutube size={size} />
      </a>
      <a
        href="https://github.com/surimunir/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-500  w-8 h-8"
      >
        <FaGithub size={size} />
      </a>
    </div>
  );
};

export default SocialButtons;
