
const RestrauntCard = (props) => {
    const { resData } = props;
    const{cloudinaryImageId,name,cuisines,avgRating}= resData.info;
    return (
      <div
        className="p-4 m-4 w-[250PX] bg-gray-200 hover:bg-gray-300"
      >
        <img className='rounded-lg' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="res-logo"  />
        <h3 className="font-bold">{name}</h3>
        <h4 className="font-extralight">Cuisines - {cuisines.join(',')}</h4>
  
        <h4>Raitings - {avgRating}</h4>
        {/* <h4>Delivery Time - {resData.info.sla.deliveryTime}</h4> */}
      </div>
    );
  };
  

  export default RestrauntCard;