import { Carousel, Container } from "react-bootstrap";
import mem1 from "../../assets/images/Team/mem1.jpg";
import mem2 from "../../assets/images/Team/mem2.jpg";
import mem3 from "../../assets/images/Team/mem3.jpg";
import anhBauDuc from "../../assets/images/Sponsor/anhBauDuc.JPG";
import anhDang from "../../assets/images/Sponsor/anhDang.JPG";
import anhDuong from "../../assets/images/Sponsor/anhDuong.JPG";
import "./index.scss";

const Team = () => {
  return (
    <Container>
      <div className="team-title text-center">
        <h1 className="fw-bold fs-1">Our Team</h1>
      </div>

      <div className="team-content mt-4">
        <Carousel fade>
          <Carousel.Item>
            <div className="d-flex flex gap-2">
              <img className="d-block w-25" src={mem1} alt="First slide" />
              <img className="d-block w-25" src={mem2} alt="Second slide" />
              <img className="d-block w-25" src={mem3} alt="Second slide" />
              <img className="d-block w-25" src={mem1} alt="Second slide" />
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className="d-flex flex justify-content-evenly gap-2">
              <img className="d-block w-25" src={mem3} alt="First slide" />
              <img className="d-block w-25" src={mem1} alt="Second slide" />
              <img className="d-block w-25" src={mem2} alt="Second slide" />
              <img className="d-block w-25" src={mem2} alt="Second slide" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  );
};

export default Team;
