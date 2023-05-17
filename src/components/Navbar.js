import { Link } from 'react-scroll';

function Navbar() {
  return (
    <nav className="navbar flex justify-content-center" id="navbar">
        <Link activeClass="active" to="about" spy={true} smooth={true} className="btn normal-case btn-ghost text-XL">About</Link>
        <Link activeClass="active" to="experience" spy={true} smooth={true} className="btn normal-case btn-ghost text-XL">Experience</Link>
        <Link activeClass="active" to="work" spy={true} smooth={true} className="btn normal-case btn-ghost text-XL">Work</Link>
        <Link activeClass="active" to="contact" spy={true} smooth={true} className="btn normal-case btn-ghost text-XL">Contact</Link>
    </nav>
  );
}

export default Navbar;
