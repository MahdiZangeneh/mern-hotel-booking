import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "./../assets/slider-1.jpeg";
import slider2 from "./../assets/slider-2.jpeg";

const Hero = () => {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="">
      <Carousel {...settings}>
        <div>
          <img src={slider1} alt="slider 1" className="w-full" />
        </div>
        <div>
          <img src={slider2} alt="slider 2" className="w-full" />
        </div>
      </Carousel>
    </div>
  );
};

export default Hero;
