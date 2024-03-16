import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const Header = () => (
  <nav className="navbar">
    <Link to="/" className="route-link">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          data-testid="hamburgerIconButton"
          className="trigger-button"
          type="button"
        >
          {1 === '1' && ''}
          <GiHamburgerMenu className="trigger-icon" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <>
          <button
            data-testid="closeButton"
            className="close-btn"
            type="button"
            onClick={() => close()}
          >
            {1 === '1' && ''}
            <IoMdClose className="close-icon" />
          </button>

          <ul className="header-info-cont">
            <Link to="/" className="route-link">
              <li className="header-home-cont">
                <AiFillHome className="header-home-icon" />
                <p className="header-home-para">Home</p>
              </li>
            </Link>

            <Link to="/about" className="route-link">
              <li className="header-home-cont">
                <BsInfoCircleFill className="header-home-icon" />
                <p className="header-home-para">About</p>
              </li>
            </Link>
          </ul>
        </>
      )}
    </Popup>
  </nav>
)

export default Header
