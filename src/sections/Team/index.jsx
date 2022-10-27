import { Container } from "react-bootstrap";
import alaba from "../../assets/images/Team/ALABA.jpeg";
import benzema from "../../assets/images/Team/BENZEMA.jpeg";
import camavinga from "../../assets/images/Team/CAMAVINGA.jpeg";
import courtois from "../../assets/images/Team/COURTOIS.jpeg";
import hazard from "../../assets/images/Team/HAZARD.jpeg";
import kroos from "../../assets/images/Team/KROOS.jpeg";
import lucas from "../../assets/images/Team/LUCAS.jpeg";
import modric from "../../assets/images/Team/MODRIC.jpeg";
import rodrygo from "../../assets/images/Team/RODRYGO.jpeg";
import rudiger from "../../assets/images/Team/RUDIGER.jpeg";
import valverde from "../../assets/images/Team/VALVERDE.jpeg";
import vinicius from "../../assets/images/Team/Vinicius.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
      <Carousel responsive={responsive} className="container">
        <div className="profile">
          <div className="img-box">
            <img className="d-block crs-img" src={modric} alt="First slide" />
            <div className="player_info_wrapper">
              <div className="player_clippath"></div>
              <div class="player_info">
                <strong class="player_info_number">7</strong>
                <p class="player_info_content">
                  <a itemprop="url" href="#">
                    <span itemprop="name">
                      <strong>Cozy (C)</strong>
                    </span>
                  </a>
                  <span itemprop="jobTitle">Midfielder</span>
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="img-box">
            <img className="d-block crs-img" src={benzema} alt="Second slide" />
            <div className="player_info_wrapper">
              <div className="player_clippath"></div>
              <div class="player_info">
                <strong class="player_info_number">9</strong>
                <p class="player_info_content">
                  <a itemprop="url" href="#">
                    <span itemprop="name">
                      <strong>Oải</strong>
                    </span>
                  </a>
                  <span itemprop="jobTitle">Forward</span>
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="img-box">
            <img className="d-block crs-img" src={hazard} alt="Second slide" />
            <div className="player_info_wrapper">
              <div className="player_clippath"></div>
              <div class="player_info">
                <strong class="player_info_number">24</strong>
                <p class="player_info_content">
                  <a itemprop="url" href="#">
                    <span itemprop="name">
                      <strong>Ali Thành Dương</strong>
                    </span>
                  </a>
                  <span itemprop="jobTitle">Winger</span>
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="img-box">
            <img className="d-block crs-img" src={rudiger} alt="Second slide" />
            <div className="player_info_wrapper">
              <div className="player_clippath"></div>
              <div class="player_info">
                <strong class="player_info_number">11</strong>
                <p class="player_info_content">
                  <a itemprop="url" href="#">
                    <span itemprop="name">
                      <strong>Đức Đắc</strong>
                    </span>
                  </a>
                  <span itemprop="jobTitle">Centerback</span>
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="img-box">
            <img className="d-block crs-img" src={kroos} alt="Second slide" />
            <div className="player_info_wrapper">
              <div className="player_clippath"></div>
              <div class="player_info">
                <strong class="player_info_number">10</strong>
                <p class="player_info_content">
                  <a itemprop="url" href="#">
                    <span itemprop="name">
                      <strong>Khánh Xoăn</strong>
                    </span>
                  </a>
                  <span itemprop="jobTitle">Midfielder</span>
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="img-box">
            <img
              className="d-block crs-img"
              src={vinicius}
              alt="Second slide"
            />
            <div className="player_info_wrapper">
              <div className="player_clippath"></div>
              <div class="player_info">
                <strong class="player_info_number">14</strong>
                <p class="player_info_content">
                  <a itemprop="url" href="#">
                    <span itemprop="name">
                      <strong>Vinh Trịnh</strong>
                    </span>
                  </a>
                  <span itemprop="jobTitle">Winger</span>
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="img-box">
            <img className="d-block crs-img" src={alaba} alt="Second slide" />
            <div className="player_info_wrapper">
              <div className="player_clippath"></div>
              <div class="player_info">
                <strong class="player_info_number">26</strong>
                <p class="player_info_content">
                  <a itemprop="url" href="#">
                    <span itemprop="name">
                      <strong>Mạnh Refresh</strong>
                    </span>
                  </a>
                  <span itemprop="jobTitle">Centerback</span>
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="img-box">
            <img
              className="d-block crs-img"
              src={valverde}
              alt="Second slide"
            />
            <div className="player_info_wrapper">
              <div className="player_clippath"></div>
              <div class="player_info">
                <strong class="player_info_number">99</strong>
                <p class="player_info_content">
                  <a itemprop="url" href="#">
                    <span itemprop="name">
                      <strong>Bầu Đức</strong>
                    </span>
                  </a>
                  <span itemprop="jobTitle">Midfielder</span>
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="img-box">
            <img
              className="d-block crs-img"
              src={courtois}
              alt="Second slide"
            />
            <div className="player_info_wrapper">
              <div className="player_clippath"></div>
              <div class="player_info">
                <strong class="player_info_number">1</strong>
                <p class="player_info_content">
                  <a itemprop="url" href="#">
                    <span itemprop="name">
                      <strong>Lee Min Khôi</strong>
                    </span>
                  </a>
                  <span itemprop="jobTitle">Goalkeeper</span>
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="img-box">
            <img className="d-block crs-img" src={lucas} alt="Second slide" />
            <div className="player_info_wrapper">
              <div className="player_clippath"></div>
              <div class="player_info">
                <strong class="player_info_number">19</strong>
                <p class="player_info_content">
                  <a itemprop="url" href="#">
                    <span itemprop="name">
                      <strong>Ngọc Gà</strong>
                    </span>
                  </a>
                  <span itemprop="jobTitle">Left Back</span>
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="img-box">
            <img
              className="d-block crs-img"
              src={camavinga}
              alt="Second slide"
            />
            <div className="player_info_wrapper">
              <div className="player_clippath"></div>
              <div class="player_info">
                <strong class="player_info_number">25</strong>
                <p class="player_info_content">
                  <a itemprop="url" href="#">
                    <span itemprop="name">
                      <strong>Trường Tàu</strong>
                    </span>
                  </a>
                  <span itemprop="jobTitle">Midfielder</span>
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="img-box">
            <img className="d-block crs-img" src={rodrygo} alt="Second slide" />
            <div className="player_info_wrapper">
              <div className="player_clippath"></div>
              <div class="player_info">
                <strong class="player_info_number">6</strong>
                <p class="player_info_content">
                  <a itemprop="url" href="#">
                    <span itemprop="name">
                      <strong>Zook</strong>
                    </span>
                  </a>
                  <span itemprop="jobTitle">Forward</span>
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </Container>
  );
};

export default Team;
