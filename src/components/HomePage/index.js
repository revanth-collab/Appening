import NavBar from "../NavBar"
import ReactSlick from "../ReactSlick"
import Team from "../Team"
import Treatment from "../Treatment"
import NoteContent from "../NoteContent"
import TeamServices from "../TeamServices"
import ChooseUs from "../ChooseUs"
import Testimonial from "../Testimonial"
import Schedule from "../Schedule"
import Locations from "../Locations"
import Frequently from "../Frequently"
import Footer from "../Footer"

import "./index.css"

const HomePage =() =>{
        return(
            <div className="app-container">
                <NavBar />
                <ReactSlick />
                <Team/>
                <Treatment />
                <NoteContent />
                <TeamServices />
                <ChooseUs />
                <Testimonial />
                <Schedule />
                <Locations />
                <Frequently />
                <Footer />
            </div>
        )}

export default HomePage