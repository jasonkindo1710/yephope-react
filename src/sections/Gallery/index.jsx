import { galleryList } from "../../constant";
import "./index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import Carousel from "react-bootstrap/Carousel";

const Gallery = () => {
    return (
        <section class="gallery container mt-5">
            <h1>Gallery</h1>
            <div class="row">
                <Carousel fade>
                    {galleryList.map((item) => (
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={item.img}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

AOS.init();
export default Gallery;
