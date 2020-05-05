import React from 'react';

import { Slide } from 'react-slideshow-image';

function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('./static', false, /\.png$/));

const properties = {
  duration: 9999999,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
  autoplay: false,
  pauseOnHover: true,
};

const Slides = () => {
  return (
    <Slide style={{ margin: 15 }} {...properties}>
      {images.map(image => (
        <img style={{ height: '70vh' }} key="image" src={image} alt="" />
      ))}
    </Slide>
  );
};
export default Slides;
