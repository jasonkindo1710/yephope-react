import "./index.scss";
import { Container } from "react-bootstrap";
const Nav = () => {
  return (
    <nav className="container" >
      <div class="logo">Yephope</div>
      <div class="menu">
        <ul>
          <li>
            <a href="#sponsor" class="active">
              Sponsors
            </a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#team">Members</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
