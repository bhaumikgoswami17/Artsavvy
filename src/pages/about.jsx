import React, { useRef, useEffect } from "react";
import Header from "../components/Header/Header";
import MenImg from "../assets/men.png";
// import AboutImg from "../assets/about.png";
import Footer from "../components/Footer/Footer";
import { GoDotFill } from "react-icons/go";
import ProfileCards from "../components/ProfileCards/ProfileCards";



const About = () => {
  return (
    <>
      <Header />
      <div className="lg:flex  border-2 lg:pr-10 lg:my-10 my-4 lg:mx-28 mx-4 justify-center duration-700 hover:shadow-lg">
        <img className="mx-auto w-[490px]" src={MenImg} alt="" />
        <div className="flex flex-col items-center py-10">
          <h2 className="px-10 font-semibold text-3xl my-3 text-blue-900 ">
            Our Mission
          </h2>
          <p className="my-4 lg:px-10 px-4 lg:text-lg text-center md:text-md text-blue-800">
            {" "}
            To empower artists by providing a platform where their creativity is celebrated and accessible to art lovers around the world. We strive to make art more approachable, enabling clients to discover unique pieces and engage with artists to create personalized works that inspire and enrich their lives.{" "}
          </p>
          
        </div>
      </div>
      
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:mx-28 mx-4 gap-4 mb-8 font-sans ">
    <div className="px-4 py-6 border-2 bg-white rounded-lg duration-700 hover:shadow-lg">
      <h2 className="text-3xl font-semibold text-center py-3 ">Our Services</h2>
      <ul className="list-none space-y-4 lg:text-lg text-md ">
        <li className="flex items-start gap-2">
          <GoDotFill className="text-blue-900 mt-1" />
          <span>
            <span className="font-semibold">Art Showcase:</span> Artists display various forms of art, including paintings, sculptures, and digital works.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <GoDotFill className="text-blue-900 mt-1" />
          <span>
            <span className="font-semibold">Custom Commissions:</span> Clients collaborate with artists to create personalized artwork.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <GoDotFill className="text-blue-900 mt-1" />
          <span>
            <span className="font-semibold">Artist Profiles:</span> Explore artist bios, portfolios, and their creative journey.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <GoDotFill className="text-blue-900 mt-1" />
          <span>
            <span className="font-semibold">Art Events:</span> Updates on virtual and live exhibitions and auctions.
          </span>
        </li>
      </ul>
    </div>
    <div className="px-4 py-6 border-2 bg-white rounded-lg duration-700 hover:shadow-lg">
      <h2 className="text-3xl font-semibold text-center py-3 ">Our Values</h2>
      <ul className="list-none space-y-4 lg:text-lg text-md">
        <li className="flex items-start gap-2">
          <GoDotFill className="text-blue-900 mt-1" />
          <span>
            <span className="font-semibold">Integrity:</span> We operate with honesty, ensuring transparency in every interaction.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <GoDotFill className="text-blue-900 mt-1" />
          <span>
            <span className="font-semibold">Creativity : </span> Evolving our platform to inspire and meet artistic needs.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <GoDotFill className="text-blue-900 mt-1" />
          <span>
            <span className="font-semibold">Client Focus : </span> Prioritizing excellent service for both artists and clients.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <GoDotFill className="text-blue-900 mt-1" />
          <span>
            <span className="font-semibold">Diversity:</span> Celebrating diverse artistic styles and inclusive opportunities for all.
          </span>
        </li>
      </ul>
    </div>
  </div>

  <div className="font-sans">
    <div className="py-6">
    <h2 className="text-3xl text-center font-semibold ">Meet Our Team</h2>
    <p className="text-gray-700 text-center md:px-0 px-4 md:text-md text-sm">We’re a dynamic group of individuals who are passionate about what we do.</p>
    </div>
    <div>
      <ProfileCards />
    </div>
    
  </div>
      <Footer />
    </>
  );
};

export default About;
