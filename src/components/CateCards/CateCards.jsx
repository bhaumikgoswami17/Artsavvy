import React from "react";
import "./CateCards.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import 'swiper/swiper-bundle.css'; // Adjust path if necessary
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const CateCards = () => {
  return (
    <>
    <Swiper
      id="container-cards-carousel"
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      modules={[Pagination, Navigation, EffectCoverflow]}
      className="catecards-slider"
    >
        <SwiperSlide
          style={{
            maxWidth: "max-content",
            maxHeight: "max-content",
            padding: "1rem",
            background: "transparent",
            borderRadius: "2rem",
          }}
        >
          <div
            data-aos="zoom-out-down"
            data-aos-offset="350"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            className="card-1 card"
          >
            <div className="card-content">
              <h2 className="card-title">Parlour</h2>
              <p className="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore, praesentium.
              </p>
              {/* <a href="/" className="button">
                Learn More
              </a> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            maxWidth: "max-content",
            maxHeight: "max-content",
            padding: "1rem",
            background: "transparent",
            borderRadius: "2rem",
          }}
        >
          <div
            data-aos="fade-right"
            data-aos-offset="350"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            className="card-2 card"
          >
            <div className="card-content">
              <h2 className="card-title">Painting</h2>
              <p className="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore, praesentium.
              </p>
              {/* <a href="/" className="button">
                Learn More
              </a> */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            maxWidth: "max-content",
            maxHeight: "max-content",
            padding: "1rem",
            background: "transparent",
            borderRadius: "2rem",
          }}
        >
          <div
            data-aos="fade-right"
            data-aos-offset="350"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            className="card-3 card"
          >
            <div className="card-content">
              <h2 className="card-title">Pottery</h2>
              <p className="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore, praesentium.
              </p>
              <a href="/" className="button">
                Learn More
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            maxWidth: "max-content",
            maxHeight: "max-content",
            padding: "1rem",
            background: "transparent",
            borderRadius: "2rem",
          }}
        >
          <div
            data-aos="fade-right"
            data-aos-offset="350"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            className="card-4 card"
          >
            <div className="card-content">
              <h2 className="card-title">Nail Art</h2>
              <p className="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore, praesentium.
              </p>
              <a href="/" className="button">
                Learn More
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            maxWidth: "max-content",
            maxHeight: "max-content",
            padding: "1rem",
            background: "transparent",
            borderRadius: "2rem",
          }}
        >
          <div
            data-aos="fade-left"
            data-aos-offset="350"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            className="card-5 card"
          >
            <div className="card-content">
              <h2 className="card-title">Mehendi</h2>
              <p className="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore, praesentium.
              </p>
              <a href="/" className="button">
                Learn More
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            maxWidth: "max-content",
            maxHeight: "max-content",
            padding: "1rem",
            background: "transparent",
            borderRadius: "2rem",
          }}
        >
          <div
            data-aos="fade-left"
            data-aos-offset="350"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            className="card-6 card"
          >
            <div className="card-content">
              <h2 className="card-title">Decoration</h2>
              <p className="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore, praesentium.
              </p>
              <a href="/" className="button">
                Learn More
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide
          style={{
            maxWidth: "max-content",
            maxHeight: "max-content",
            padding: "1rem",
            background: "transparent",
            borderRadius: "2rem",
          }}
        >
          <div
            data-aos="fade-left"
            data-aos-offset="350"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            className="card-7 card"
          >
            <div className="card-content">
              <h2 className="card-title">Stitching</h2>
              <p className="card-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore, praesentium.
              </p>
              <a href="/" className="button">
                Learn More
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="catecards-slider-control">
        <div className="swiper-button-prev slider-arrow">
          <FaChevronCircleLeft className="ion-icon" />
        </div>
        <div className="swiper-button-next slider-arrow">
          <FaChevronCircleRight className="ion-icon" />
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </>
  );
};

export default CateCards;
