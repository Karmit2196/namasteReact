
import { useEffect, useState } from 'react';
import RestrauntCard from './RestrauntCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/api/seo/getListing?lat=23.144477092557135&lng=72.59576804274302');
    const json = await data.json();
    setListOfRes(json.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRes(json.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants);
  };

  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search">
          <input
            type="text"
            className="border border-solid border-green-600 rounded-lg px-4 py-2"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search Restaurants"
          />
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-4"
            onClick={() => {
              const filteredRes = listOfRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRes(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-lg ml-4"
          onClick={() => {
            const filteredList = listOfRes.filter((res) => res.info.avgRating > 4);
            setListOfRes(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((restaurant) => (
          <Link key={restaurant.info.id} to={`/restraunts/${restaurant.info.id}`}>
            <RestrauntCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

