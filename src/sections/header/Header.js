import './header.css';

import logo from '../../asset/image/logo.jpg';
import { Link, Outlet } from "react-router-dom";
import Footer from '../../sections/footer/Footer';



const Header = () => {

  return (
    <>
       <div className="navbar navbar-expand-md text-danger">
        <div className="container">
          <Link to="/" className='navbar-brand'>
            <div className='logo'><img src={logo} alt="logo" /></div>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item na" ><Link to="/" className="nav-link">Home</Link></li>
    
              <li className="nav-item na"><Link to="/about" className="nav-link">About Us</Link></li>
    
              <li className="nav-item dropdown ">
                <Link to="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Features</Link>
                <ul className="dropdown-menu">
                  <li><Link to="/testimonials" className="dropdown-item">Testimonials</Link></li>
                  <li><Link to="/teacher" className="dropdown-item">Teacher</Link></li>
                  <li><Link to="/event" className="dropdown-item">Events</Link></li>
                  <li><Link to="/gallary" className="dropdown-item">Gallery</Link></li>
                  <li><Link to="/contantupload" className="dropdown-item">Course of study</Link></li>
                </ul>
              </li>
    
              <li className="nav-item na"><Link to="/timetable" className="nav-link">Timetable</Link></li>
    
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">Parent</a>
                <ul className="dropdown-menu">
                  <li><Link to='/attendance' className="dropdown-item">Attendance</Link></li>
                  <li><Link to='/complaints' className="dropdown-item">Sending complaints</Link></li>
                  <li><Link to='/payment' className="dropdown-item">Make a payment</Link></li>
                  <li><Link to='/parent' className="dropdown-item">Parent info</Link></li>
                  <li><Link to='/communication' className="dropdown-item">Communication</Link></li>
                </ul>
              </li>
    
              <li className="nav-item na"><Link to='/contact' className="nav-link">Contact</Link></li>
            </ul>
  
            <ul className="login ">
                  <li className='log-btn'><a href="#">Login</a></li>
                  <li className="log"><Link to='/loginOwaner'>Owner</Link></li>
                  <li className="log"><Link to='/parentLogin'>Parent</Link></li>
                  <li className="log"><Link to='/satffLogin'>Staff</Link></li>
            </ul>
            
          </div>
          
        </div>
        
      </div>
      
      <Outlet />

      <Footer/>
    </>
  );
};

export default Header;
