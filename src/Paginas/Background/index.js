import Carousel from 'react-bootstrap/Carousel';
import './back.css'

function CarouselFadeExample() {
  return (
    <Carousel fade >
      <Carousel.Item className='carrosel'>
        <img
          className="d-block w-100"
          src="./img/gato.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>O Gato de Botas 2</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carrosel'>
        <img
          className="d-block w-100"
          src="./img/john.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>John Wick</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='carrosel'>
        <img
          className="d-block w-100"
          src="./img/urso.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Urso do Pó branco</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;