import "./index.scss";


const Nav = () => {
  let prevScrollPos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;

      if (currentScrollPos === 0) {
        document.getElementById("navbar").style.top = "0";
        document.getElementById("navbar").style.backgroundColor = "transparent";

      } else if (currentScrollPos > 130) {
        document.getElementById("navbar").style.backgroundColor = "hsl(0,0%,5%)";
        document.getElementById("navbar").style.width = "100%";
      }
      prevScrollPos = currentScrollPos;
    }
  
  return (
    <nav  id="navbar">
    <div class="container nav-info">

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
    </div>
    </nav>
  );
};

export default Nav;
