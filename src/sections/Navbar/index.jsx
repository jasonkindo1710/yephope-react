import "./index.scss";

const Nav = () => {
  return (
    <nav className="container">
      <div class="logo">
        <a href="#home">Yephope</a>
      </div>


      <div class="menu ">
        <ul>
          <li>
            <a href="#sponsor">Sponsors</a>
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
