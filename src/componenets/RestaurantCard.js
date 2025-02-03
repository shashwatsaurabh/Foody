const RestaurantCard = ({ resmeta }) => {
    const { name, cloudinaryImageId, cuisines, avgRating, costForTwo, slaString } = resmeta.info;
  
    return (
      <div className="card">
        <div className="card-media">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
            alt={name}
            className="card-image"
          />
          {/* <div className="discount">40% OFF<p>Up to ₹80</p></div>
          <div className="pro-discount">PRO extra 15% OFF</div>
          <div className="delivery-time">{slaString || "N/A"}</div> */}
        </div>
        <div className="card-description">
          <div className="about-place">
            <div className="place">
              <p className="place-name">{name}</p>
              <p className="place-speciality">{cuisines?.join(", ") || "N/A"}</p>
            </div>
            <div className="place-review">
              <p className="rating">{avgRating || "--"}</p>
              <p className="per-person">{costForTwo || "N/A"}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default RestaurantCard;