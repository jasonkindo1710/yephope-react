import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;

    if (currentScrollPos === 0) {
      document.getElementById("navbar").style.top = "0";
      document.getElementById("navbar").style.backgroundColor = "transparent";
    } else if (currentScrollPos > 130) {
      document.getElementById("navbar").style.backgroundColor = "hsl(0,0%,5%)";
      document.getElementById("navbar").style.width = "100%";
    }
  };

  return (
    <nav id="navbar">
      <div class="container-lg nav-info">
        <div class="logo">
          <a href="#home">Yephope</a>
        </div>
        <div className="blank"></div>
        <input type="checkbox" id="check" />
        <label for="check" className="checkbtn">
          <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
        </label>
        <div class="menu ">
          <ul>
            <li>
              <a href="#sponsorsection">Sponsors</a>
            </li>
            <li>
              <a href="#gallerysection">Gallery</a>
            </li>
            <li>
              <a href="#team">Members</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
