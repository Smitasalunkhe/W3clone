import './Navbar.css';
import Navtab from './Navtab';

import img from '../images/W3Schools_logo.svg.png';
import Tutorial from './Tutorial';

function Navbar({ handlenavClick, resetToHome }) {
  return (
    <div className="navbar">
      <div className="navbar-logo" onClick={resetToHome}>
        <img src={img} alt="W3Schools Logo" />
      </div>
      <div className='navtabs'>
        <Navtab className="navtab" navtitle="Tutorial" handlenavClick={() => handlenavClick(0)} />
        <Navtab className="navtab" navtitle="Exercise" handlenavClick={() => handlenavClick(1)} />
        <Navtab className="navtab" navtitle="Certificates" handlenavClick={() => handlenavClick(2)} />
        <Navtab className="navtab" navtitle="Services" handlenavClick={() => handlenavClick(3)} />
        <Navtab className="navtab" navtitle="Spaces" handlenavClick={() => handlenavClick(4)} />
        <Navtab className="navtab" navtitle="Get Certified" handlenavClick={() => handlenavClick(5)} />

      </div>
      <div className='search-container'>
        <input type="text" placeholder="Search..." className='search-input' />
      </div>
      <div className='auth-buttons'>
        <button className='sign-log' onClick={() => handlenavClick(7)}>Sign Up</button> {/* Handle button click */}
        <button className='sign-log'>Log In</button>
      </div>
    </div>
  );
}

export default Navbar;
