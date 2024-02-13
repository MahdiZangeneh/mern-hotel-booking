import { useQuery } from "react-query";
import * as apiClient from "../api-client";
import LatestDestinationCard from "../components/LatestDestinationCard";
import { FaTrophy } from "react-icons/fa";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const { data: hotels } = useQuery("fetchQuery", () =>
    apiClient.fetchHotels()
  );

  const topRowHotels = hotels?.slice(0, 2) || [];
  const bottomRowHotels = hotels?.slice(3) || [];

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section id="about" className="container mx-auto">
        <h2 className="text-2xl font-bold text-center py-5">
          EXPERIENCE LUXURY & FIND YOUR BASE
        </h2>
        <p className="text-center leading-loose text-sm">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
          hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet
          vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin
          laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor
          eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas,
          ante et vulputate volutpat, eros pede semper est, vitae luctus metus
          libero eu augue. Morbi purus libero, faucibus adipiscing, commodo
          quis, gravida id, est. Lorem ipsum dolor sit amet, consectetuer
          adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec
          urna. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
          Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
          neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
          sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit
          nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed
          egestas, ante et vulputate volutpat, eros pede semper est, vitae
          luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing,
          commodo quis, gravida id, est. Lorem ipsum dolor sit amet,
          consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque
          aliquet nibh nec urna.
        </p>
        <div className="grid grid-cols-3 gap-14 my-10">
          <div className="flex flex-col items-center text-center">
            <FaTrophy
              size={25}
              className="rounded-full border-2 border-slate-400 w-[65px] h-[65px] p-3 text-custom-blue"
            />
            <h3 className="font-bold mt-3">Rated #1 on TripAdvisor</h3>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaTrophy
              size={25}
              className="rounded-full border-2 border-slate-400 w-[65px] h-[65px] p-3 text-custom-blue"
            />
            <h3 className="font-bold mt-3">Rated #1 on TripAdvisor</h3>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <FaTrophy
              size={25}
              className="rounded-full border-2 border-slate-400 w-[65px] h-[65px] p-3 text-custom-blue"
            />
            <h3 className="font-bold mt-3">Rated #1 on TripAdvisor</h3>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi
              neque, aliquet vel, dapibus id.
            </p>
          </div>
        </div>
      </section>

      <section id="gallery">
        <Carousel {...settings}>
          {hotels?.map((hotel, index) => (
            <div key={index} className="w-full">
              <img src={hotel.imageUrls[0]} alt={hotel.name} />
            </div>
          ))}
        </Carousel>
      </section>

      <section id="recent" className="container mx-auto mt-14 text-center">
        <div className="space-y-3">
          <h2 className="text-2xl font-bold">Latest Destinations</h2>
          <p>Most recent desinations added by our hosts</p>
          <div className="grid gap-4">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              {topRowHotels.map((hotel, index) => (
                <LatestDestinationCard key={index} hotel={hotel} />
              ))}
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {bottomRowHotels.map((hotel, index) => (
                <LatestDestinationCard key={index} hotel={hotel} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
