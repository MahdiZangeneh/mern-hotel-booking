import React, { useState, useRef, useEffect } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

type Props = {
  images: string[];
  onClose: () => void;
};

const FullscreenImageViewer = ({ images, onClose }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const touchStartX = useRef<number | null>(null);

  const handleNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current !== null) {
      const diff = event.touches[0].clientX - touchStartX.current;
      if (diff > 50) {
        handlePrevImage();
        touchStartX.current = null;
      } else if (diff < -50) {
        handleNextImage();
        touchStartX.current = null;
      }
    }
  };

  const handleCloseViewer = () => {
    onClose();
  };

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 flex justify-center items-center z-50"
      style={{ margin: 0 }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => (touchStartX.current = null)}
    >
      <div className="relative max-w-full max-h-full">
        <img
          src={images[currentIndex]}
          alt="Fullscreen"
          className="max-w-full max-h-full"
        />
        <button
          className="absolute top-1/2 left-4 text-white"
          onClick={handlePrevImage}
        >
          <AiOutlineArrowLeft size={30} />
        </button>
        <button
          className="absolute top-1/2 right-4 text-white"
          onClick={handleNextImage}
        >
          <AiOutlineArrowRight size={30} />
        </button>
      </div>
      <button
        className="absolute top-4 right-4 text-white"
        onClick={handleCloseViewer}
      >
        Close
      </button>
    </div>
  );
};

export default FullscreenImageViewer;
