import {Link,withRouter} from "react-router-dom"
import "./index.css"

const NavBar = () => {
    return (
        <nav className="navbar-container">
            <div className="nav-content">
                <div className="website-logo" alt="website logo"></div>
                <h1 className="website-heading">PSYCHIATRY</h1>
            </div>
            <div className="nav-content">
                <select className="select-option">
                    <option className="option">Who we are</option>
                </select>
                <select className="select-option">
                    <option className="option">Who we treat</option>
                </select>
                <p className="select-option">Services</p>
                <select className="select-option" >
                    <option className="option">Resourses</option>
                </select>
                <button type="button" className="website-button">Book an Appointment</button>
            </div>
        </nav>
    ) 
}

export default NavBar
