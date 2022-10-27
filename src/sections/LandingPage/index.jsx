import logo from '../../assets/images/icon/Yephope-Logo.jpeg'
import './index.scss'
const LandingPage = () => {
    return ( 
        <div className="banner" id="home">
            <div class="banner-clip-path">
          <img
            class="img-logo"
            src={logo}
            alt=""
          />
        </div>
        <div class="banner-txt">
          <h1>Thanks to all our sponsors!</h1>
          <button>
          <a href='#sponsorsection'>
          See sponsor list
          </a>
          </button>
        </div>
        </div>
     );
}
 
export default LandingPage;