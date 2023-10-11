import HeroImage from "../../../assets/food4.webp";
export default function Bookhead() {
  return (
    <header className="reserve-table">
      <img
        className="header-reserve"
        src={HeroImage}
        alt="Little Lemon Ingredients"
      ></img>
      <div className="reserve-header-text">
        <h1 data-test-id="chead-reserve">Reserve a table</h1>
      </div>
    </header>
  );
}