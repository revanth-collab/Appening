import "./index.css"

const Testimonial = () => {
    return (<div className="testimonial-container">
        <h1 className="testimonial-heading">What Our Patients Are Saying</h1>
        <div className="testimonial-card-container">
            <div className="testimonial-card">
                <div className="testimonial-card-top">
                    <h1 className="testimonial-card-heading">“</h1>
                    <p className="testimonial-card-para">“Psyciatry took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach”</p>
                </div>
                <div className="testimonial-card-bottom">
                    <img src="https://img.freepik.com/free-photo/portrait-woman-taking-photo-with-device-world-photography-day_23-2151704437.jpg?ga=GA1.1.835019833.1729339202&semt=ais_hybrid" alt="profile" className="testimonial-image" />
                    <div className="testimonial-profile">
                        <h1 className="profile-heading">Carl Rowan</h1>
                        <p className="profile-para">Aglets Inc</p>
                    </div>
                </div>
            </div>
            <div className="testimonial-card">
                <div className="testimonial-card-top">
                    <h1 className="testimonial-card-heading">“</h1>
                    <p className="testimonial-card-para">“Psyciatry took a lot of the anxiety and stress out of the equation. I was able to easily sort the directory, and the provider profiles were so helpful in giving me a sense of their energy and approach”</p>
                </div>
                <div className="testimonial-card-bottom">
                    <img src="https://img.freepik.com/free-photo/portrait-woman-taking-photo-with-device-world-photography-day_23-2151704437.jpg?ga=GA1.1.835019833.1729339202&semt=ais_hybrid" alt="profile" className="testimonial-image" />
                    <div className="testimonial-profile">
                        <h1 className="profile-heading">Carl Rowan</h1>
                        <p className="profile-para">Aglets Inc</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>)

}

export default Testimonial