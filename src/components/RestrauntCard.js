
// const RestrauntCard = (props) => {
//     const { resData } = props;
//     const{cloudinaryImageId,name,cuisines,avgRating}= resData.info;
//     return (
//       <div
//         className="p-4 m-4 w-[250PX] bg-gray-200 hover:bg-gray-300"
//       >
//         <img className='rounded-lg' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="res-logo"  />
//         <h3 className="font-bold">{name}</h3>
//         <h4 className="font-extralight">Cuisines - {cuisines.join(',')}</h4>
  
//         <h4>Raitings - {avgRating}</h4>
//         {/* <h4>Delivery Time - {resData.info.sla.deliveryTime}</h4> */}
//       </div>
//     );
//   };
  

//   export default RestrauntCard;




const RestrauntCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating } = resData.info;
  return (
    <div className="p-4 m-4 w-[250px] bg-white shadow-md hover:shadow-lg rounded-lg transition-transform transform hover:scale-105">
      <img
        className="rounded-lg h-40 w-full object-cover"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
        alt="Restaurant Logo"
      />
      <h3 className="font-bold text-lg mt-2">{name}</h3>
      <h4 className="font-extralight text-sm">Cuisines - {cuisines.join(', ')}</h4>
      <div className="flex items-center mt-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-4 h-4 text-yellow-500 mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
        <span className="text-yellow-500">{avgRating}</span>
      </div>
    </div>
  );
};

export default RestrauntCard;
