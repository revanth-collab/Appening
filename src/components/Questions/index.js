import React, { useState } from 'react';

import "./index.css"

const QuestionAsked = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="question-container">
            <div className="question-header" onClick={toggleContent}>
                <span className="question-icon">{isOpen ? '-' : '+'}</span>
                <h3 className='question-toggle-heading'>{title}</h3>
            </div>
            {isOpen && (
                <div className="question-content">
                    <p>{content}</p>
                </div>
            )}
        </div>
    );
};

const Questions = () => {
    return (
        <div className="question-hiding-content">
            <QuestionAsked 
                title="Is Psychiatry confidential?" 
                content="We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home." 
            />
            <hr className='horizontal'/>
            <QuestionAsked 
                title="What is the best way to schedule a appoinment?" 
                content="We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home." 
            />
            <hr className='horizontal'/>
            <QuestionAsked 
                title="Do you prescribe controlled substance medication?" 
                content="We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home." 
            />
            <hr className='horizontal'/>
            <QuestionAsked 
                title="How long does the initial appointment take?" 
                content="We Offer In-Person And Virtual Psychiatry Services Where You Can Meet Your Provider In Person Or At The Convenience Of Your Own Home." 
            />
        </div>
    );
};

export default Questions;
