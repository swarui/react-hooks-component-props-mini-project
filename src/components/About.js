
import React from 'react';

const About = ({ image, about }) => {
 
  const defaultImage = "https://via.placeholder.com/215";
  const imageSrc = image || defaultImage;

  return (
    <aside>
      <img src={imageSrc} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
};

export default About;