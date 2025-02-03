import React from 'react';
import '/src/app/grid.css';  

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="grid-item">
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

const App = () => {
  const features = [
    {
      title: 'Speak & Ask',
      description: 'Ask unlimited questions, get unlimited answers.',
      image: 'icon1.png', // Provide your actual image path here
    },
    {
      title: 'Identify Objects',
      description: 'Identify and get more information about what you see.',
      image: 'icon2.png',
    },
    {
      title: 'Magic Camera',
      description: 'Put a magical twist on photos taken with the camera.',
      image: 'icon3.png',
    },
    {
      title: 'Bidirectional Translation',
      description: 'Instantly translate between more than 100 languages.',
      image: 'icon4.png',
    },
    {
      title: 'Visual Interpretation',
      description: 'Understand any language with the camera.',
      image: 'icon5.png',
    },
    {
      title: 'Memory Recall',
      description: 'Recall past conversations, notes, and more.',
      image: 'icon6.png',
    },
  ];

  return (
    <div className="body">
      <div className="grid-container">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
