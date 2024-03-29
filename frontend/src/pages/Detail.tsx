import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "react-query";
import * as apiClient from "./../api-client";
import GuestInfoForm from "../forms/GuestInfoForm/GuestInfoForm";
import FullscreenImageViewer from "./../components/FullscreenImageViewer";

const Detail = () => {
  const { hotelId } = useParams();
  const { data: hotel } = useQuery(
    "fetchHotelById",
    () => apiClient.fetchHotelById(hotelId as string),
    {
      enabled: !!hotelId,
    }
  );
  useEffect(() => {
    window.scrollTo({
      top: 500,
      behavior: "smooth",
    });
  }, []);

  const [fullscreenImages, setFullscreenImages] = useState<string[]>([]);
  const [showFullscreenViewer, setShowFullscreenViewer] =
    useState<boolean>(false);

  if (!hotel) {
    return <></>;
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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

  const handleImageClick = (images: string[]) => {
    setFullscreenImages(images);
    setShowFullscreenViewer(true);
  };

  const handleCloseFullscreenViewer = () => {
    setShowFullscreenViewer(false);
  };

  return (
    <div className="container mx-auto space-y-6">
      <div>
        <span className="flex">
          {Array.from({ length: hotel.starRating }).map((_, index) => (
            <AiFillStar key={index} className="fill-yellow-400" />
          ))}
        </span>
        <h1 className="text-3xl font-bold">{hotel.name}</h1>
      </div>

      <div className="">
        <Carousel {...settings}>
          {hotel.imageUrls.map((image, index) => (
            <div
              key={index}
              className="h-[450px]"
              onClick={() => handleImageClick(hotel.imageUrls)}
            >
              <img
                src={image}
                alt={hotel.name}
                className="rounded-md w-full h-full object-cover object-center p-2 cursor-pointer"
              />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
        {hotel.facilities.map((facility, index) => (
          <div key={index} className="border border-slate-300 rounded-sm p-3">
            {facility}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr]">
        <div className="whitespace-pre-line">{hotel.description}</div>
        <div className="h-fit">
          <GuestInfoForm
            pricePerNight={hotel.pricePerNight}
            hotelId={hotel._id}
          />
        </div>
      </div>

      {showFullscreenViewer && (
        <FullscreenImageViewer
          images={fullscreenImages}
          onClose={handleCloseFullscreenViewer}
        />
      )}
    </div>
  );
};

export default Detail;
