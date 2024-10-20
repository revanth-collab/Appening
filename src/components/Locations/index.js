import "./index.css"

const Locations = () => {
    return (<div className="location-container">
        <h1 className="location-heading">Now Accepting Patients In The Following States</h1>
        <div className="location-cards-container">
            <div className="card-container">
                <img src="https://tse4.mm.bing.net/th?id=OIP.NUnp_XGpUjpg4MHlCl4PzwHaEo&pid=Api&P=0&h=220" alt="arizona" className="location-image" />
                <h1 className="location-card-heading">Azizona</h1>
                <p className="location-para">In-person and Virtual appointment</p>
            </div>
            <div className="card-container">
                <img src="https://tse2.mm.bing.net/th?id=OIP.qsswiqTJ4trTXrVWW9DG3wHaE7&pid=Api&P=0&h=220" alt="arizona" className="location-image" />
                <h1 className="location-card-heading">Washington</h1>
                <p className="location-para">Virtual appointment</p>
            </div>
            <div className="card-container">
                <img src="https://tse2.mm.bing.net/th?id=OIP.3UJae0K7ZYBgBl5fK5bIwQHaE7&pid=Api&P=0&h=220" alt="arizona" className="location-image" />
                <h1 className="location-card-heading">Oregon</h1>
                <p className="location-para">Virtual appointment</p>
            </div>
        </div>
    </div>)
}

export default Locations