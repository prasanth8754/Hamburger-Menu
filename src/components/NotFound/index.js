import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="home-cont">
    <Header />
    <img
      className="not-found-img"
      src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      alt="not found"
    />
    <h1 className="not-found-h1">Lost Your Way?</h1>
    <p className="not-found-p">
      Sorry, we cannot find that page. You will find lots to explore on the home
      page
    </p>
  </div>
)

export default Home
