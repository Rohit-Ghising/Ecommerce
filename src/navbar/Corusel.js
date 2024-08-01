import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import serviceIcon01 from '../images/product-1.png';
import serviceIcon02 from '../images/product-2.png';
import serviceIcon03 from '../images/product-3.png';

const Corusel= () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const services = [
    {
      icon: serviceIcon01,
      title: "Best Education",
      description: "Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum."
    },
    {
      icon: serviceIcon02,
      title: "Best Teachers",
      description: "Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum."
    },
    {
      icon: serviceIcon03,
      title: "Best Students",
      description: "Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum."
    },
    {
      icon: serviceIcon02,
      title: "Online Meeting",
      description: "Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum."
    },
    {
      icon: serviceIcon03,
      title: "Best Networking",
      description: "Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum."
    },
    {
      icon: serviceIcon02,
      title: "Best Networking",
      description: "Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum."
    },
    {
      icon: serviceIcon03,
      title: "Best Networking",
      description: "Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum."
    },
    {
      icon: serviceIcon02,
      title: "Best Networking",
      description: "Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum."
    },
    {
      icon: serviceIcon03,
      title: "Best Networking",
      description: "Suspendisse tempor mauris a sem elementum bibendum. Praesent facilisis massa non vestibulum."
    },
  ];

  return (
    <section className="services py-8 w-full">
      <div className=" max-w-7xl mx-auto px-4  ">

        <Slider {...settings} className="owl-service-item w-full">
          {services.map((service, index) => (
            <div key={index} className="p-4 ">
              <div className=" shadow-md  bg-green-900 rounded-2xl p-10  w-full h-72 text-center">
                <div className="icon mb-4">
                  <img src={service.icon} alt={service.title} className="mx-auto" />
                </div>
                <div className="down-content">
                  <h4 className="text-xl text-white font-semibold mb-2">{service.title}</h4>
                  <p className=" text-white">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Corusel;