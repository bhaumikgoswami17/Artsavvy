import React from 'react';
import { Helmet } from 'react-helmet';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, Parallax } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Adjust path if necessary
import homeImage from '../assets/home1.webp';
import homeImage2 from '../assets/home5.jpeg';
import homeImage3 from '../assets/home6.webp';
import homeImage4 from '../assets/home7.jpg';
import CateCards from '../components/CateCards/CateCards';
import { useSelector } from 'react-redux';
import './App.css'

const Main = () => {
  const ACCOUNT_TYPE = useSelector(state => state.auth.accountType);
  const username = "Bhaumik";
  const show = true;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Artsavvy</title>
        <meta name="description" content="The place to get your work done" />
      </Helmet>

      <div className="Carcontainer">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{ delay: 6500, disableOnInteraction: false }}
          parallax={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Navigation, Pagination, Parallax]}
          className="mySwiper"
        >
          <SwiperSlide className="slide ">
            <div className="parallax-bg" data-swiper-parallax="-23%">
              <img className="Home" src={homeImage} alt="Freelansters" loading="lazy" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="parallax-bg" data-swiper-parallax="-23%">
              <img className="Home" src={homeImage2} alt="Freelansters" loading="lazy" />
            </div>
            <div className="title1" data-swiper-parallax="-300">
              <h1 className="swiper-h1">Welcome, {username}</h1>
              <h2 className="swiper-h2">{show ? 'Happy to see you back' : 'The place to get your work done'}</h2>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="parallax-bg" data-swiper-parallax="-23%">
              <img className="Home" src={homeImage3} alt="Freelansters" loading="lazy" />
            </div>
            <div className="title2" data-swiper-parallax="-300">
              <h1 className="swiper-h3"><br /></h1>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide">
            <div className="parallax-bg" data-swiper-parallax="-23%">
              <img className="Home" src={homeImage4} alt="Freelansters" loading="lazy" />
            </div>
            <div className="title4" data-swiper-parallax="-300">
              <h1 className="swiper-h4">Choose a perfect <br /> Artist Here</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Scroll Down Animation */}
      <div className="box-div">
        <div className="box">
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Website Features */}
      <section id="Website-des">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{
          position: "relative",
          marginTop: "128px",
          marginLeft: "50px",
          marginRight: "50px"
        }}>
          <path fill="#1cd6ce" fillOpacity="0.8" d="M0,256L60,224C120,192,240,128,360,128C480,128,600,192,720,192C840,192,960,128,1080,112C1200,96,1320,128,1380,144L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{
          position: "relative",
          marginTop: "-5px",
          marginLeft: "50px",
          marginRight: "50px"
        }}>
          <path fill="#1cd6ce" fillOpacity="0.8" d="M0,128L120,112C240,96,480,64,720,58.7C960,53,1200,75,1320,85.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
        </svg>

        <div className="glass">
          <h1 data-aos="fade-right" data-aos-offset="350" data-aos-duration="4000" data-aos-easing="ease-out" id="feat-h1">
            Why choose Artsavvy?
          </h1>
          <div data-aos="fade-right" data-aos-offset="300" data-aos-duration="4000" className="divider-h"></div>
          <div data-aos="fade-right" data-aos-offset="400" data-aos-duration="4000" data-aos-easing="ease-out">
            <p id="feat-p">
              Working for yourself has several advantages, whether you do it by founding your own company or by accepting numerous assignments as a freelancer. Flexibility, freedom of choice in projects and clients, and financial potential are all benefits of working as a freelancer. Many people in a variety of professions like to be their own boss, and freelancing is the simplest way to do so.
            </p>
          </div>
          <div className="g-button-div">
            <button data-aos="zoom-in" data-aos-offset="100" data-aos-duration="4000" data-aos-easing="ease-out" className="g-button">
              See More
            </button>
          </div>
          <img loading="lazy" data-aos="fade-down-left" data-aos-offset="400" data-aos-duration="4000" data-aos-easing="ease-out" id="g-img" src="https://ik.imagekit.io/bhanu1776/Freelansters/glass-right.png?updatedAt=1682608753541" alt="Freelanster" />
        </div>
      </section>

      {/* Categories */}
      <section>
        <div data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-out" data-aos-duration="4000" className="Features">
          <p id="s-specialty">Arts Categories</p>
        </div>
        <div data-aos="fade-right" data-aos-offset="150" data-aos-easing="ease-out" data-aos-duration="4000" id="divider2"></div>
        <CateCards />
        <div style={{ height: "150px" }}></div>
      </section>

      {/* Features Section */}
      <article id="Features-arc">
        <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-out" data-aos-duration="4000" className="Features">
          <p id="s-specialty">Artsavvy Specialty</p>
        </div>
        <div data-aos="fade-left" data-aos-offset="150" data-aos-easing="ease-out" data-aos-duration="4000" id="divider">
         
        </div>
        <div data-aos="fade-right" data-aos-offset="150" data-aos-easing="ease-out" data-aos-duration="4000" id="Features-div" style={{ position: "relative", marginTop: "50px" }}>
          <div>
            <h3>Post a Arts</h3>
            <p>A job posting is defined as an official advertisement created by the employer, human resources, or a recruiter to alert existing employees or job seekers regarding a job opening within the company.</p>
            <h3>Choose Provider</h3>
            <p>No job is too big or too small. We've got freelancers for job of any size or budget with extraordinary skill. <br /> <b>No job is complex. We can get it done!</b></p>
            <h3>Pay Securely</h3>
            <p>One pay for work when it has been completed and you're 100% satisfied with the quality using our milestone payment system.</p>
            <h3>We're here to help</h3>
            <p>Our talented team of recruiters can help you find the best freelancer for</p>
            <img loading="lazy"
            data-aos='flip-right'
            data-aos-offset='400'
            data-aos-easing="ease-out"
            data-aos-duration="4000"
            src="https://ik.imagekit.io/bhanu1776/Freelansters/Features.png?updatedAt=1682608753683" alt="" className="f-img" />
          </div>
        </div>
      </article>
    </>
  );
}

export default Main;
