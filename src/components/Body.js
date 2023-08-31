import {useEffect, useState} from 'react'
import RestrauntCard from "./RestrauntCard";
import { resObj } from "../Data";



const Body = () => {
    const[listOfRes,setListOfRes]=useState(resObj)

    useEffect(()=>{
      fetchData();
    },[])

    const fetchData = async () => {
      const data= await fetch('https://www.swiggy.com/api/seo/getListing?lat=23.144477092557135&lng=72.59576804274302')
      const json = await data.json();
      setListOfRes(json.data.success.cards[1].card.card.gridElements.infoWithStyle.restaurants)

    }

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRes.filter((res) => res.info.rating.rating_text > 4);
            setListOfRes(filteredList)
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="res-container">
        {listOfRes.map((restaurant) => (
          <RestrauntCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
