import Questions from "../Questions"

import { IoIosArrowRoundForward } from "react-icons/io";

import "./index.css"

const Frequently = () => {
    return (
        <div className="frequently-container">
            <h1 className="frequently-heading">Frequently asked questions</h1>
            <Questions />
            <button type="button" className="frequently-button">
                <a href="#1">See all FAQ<span className="frequently-mini"><IoIosArrowRoundForward /></span></a>
            </button>
        </div>
    )
}

export default Frequently