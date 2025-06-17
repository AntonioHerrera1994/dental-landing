import React from 'react';
import '../styles/servicios.css';
import CardComponent from './CardComponen';
import ImageS1 from '../assets/dental-hero.avif';

function Servicios(){
    return (
        <>
        <div className="servicios">
            <div className="serv-cont">
                <div className="servtxt">
                    <h2>What Service We Offer</h2>
                    <p>Our experienced team at Dentica is dedicated to providing high-quality service and personalized care to each of our clients.</p>
                </div>

                <div className="serv-grid">
                <CardComponent
      icon="🦷"
      title="Teeth Checkup"
      description="A routine dental examination typically performed by a dentist or hygienist."
      bgImage={ImageS1}
    />

<CardComponent
      icon="🦷"
      title="Teeth Checkup"
      description="A routine dental examination typically performed by a dentist or hygienist."
      bgImage={ImageS1}
    />

<CardComponent
      icon="🦷"
      title="Teeth Checkup"
      description="A routine dental examination typically performed by a dentist or hygienist."
      bgImage={ImageS1}
    />

<CardComponent
      icon="🦷"
      title="Teeth Checkup"
      description="A routine dental examination typically performed by a dentist or hygienist."
      bgImage={ImageS1}
    />

<CardComponent
      icon="🦷"
      title="Teeth Checkup"
      description="A routine dental examination typically performed by a dentist or hygienist."
      bgImage={ImageS1}
    />

<CardComponent
      icon="🦷"
      title="Teeth Checkup"
      description="A routine dental examination typically performed by a dentist or hygienist."
      bgImage={ImageS1}
    />

                </div>
            </div>
        </div>
        </>
    )
}

export default Servicios