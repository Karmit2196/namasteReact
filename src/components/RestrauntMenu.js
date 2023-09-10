import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import MenuItems from "./MenuItems"; // Import the MenuItems component


const RestrauntMenu = () => {

  const {resId} = useParams();

  const resInfo = useRestrauntMenu(resId)

  if (resInfo == null) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;

  console.log(itemCards);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-semibold text-center text-purple-900 mb-4">{name}</h1>
        <p className="text-gray-600 text-lg text-center mb-6">
          Cuisine: {cuisines.join(", ")} | Cost for Two: {costForTwoMessage}
        </p>
  
        <h2 className="text-2xl text-purple-900 mb-4">Menu</h2>
        <MenuItems itemCards={itemCards} />

      </div>
    </div>
  );
      
  };

export default RestrauntMenu;
