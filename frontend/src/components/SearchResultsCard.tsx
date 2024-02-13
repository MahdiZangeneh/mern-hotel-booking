import { useState } from "react";
import { Link } from "react-router-dom";
import { HotelType } from "../../../backend/src/shared/types";
import { AiFillStar } from "react-icons/ai";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FullscreenImageViewer from "./FullscreenImageViewer";

type Props = {
  hotel: HotelType;
};

const SearchResultsCard = ({ hotel }: Props) => {
  const [fullscreenImages, setFullscreenImages] = useState<string[]>([]);
  const [showFullscreenViewer, setShowFullscreenViewer] =
    useState<boolean>(false);

  const handleImageClick = (images: string[]) => {
    setFullscreenImages(images);
    setShowFullscreenViewer(true);
  };

  const handleCloseFullscreenViewer = () => {
    setShowFullscreenViewer(false);
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 border border-slate-300 rounded-lg p-8 gap-8">
      <Carousel {...settings}>
        {hotel.imageUrls.map((image, index) => (
          <div
            key={index}
            className="h-[300px]"
            onClick={() => handleImageClick(hotel.imageUrls)}
          >
            <img
              src={image}
              alt={hotel.name}
              className="rounded-md w-full h-full object-cover object-center cursor-pointer"
            />
          </div>
        ))}
      </Carousel>
      <div className="grid grid-rows-[1fr_2fr_1fr]">
        <div>
          <div className="flex items-center">
            <span className="flex">
              {Array.from({ length: hotel.starRating }).map((_, index) => (
                <AiFillStar key={index} className="fill-yellow-400" />
              ))}
            </span>
            <span className="ml-1 text-sm">{hotel.type}</span>
          </div>
          <Link
            to={`/detail/${hotel._id}`}
            className="text-2xl font-bold cursor-pointer"
          >
            {hotel.name}
          </Link>
        </div>

        <div>
          <div className="line-clamp-4">{hotel.description}</div>
        </div>

        <div className="grid grid-cols-2 items-end whitespace-nowrap">
          <div className="flex gap-1 items-center">
            {hotel.facilities.slice(0, 3).map((facility, index) => (
              <span
                key={index}
                className="bg-slate-300 p-2 rounded-lg font-bold text-xs whitespace-nowrap"
              >
                {facility}
              </span>
            ))}
            <span className="text-sm">
              {hotel.facilities.length > 3 &&
                `+${hotel.facilities.length - 3} more`}
            </span>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="font-bold">
              MYR{hotel.pricePerNight} per night
            </span>
            <Link
              to={`/detail/${hotel._id}`}
              className="bg-custom-gray text-white h-full p-2 font-bold text-xl max-w-fit transition-colors duration-300 ease-in-out hover:bg-custom-blue"
            >
              View More
            </Link>
          </div>
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

export default SearchResultsCard;
