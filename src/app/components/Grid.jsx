import React from 'react';

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg text-center shadow-lg flex flex-col items-center">
      <img src={image} alt={title} className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-semibold text-orange-500 mb-2">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  );
};

const Grid = () => {
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
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
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
