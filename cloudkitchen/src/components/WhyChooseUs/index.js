import "./index.css";

const Chooseus = () => (
  <div className="container">
    <div>
      <div>
        <h1>Why Choose Us?</h1>
        <p>
          We use both original recipes and classNameic versions of famous food
          items.
        </p>
      </div>
      <div className="fullCardsContainer">
        <div className="card">
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-serve.png"
            className="wcu-card-image"
            alt="f1"
          />
          <h1>Food Service</h1>
          <p>
            Experience fine dining at the comfort of your home. All our orders
            are carefully packed and arranged to give you the nothing less than
            perfect.
          </p>
        </div>
        <div className="card">
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/fruits-img.png"
            className="wcu-card-image"
            alt="f2"
          />
          <h1>Fresh Food</h1>
          <p>
            The Fresh Food group provides fresh-cut fruits and vegetables
            directly picked from our partner farms and farm houses so that you
            always get them tree to plate.
          </p>
        </div>
        <div className="card">
          <img
            src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/offers-img.png"
            className="wcu-card-image"
            alt="f3"
          />
          <h1>Best Offers</h1>
          <p>
            Food Coupons &amp; Offers upto
            <span className="offers"> 50% OFF </span>
            and Exclusive Promo Codes on All Online Food Orders.
          </p>
        </div>
      </div>
    </div>

    <form className="form-inline searchForm">
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  </div>
);

export default Chooseus;
