import ShowHide from '../ShowHide';

import "./index.css"

const ChooseUs =()=> {
        return (
            <div className="choose-container">
                <div className="choose-image-container">
                    <img src="https://img.freepik.com/free-photo/happy-financial-advisor-young-couple-communicating-while-going-through-paperwork-meeting_637285-3042.jpg?ga=GA1.1.835019833.1729339202&semt=ais_hybrid" alt="chooseus" className="choose-image" />
                    <p className="choose-border"></p>
                </div>
                <div className="choose-content-container">
                    <h1 className="choose-heading">Why Should You Choose Psychiatry?</h1>
                    <div className="choose-content">
                        <ShowHide />
                    </div>
                </div>
            </div>
        )
    }

export default ChooseUs