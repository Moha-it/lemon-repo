import OrderImage from "../../../assets/food4.webp";
export default  function Order(){
    return (
        <header className="reserve-table">
          <img
            className="header-reserve"
            src={OrderImage}
            alt="Little Lemon Ingredients"
          ></img>
          <div className="reserve-header-text">
            <h1>Order Online</h1>
          </div>
        </header>
      );
}

