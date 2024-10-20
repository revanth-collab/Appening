import { FaCalendarAlt } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { GiDiscussion } from "react-icons/gi";
import { LuClipboardList } from "react-icons/lu";

import { IoIosArrowRoundForward } from "react-icons/io";

import "./index.css"

const Schedule = () => {
    return (
        <div className="schedule-container">
            <h1 className="schedule-heading">Four Simple Steps To Get Started</h1>
            <div className="schedule">
                <div className="schedule-content">
                    <FaCalendarAlt className="schedule-icon"/>
                    <h1 className="number">01</h1>
                    <p className="schedule-para">Schedule an appointment</p>
                </div>
                <div className="dots-container">
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                </div>
                <div className="schedule-content">
                    <FaHandshake className="schedule-icon"/>
                    <h1 className="number">02</h1>
                    <p className="schedule-para">Connect with your provider</p>
                </div>
                <div className="dots-container">
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                </div>
                <div className="schedule-content">
                    <GiDiscussion className="schedule-icon"/>
                    <h1 className="number">03</h1>
                    <p className="schedule-para">Discuss your comprehensive assessment</p>
                </div>
                <div className="dots-container">
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                <p className="dots">.</p>
                </div>
                <div className="schedule-content">
                    <LuClipboardList className="schedule-icon"/>
                    <h1 className="number">04</h1>
                    <p className="schedule-para">Receive your individualized treatment plan</p>
                </div>
            </div>
            <button type="button" className="schedule-button">
                <a href="#1">Schedule a Call <span className="schedule-mini"><IoIosArrowRoundForward /></span></a>
            </button>
        </div>
    )
}

export default Schedule