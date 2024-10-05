import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, costForTwo, cuisines, avgRating } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(", ")}</h4>
      <h4>Ratings: {avgRating} stars</h4>
      <h4>Delivered In: {deliveryTime} mins</h4>
    </div>
  );
};

export default RestaurantCard;
