import "./App.css";

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
  const {resData} = props
  return(
    <div className='res-card' style={{
      backgroundColor:'#f0f0f0'
    }}>
      <img src="https://www.kelvinfarrell.ie/img/chipshop-1.jpg" alt="res-logo" className='res-logo' />
      <h3>{resData.name}</h3>
      <h4>{resData.cusine}</h4>
      <h4>{resData.stars}</h4>
      <h4>{resData.time} minutes</h4>

      </div>
  )
}

const resObj={
  name:'Cheese and Chips',
  cusine:'American',
  stars:'4.3',
  time:'20'

  
}
const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestrauntCard resData={resObj}/>

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
