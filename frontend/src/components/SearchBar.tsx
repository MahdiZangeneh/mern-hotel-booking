import { FormEvent, useState } from "react";
import { useSearchContext } from "../contexts/SearchContext";
import { MdTravelExplore, MdCalendarToday } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const search = useSearchContext();
  const navigate = useNavigate();

  const [destination, setDestination] = useState<string>(search.destination);
  const [checkIn, setCheckIn] = useState<Date>(search.checkIn);
  const [checkOut, setCheckOut] = useState<Date>(search.checkOut);
  const [adultCount, setAdultCount] = useState<number>(search.adultCount);
  const [childCount, setChildCount] = useState<number>(search.childCount);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    search.saveSearchValues(
      destination,
      checkIn,
      checkOut,
      adultCount,
      childCount
    );
    navigate("/search");
  };

  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1);
  return (
    <form
      onSubmit={handleSubmit}
      className="-mt-8 p-3 bg-black rounded-t grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 items-center gap-4"
    >
      <div className="flex flex-row items-center flex-1 bg-black p-2 border-r-2 border-custom-gray">
        <input
          placeholder="Where are you going?"
          className="text-md w-full focus:outline-none text-white bg-black"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
        />
        <MdTravelExplore
          size={25}
          className="fill-custom-gray hover:fill-white transition-colors duration-300 ease-in-out"
        />
      </div>

      <div className="flex px-2 py-1 gap-2 bg-black border-r-2 border-custom-gray">
        <label className="items-center flex text-gray-400">
          Adults:{" "}
          <input
            className="w-full p-1 focus:outline-none font-bold text-gray-400 bg-black"
            type="number"
            min={1}
            max={20}
            value={adultCount}
            onChange={(event) => setAdultCount(parseInt(event.target.value))}
          />
        </label>
        <label className="items-center flex text-gray-400">
          children:{" "}
          <input
            className="w-full p-1 focus:outline-none font-bold bg-black"
            type="number"
            min={0}
            max={20}
            value={childCount}
            onChange={(event) => setChildCount(parseInt(event.target.value))}
          />
        </label>
      </div>

      <div className="flex flex-row items-center flex-1 bg-black p-2 border-r-2 border-custom-gray">
        <DatePicker
          selected={checkIn}
          onChange={(date) => setCheckIn(date as Date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-in Date"
          className="w-full focus:outline-none bg-black text-gray-400"
          wrapperClassName="w-full"
        />
        <MdCalendarToday
          size={25}
          className="fill-custom-gray hover:fill-white transition-colors duration-300 ease-in-out"
        />
      </div>
      <div className="flex flex-row items-center flex-1 bg-black p-2 border-r-2 border-custom-gray">
        <DatePicker
          selected={checkOut}
          onChange={(date) => setCheckOut(date as Date)}
          selectsStart
          startDate={checkIn}
          endDate={checkOut}
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-out Date"
          className="w-full focus:outline-none bg-black text-gray-400"
          wrapperClassName="w-full"
        />
        <MdCalendarToday
          size={25}
          className="fill-custom-gray hover:fill-white transition-colors duration-300 ease-in-out"
        />
      </div>
      <div className="flex gap-1">
        <button className="w-2/3 bg-custom-gray text-white h-full p-2 font-bold text-xl transition-colors duration-300 ease-in-out hover:bg-slate-400">
          Search
        </button>
        <button className="w-1/3 bg-custom-gray text-white h-full p-2 font-bold text-xl transition-colors duration-300 ease-in-out hover:bg-slate-400">
          Clear
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
