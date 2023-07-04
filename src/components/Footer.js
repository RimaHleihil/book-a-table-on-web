import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import littleLemonImageFooter from "../assets/logo_footer.png";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto:info@littlelemonrestaurant.com",
  },
  {
    icon: faFacebook,
    url: "https://www.facebook.com/LittleLemonRestaurant",
  },
  {
    icon: faTwitter,
    url: "https://twitter.com/LittleLemonRestaurant",
  },
  {
    icon: faInstagram,
    url: "https://www.instagram.com/littlelemonrestaurant/",
  },
];

function Footer() {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <img
            style={{ paddingLeft: "1rem" }}
            width="150rem"
            height="auto"
            src={littleLemonImageFooter}
            alt="Little Lemon Chicago Restaurant"
          />
        </div>
        <div className="col">
          <h6>Navigation</h6>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#about-section">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h6>Contact</h6>
          <ul>
            <li>123 Home Road</li>
            <li> Main District, Captial City</li>
            <li>Canada</li>
            <li>+1 (444) 123-4567</li>
          </ul>
        </div>
        <div className="col">
          <h6>Social Media Links</h6>
          <div className="row">
            {socials.map(({ icon, url }) => (
              <div className="col-2">
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    icon={icon}
                    className="mr-3 img-fluid"
                    size="2x"
                    key={url}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;