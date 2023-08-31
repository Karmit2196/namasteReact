
const RestrauntCard = (props) => {
    const { resData } = props;
    const{cloudinaryImageId,name,cuisines,avgRating}= resData.info;
    return (
      <div
        className="res-card"
        style={{
          backgroundColor: "#f0f0f0",
        }}
      >
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="res-logo" className="res-logo" />
        <h3>{name}</h3>
        <h4>
        {/* <h4>Cuisines - {cuisines.join(',')}</h4> */}
        </h4>
  
        <h4>Raitings - {avgRating}</h4>
        {/* <h4>Delivery Time - {resData.info.sla.deliveryTime}</h4> */}
      </div>
    );
  };
  

  export default RestrauntCard;