import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-cont">
    <Header />
    <img
      className="home-img-sm"
      src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
      alt="home"
    />
    <img
      className="home-img-md"
      src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
      alt="home"
    />
  </div>
)

export default Home
