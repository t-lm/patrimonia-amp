// ./comps/carousel.js

import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';

export const PictureCarousel = ({media}) => {
  
  return (
    
    <Carousel style={{width: "auto", height: "auto"}}>
      { media && media.map((p, i) => 
        <Carousel.Item key={i}>
          <Image
            src={`/sites/${p.id}`}
            alt={p.description.fr}
            title={p.description.fr}
            width={800}
            height={450}
            objectFit="cover"
          />
          <Carousel.Caption>
            <p style={{backgroundColor: "pink", color:"black", borderRadius: 5}}>{p.description.fr}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )}
    </Carousel>

  )
};

