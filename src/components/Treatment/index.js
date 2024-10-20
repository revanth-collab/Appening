import { IoIosArrowRoundForward } from "react-icons/io";

import "./index.css"

const Treatment = () => {
    return (
        <div className="treatment-container">
            <h1 className="treatment-main-heading">Our Treatment Focus</h1>
            <div className="treatment-content">
                <div className="treatment-image-container">
                    <img src="https://img.freepik.com/free-photo/woman-showing-acting-headache-stress_1150-3810.jpg?ga=GA1.2.835019833.1729339202&semt=ais_hybrid" alt="mentalhealth" className="treatment-image" />
                    <p className="circle"></p>
                </div>
                <div className="treatment-content-container">
                    <h1 className="treatment-heading">Mental Health</h1>
                    <p className="treatment-description">Mental health is our emotional, psychological, and social well-being. It affects how we feel, think, and act. It also helps determine how we handle stress, build relationships, relate to others, and make healthy life decisions. Mental health is vital at every stage of life. At Ada Psychiatry, we specialize in various conditions such as Depression, Anxiety, ADHD, Bipolar and more.</p>
                    <button type="button" className="treatment-button">
                        <a href="#1">Learn More <span className="treatment-mini"><IoIosArrowRoundForward /></span></a>
                    </button>
                </div>
            </div>
            <div className="treatment-content">
                <div className="treatment-content-container">
                    <h1 className="treatment-heading">Addiction And Recovery</h1>
                    <p className="treatment-description">Addiction is a chronic dysfunction of the brain system. An individual experiencing addiction will have difficulty staying away from the addictive behavior, display a lack of self-control, be dismayed by how the behaviour may be causing problems, and lack an emotional response. At Ada Psychiatry, we assess your risk for addiction and create a comprehensive treatment plan to start your recovery. Our experts are trained in medication-assisted treatment. You do not have to continue to struggle alone.</p>
                    <button type="button" className="treatment-button">
                        <a href="#1">Learn More <span className="treatment-mini"><IoIosArrowRoundForward /></span></a>
                    </button>
                </div>
                <div className="treatment-image-container">
                    <img src="https://img.freepik.com/free-photo/depressed-person-looking-down_23-2150761454.jpg?ga=GA1.2.835019833.1729339202&semt=ais_hybrid" alt="mentalhealth" className="treatment-right-image" />
                    <p className="circle"></p>
                </div>
            </div>
            <div className="treatment-content">
                <div className="treatment-image-container">
                    <img src="https://img.freepik.com/free-photo/front-view-young-woman-holding-her-belly_23-2149350116.jpg?ga=GA1.2.835019833.1729339202&semt=ais_hybrid" alt="mentalhealth" className="treatment-image" />
                    <p className="circle"></p>
                </div>
                <div className="treatment-content-container">
                    <h1 className="treatment-heading">Supervised Medical Weight Loss</h1>
                    <p className="treatment-description">The primart indicator of obesity is when a person's body mass index (BMI) is 30 or higher. Medically supervised weight loss is a program designed for individuals who are obese and are having difficulty losing weight and changing their lifestyle on their own. Our program offers sepervision, FDA-approved medications, weight loss injections, diet plans, and exercise to help with each client's needs.</p>
                    <button type="button" className="treatment-button">
                        <a href="#1">Learn More <span className="treatment-mini"><IoIosArrowRoundForward /></span></a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Treatment