import logo from '../../assets/images/icon/Yephope-Logo.jpeg'
import './index.scss'
const LandingPage = () => {
    return ( 
        <div className="banner">
            <div class="banner-clip-path">
          <img
            class="img-logo"
            src={logo}
            alt=""
          />
        </div>
        <div class="banner-txt">
          <h1>Thanks to all our sponsors!</h1>
          
          <button>See sponsor list</button>
        </div>
        </div>
     );
}
 
export default LandingPage;