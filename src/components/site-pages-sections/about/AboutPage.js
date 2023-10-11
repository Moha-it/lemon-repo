import OrderImage from "../../../assets/food4.webp";
export default function AboutPage() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={OrderImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1>About us</h1>
      </div>
      <div>
          
          <p className="about-text">
          Little Lemon is an Italian Mediterranean-inspired cocktail and wine bar that takes pride in offering a 
          tantalizing menu centered around fresh seafood, succulent meats, flavorful charcuterie, and locally sourced ingredients.
               Our chefs skillfully craft dishes that highlight the natural flavors of high-quality ingredients,
               ensuring a remarkable dining experience. From ocean-fresh seafood to perfectly grilled meats, every bite at Little Lemon is a celebration of Mediterranean cuisine. Our commitment to using locally sourced ingredients guarantees freshness and showcases the region's best. Join us at Little Lemon and indulge in a memorable dining experience where Mediterranean flavors take center stage.
          </p>
      </div>
    </header>
  );
}