import React from "react";
import '../styles/beneficios.css';
import { useState } from "react";

const steps = [
    {
      number: '01',
      title: 'Make an Appointment',
      description: 'Visit our website to fill out the online form, call us directly using the number provided, email us your details and preferred date, or stop by the clinic in person.',
      image: '../assets/dental-hero.avif', // usa tu imagen local o URL
    },
    {
      number: '02',
      title: 'Visit the Clinic',
      description: 'Come to our clinic at your scheduled time. Our friendly staff will assist you through the process and ensure your comfort.',
      image: '/images/step2.jpg',
    },
    {
      number: '03',
      title: 'Free Consultation',
      description: 'Receive a thorough consultation from our dental experts to determine your needs and the best treatment options.',
      image: '/images/step3.jpg',
    },
    {
      number: '04',
      title: 'Get a Charming Smile',
      description: 'Start your treatment and enjoy a brighter, healthier smile with personalized care and modern technology.',
      image: '/images/step4.jpg',
    },
  ];
  
  const StepGuide = () => {
    const [activeStep, setActiveStep] = useState(0);
  
    return (
      <div className="step-guide">
        <div className="steps-left">
          <h2>How to Get<br />Treatment at Medicana?</h2>
          <p className="intro">
            Discover why our dental service stands out from the rest. From our experienced team to our state-of-the-art equipment, we provide exceptional care for all your dental needs.
          </p>
  
          <div className="step-list">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`step-item ${activeStep === index ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <span className="step-number">{step.number}</span>
                <span className="step-title">{step.title}</span>
                {activeStep === index && (
                  <p className="step-description">{step.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
  
        <div className="step-image">
          <img src={steps[activeStep].image} alt={steps[activeStep].title} />
        </div>
      </div>
    );
  };
  
  export default StepGuide;
  