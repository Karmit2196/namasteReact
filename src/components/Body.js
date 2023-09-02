import {useEffect, useState} from 'react'
import RestrauntCard from "./RestrauntCard";
import Shimmer from './Shimmer';


const Body = () => {
    const[listOfRes,setListOfRes]=useState([]);
    const[filteredRes, setFilteredRes]=useState([]);
    const[searchText, setSearchText]= useState("");

    useEffect(()=>{
      fetchData();
    },[])

    const fetchData = async () => {
      const data= await fetch('https://www.swiggy.com/api/seo/getListing?lat=23.144477092557135&lng=72.59576804274302')
      const json = await data.json();
      setListOfRes(json.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants)
      setFilteredRes(json.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    }


  return listOfRes.length===0?<Shimmer/>: (
    <div className="body">
      <div className="filter">
        <div className='seaarch'>
          <input type="text" className='search-box' value={searchText} onChange={(e)=>{
              setSearchText(e.target.value)
          }}/>
          <button
          onClick={()=>{
             const filteredRes=listOfRes.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));

             setFilteredRes(filteredRes)
          }}
          >Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter((res) => res.info.avgRating > 4);
            setListOfRes(filteredList)
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="res-container">
        {filteredRes.map((restaurant) => (
          <RestrauntCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
