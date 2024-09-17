import React, { useRef, useEffect } from "react";
import Footer from "../Components/Footer";
import { useAuth } from "../context/contextapi";

const Home = () => {
  const { user, userdata } = useAuth();
  const contactSectionRef = useRef(null);
  useEffect(() => {
    userdata();
  }, []);

  return (
    <div className={`min-h-screen `}>
      <section className="relative bg-orange-200/40 mx-5 my-3 h-[450px] md:text-right ">
        {user && <div className="mx-3 mt-1 text-right ">welcome {user.username}</div>}
        <div className="relative z-10 py-16">
          <div className="md:mr-48">
            <h2 className="md:text-6xl md:block flex justify-center text-3xl mt-20  font-extrabold text-gray-900 mb-4">
              Dare to Dream
            </h2>
            <p className="text-lg text-gray-700 md:mx-0 mx-5 font-medium">
              Work to Achieve: Your Future Starts Today!
            </p>
          </div>
          <div className="flex justify-center mt-36 space-x-3">
            <span className="w-3 h-3 rounded-full bg-orange-400"></span>
            <span className="w-3 h-3 rounded-full bg-orange-400"></span>
            <span className="w-3 h-3 rounded-full bg-orange-400"></span>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-blue-100 md:mx-56 my-5 bg-cover bg-center p-10 text-center">
        <h2 className="text-black text-3xl mb-8 font-bold">Upcoming Events</h2>
        <ul className="list-none p-0 flex flex-wrap justify-center mb-8">
          <li className="bg-white p-5 m-2 rounded-md shadow-sm md:basis-1/3">
            Annual Alumni Meetup - October 15, 2024
          </li>
          <li className="bg-white p-5 m-2 rounded-md shadow-sm md:basis-1/3">
            Tech Talks by Alumni - November 1, 2024
          </li>
          <li className="bg-white p-5 m-2 rounded-md shadow-sm md:basis-1/3">
            Networking Event - December 5, 2024
          </li>
        </ul>
      </section>

      <section className="bg-blue-100 md:mx-56 md:h-[230px] h-fit rounded-md p-10 md:mb-5 mb-10">
        <h2 className="text-center text-4xl font-bold mb-5">
          Join the Network
        </h2>
        <p className="text-center text-xl">
          Sign up to become a part of our growing alumni community or log in to
          connect with other members.
        </p>
        <div className="cta-buttons flex my-5 m-auto justify-center">
          <a href="#" className="bg-blue-500 p-2 mx-2 rounded-md text-white">
            Sign Up
          </a>
          <a href="#" className="bg-blue-500 p-2 mx-2 rounded-md text-white">
            Login
          </a>
        </div>
      </section>
      <div id="contact-section" ref={contactSectionRef}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
