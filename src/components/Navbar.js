import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link activeClass="active" to="about" spy={true} smooth={true}>About</Link></li>
        <li><Link activeClass="active" to="experience" spy={true} smooth={true}>Experience</Link></li>
        <li><Link activeClass="active" to="work" spy={true} smooth={true}>Work</Link></li>
        <li><Link activeClass="active" to="contact" spy={true} smooth={true}>Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
