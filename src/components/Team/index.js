import { IoIosArrowRoundForward } from "react-icons/io";

import "./index.css"

const Team = () => {
    return ( <div className="team-container">
        <div className="team-content">
            <img src="https://img.freepik.com/free-photo/portrait-young-woman-working-office_171337-15574.jpg?t=st=1729342656~exp=1729346256~hmac=04a19be3c42818c11ebc5a73bf9f080b3f2c21034f215c305020727c9c208672&w=900" alt="team-image" className="team-image" />
            <div className="team-details">
                <h1 className="team-main-heading">Meet The Founder</h1>
                <h3 className="team-heading">Lakeisha Appleton</h3>
                <p className="team-para">FNP-C, PMHNP-BC</p>
                <p className="team-description">"Mental health problems don't define who you are. They are something you experience. You walk in the rain and you feel the rain, but, importantly, YOU ARE NOT THE RAIN." -- Matt Haig</p>
                <button type="button" className="team-button">Learn More <span><IoIosArrowRoundForward className="mini"/></span></button>
            </div>
        </div>
    </div>)

}

export default Team