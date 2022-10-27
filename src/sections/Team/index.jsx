import { Container } from "react-bootstrap";
import mem1 from "../../assets/images/Team/mem1.jpg";
import mem2 from "../../assets/images/Team/mem2.jpg";
import mem3 from "../../assets/images/Team/mem3.jpg";
import mem4 from "../../assets/images/Team/mem4.jpg";
import mem5 from "../../assets/images/Team/mem5.jpg";
import mem6 from "../../assets/images/Team/mem6.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons'


import "./index.scss";

const Team = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1,
    },
  };

  return (
    <Container className="section-team" id="team">
      <div className="team-title text-center">
        <h1 className="fw-bold fs-1">Our Team</h1>
      </div>

      <Carousel responsive={responsive}>
      <div className="profile">
      <div className="img-box">
          <img className="d-block crs-img" src={mem1} alt="First slide" />
          <ul>
            <a href="https://www.facebook.com/">
              <li>
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              </li>
            </a>
            <a href="https://www.instagram.com/">
              <li>
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </li>
            </a>
            <a href="https://www.linkedin.com/">
              <li>
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </li>
            </a>
          </ul>
        </div>
      <div className="profile-info d-flex justify-content-center">
      <h2>Cozy (C) - </h2>
      <h3 className="mt-auto">&nbsp;Midfielder</h3>
      </div>
        
      </div>
      <div className="profile">
      <div className="img-box">
          <img className="d-block crs-img" src={mem2} alt="Second slide" />
          <ul>
            <a href="https://www.facebook.com/">
              <li>
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              </li>
            </a>
            <a href="https://www.instagram.com/">
              <li>
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </li>
            </a>
            <a href="https://www.linkedin.com/">
              <li>
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </li>
            </a>
          </ul>
        </div>
      <div className="profile-info d-flex justify-content-center">
      <h2>Oải - </h2>
      <h3 className="mt-auto">&nbsp;Forward</h3>
      </div>
        
      </div>
      <div className="profile">
      <div className="img-box">
          <img className="d-block crs-img" src={mem3} alt="Second slide" />
          <ul>
            <a href="https://www.facebook.com/">
              <li>
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              </li>
            </a>
            <a href="https://www.instagram.com/">
              <li>
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </li>
            </a>
            <a href="https://www.linkedin.com/">
              <li>
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </li>
            </a>
          </ul>
        </div>
      <div className="profile-info d-flex justify-content-center">
      <h2>Đức Đắc - </h2>
      <h3 className="mt-auto">&nbsp;Center Back</h3>
      </div>
        
      </div>
      <div className="profile">
      <div className="img-box">
          <img className="d-block crs-img" src={mem4} alt="Second slide" />
          <ul>
            <a href="https://www.facebook.com/">
              <li>
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              </li>
            </a>
            <a href="https://www.instagram.com/">
              <li>
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </li>
            </a>
            <a href="https://www.linkedin.com/">
              <li>
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </li>
            </a>
          </ul>
        </div>
      <div className="profile-info d-flex justify-content-center">
      <h2>Khánh Xoăn - </h2>
      <h3 className="mt-auto">&nbsp;Midfielder</h3>
      </div>
        
      </div>
      <div className="profile">
      <div className="img-box">
          <img className="d-block crs-img" src={mem5} alt="Second slide" />
          <ul>
            <a href="https://www.facebook.com/">
              <li>
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              </li>
            </a>
            <a href="https://www.instagram.com/">
              <li>
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </li>
            </a>
            <a href="https://www.linkedin.com/">
              <li>
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </li>
            </a>
          </ul>
        </div>
      <div className="profile-info d-flex justify-content-center">
      <h2>Thành Dương - </h2>
      <h3 className="mt-auto">&nbsp;Winger</h3>
      </div>
        
      </div>
      <div className="profile">
      <div className="img-box">
          <img className="d-block crs-img" src={mem6} alt="Second slide" />
          <ul>
            <a href="https://www.facebook.com/">
              <li>
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              </li>
            </a>
            <a href="https://www.instagram.com/">
              <li>
                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
              </li>
            </a>
            <a href="https://www.linkedin.com/">
              <li>
                <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
              </li>
            </a>
          </ul>
        </div>
      <div className="profile-info d-flex justify-content-center">
      <h2>Son Heung Vinh - </h2>
      <h3 className="mt-auto">&nbsp;Forward</h3>
      </div>
        
      </div>
      </Carousel>
    </Container>
  );
};

export default Team;
