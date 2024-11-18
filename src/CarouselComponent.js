import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import slide1 from './slides/slide1.png';
import slide2 from './slides/slide2.png';
// import slide3 from './slides/slide3.png';
import slide4 from './slides/slide4.png';
import slide5 from './slides/slide5.png';
import slide6 from './slides/slide6.png';

const CarouselComponent = () => {
  const slides = [
    {
      title: "Centipede: Bringing Total Surveillance to New Heights",
      description: "Why let privacy slow you down? Meet Centipede, the future of complete human behavior tracking.",
      backgroundImage: slide1
    },
    {
      title: "Heartbeat-to-Blockchain™ Technology",
      description: "From your pulse to your thoughts, every move is captured on an open, unchangeable blockchain. Why be mysterious when you can be monitored?",
      backgroundImage: slide2
    },
    {
      title: "Logistics. Not Just for Products.",
      description: "Why stop at package tracking? Centipede applies logistics to human behavior, ensuring every individual stays on schedule and within boundaries.",
      backgroundImage: slide4
    },
    {
      title: "Real-Time Behavior Scores",
      description: "Check your score anytime. Instant feedback on your thoughts, actions, and emotions so you know exactly how well you’re doing—by our standards.",
      backgroundImage: slide5

    },
    {
      title: "Centipede: The End of Privacy, The Start of Total Control",
      description: "Centipede—why live in the unknown when you can live under our watchful eyes?",
      backgroundImage: slide6
    },
  ];

  return (
    <Carousel 
      autoPlay 
      infiniteLoop 
      showThumbs={false} 
      interval={4000} // Auto-slide every 6 seconds
      showStatus={true} // Hides the status bar (optional)
    >
      {slides.map((slide, index) => (
        <div key={index} style={{ textAlign: "center" }}>
          <h3>{slide.title}</h3>
          <p>{slide.description}</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
          <div
            style={{
            backgroundImage: `url(${slide.backgroundImage})`,
            // backgroundPosition: "center", // Ensures the background is centered
            backgroundSize: "cover", // Scales the image to cover the div
            backgroundRepeat: "no-repeat", // Prevents tiling of the image
            display: "flex", // For centering the container content (if any)
            justifyContent: "center", // Centers horizontally
            alignItems: "center", // Centers vertically
            height: "400px", // Height of the div
            width: "400px", // Width of the div
            borderRadius: "8px", // Optional styling for rounded corners
            }}
          ></div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
