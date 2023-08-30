
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
  

  export default RestrauntCard;