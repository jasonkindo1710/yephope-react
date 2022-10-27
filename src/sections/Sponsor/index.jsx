import { sponsorList } from "../../constant";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const Sponsor = () => {
  return (
    <section className="sponsor container mt-5" id="sponsorsection">
      <h1>Sponsor List</h1>
      <h2 className="mb-3">
        Thanks to all our sponsors this year. 
      </h2>
      <h2 className="mb-3">Your contributon is what motivates our team to get better next year !</h2>
      <h2>We have raised total amount of &nbsp; <span className="total">15.500.000 dong</span></h2>
      <div className="container-fluid fancy-gallery mb-5">
        <div className="row mt-4 mb-5">
          {sponsorList.map((item, index) => (
            <div
              className="item col-sm-6 col-md-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              key={index}
            >
              <a
                href={item?.image}
                className="mb-4 col-6 col-sm-4 img-fluid"
                data-fancybox="gallery"
                data-caption={`${item.title} - ${item.value}`}
              >
                <img src={item?.image} width="100%" height="100%" />
              </a>
              <div className="mb-3 d-flex justify-content-center title">
                <h3>
                  {item.title} - {item.value}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
AOS.init();
export default Sponsor;
