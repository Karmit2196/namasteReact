import './App.css';

const Header = () => {
  return(<div className='header'>
    <div className='logo-container'>
      <img className='logo' src="https://tse3.mm.bing.net/th?id=OIP.-Yyvp72aoLShDLLKl_-K0AAAAA&pid=Api&P=0&h=180 " alt="" />
    </div>
    <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
    </div>
  </div>)
}
function App() {
  return (
    <div className='app'>
      {Header()}
    </div>
  );
}

export default App;
