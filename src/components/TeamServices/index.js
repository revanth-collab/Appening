import { PiHeadCircuitFill } from "react-icons/pi"
import { PiPlusCircleBold } from "react-icons/pi";
import { FaHeartbeat } from "react-icons/fa";
import { FaBrain } from "react-icons/fa6";
import { RiPsychotherapyFill } from "react-icons/ri";
import { RiEdgeNewFill } from "react-icons/ri";

import { IoIosArrowRoundForward } from "react-icons/io";


import "./index.css"

const TeamServices = () => {
    return (<div className="service-container">
        <h1 className="service-heading">Our Services</h1>
        <div className="services">
            <div className="service-item">
                <PiHeadCircuitFill className="service-image"/>
                <h1 className="service-para">Psychiatric
                    Evaluation</h1>
            </div>
            <div className="service-item">
                <PiPlusCircleBold className="service-image"/>
                <h1 className="service-para">Medication
                    Management</h1>
            </div>
            <div className="service-item">
                <FaHeartbeat className="service-image"/>
                <h1 className="service-para"> Supportive
                    Psychotherapy</h1>
            </div>
            <div className="service-item">
                <FaBrain className="service-image"/>
                <h1 className="service-para">ADHD 
                    Screening</h1>
            </div>
            <div className="service-item">
                <RiPsychotherapyFill className="service-image"/>
                <h1 className="service-para">MAT 
                    Treatment</h1>
            </div>
            <div className="service-item">
                <RiEdgeNewFill className="service-image"/>
                <h1 className="service-para">Gene Sight Testing</h1>
            </div>
        </div>
        <button type="button" className="service-button">
            <a href="#1">View our Services <span className="service-mini"><IoIosArrowRoundForward /></span></a>
        </button>
    </div>)

}

export default TeamServices