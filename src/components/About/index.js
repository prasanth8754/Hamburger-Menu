import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-cont">
    <Header />
    <img
      className="home-img-sm"
      src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
      alt="about"
    />
    <img
      className="home-img-md"
      src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
      alt="about"
    />
  </div>
)

export default Home
