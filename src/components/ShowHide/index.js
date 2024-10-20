import React, { useState } from 'react';

import "./index.css"

const ToggleSection = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="toggle-container">
            <div className="toggle-header" onClick={toggleContent}>
                <span className="icon">{isOpen ? '-' : '+'}</span>
                <h3 className='choose-toggle-heading'>{title}</h3>
            </div>
            {isOpen && (
                <div className="toggle-content">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

const ShowHide = () => {
    return (
        <div className="hiding-content">
            <ToggleSection 
                title="Convenient access" 
                content="We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home." 
            />
            <hr className='horizontal'/>
            <ToggleSection 
                title="Concierge approach" 
                content="We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home." 
            />
            <hr className='horizontal'/>
            <ToggleSection 
                title="High quality service" 
                content="We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home." 
            />
            <hr className='horizontal'/>
            <ToggleSection 
                title="Trusted and empathic providers" 
                content="We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home." 
            />
        </div>
    );
};

export default ShowHide;
