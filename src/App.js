import "./App.css";
import { resObj } from "./Data";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://tse3.mm.bing.net/th?id=OIP.-Yyvp72aoLShDLLKl_-K0AAAAA&pid=Api&P=0&h=180 "
          alt=""
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestrauntCard = (props) => {
  const { resData } = props;
  const{image,name,cuisine,rating}= resData.info;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img src={image.url} alt="res-logo" className="res-logo" />
      <h3>{name}</h3>
      <h4>
        Cuisines - {cuisine.map((item) => item.name).join(", ")}
      </h4>

      <h4>Raitings - {rating.rating_text}</h4>
      <h4>Delivery Time - {resData.order.deliveryTime}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resObj.map((restaurant) => (
          <RestrauntCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
}

export default App;
