import React, { useRef } from "react";
import Slider from "react-slick"; // Import the Slider component
import { GrPrevious, GrNext } from "react-icons/gr"; // Import icons
import "slick-carousel/slick/slick.css"; // Import slick CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick-theme CSS

const Events = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable default arrows
    responsive: [
      {
        breakpoint: 1024, // Modify this to fit screen sizes if necessary
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  const goToPrevious = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className="overflow-hidden flex flex-col">
      {/* Slider Section */}
      <section className="w-[99vw] flex justify-center items-center relative mb-8 my-3 ml-2">
        <div className="w-[97vw] md:w-[99vw] slider-container">
          <Slider ref={sliderRef} {...settings}>
            {data.map((d, index) => (
              <div key={index} className="h-[540px] md:h-[450px]">
                <img
                  src={d.url}
                  className="w-full h-full object-scale-down select-none"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </Slider>

          {/* Custom Arrows */}
          <button
            className="absolute top-1/2 left-5 transform -translate-y-1/2 z-10 p-2 rounded bg-gray-200 hover:bg-gray-300"
            onClick={goToPrevious}
          >
            <GrPrevious size={55} />
          </button>
          <button
            className="absolute top-1/2 right-5 transform -translate-y-1/2 z-10 p-2 rounded bg-gray-200 hover:bg-gray-300"
            onClick={goToNext}
          >
            <GrNext size={55} />
          </button>
        </div>
      </section>

      {/* Event List Section */}
      <section className="mx-56 w-auto bg-blue-100 rounded-md p-5 mb-10"> 
        <h1 className="text-4xl font-bold text-center">EVENTS</h1>
        <hr className="m-auto w-32 border-2 rounded border-blue-400 mt-3" />

        {/* Event List */}
        <div className="mt-6 flex flex-wrap items-center justify-center ">
          {eventList.map((event, index) => (
            <div key={index} className="flex flex-row  items-center border-2 border-gray-400 gap-2 p-5 justify-between w-full text-center mb-4">
                
              <span className="font-semibold text-lg">{event.date}</span>
              <span className="text-gray-600 text-2xl">{event.title}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Data for the slider images
const data = [
  { url: "/img/pic-0.jpg" },
  { url: "/img/pic-2.jpg" },
  { url: "/img/pic-3.jpg" },
  { url: "/img/pic-4.jpg" },
//   { url: "/img/pic-5.jpg" },
//   { url: "/img/pic-6.jpg" },
//   { url: "/img/pic-7.jpg" },
];

// Event data with date and title
const eventList = [
  { title: "Music Festival", date: "Sep 20, 2024" },
  { title: "Art Exhibition", date: "Oct 05, 2024" },
  { title: "Tech Conference", date: "Nov 12, 2024" },
  { title: "Film Premiere", date: "Dec 03, 2024" },
  { title: "Food Festival", date: "Jan 25, 2025" },
];

export default Events;
