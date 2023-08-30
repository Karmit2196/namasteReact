import {useState} from 'react'
import RestrauntCard from "./RestrauntCard";
import { resObj } from "../Data";



const Body = () => {
    const[listOfRes,setListOfRes]=useState(resObj)
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
          <RestrauntCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
