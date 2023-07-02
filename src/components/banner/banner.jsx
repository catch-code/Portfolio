import homeBanner from "../../assets/imgs/homeBanner.gif";
import "./banner.scss";
function Banner() {
  return (
    <div className="row banner">
        <div className="ellipis"></div>
      <div className="col-6">
        <div className="textContent">
          <h2>Developing your system right now !</h2>
          <div>
            <h4>
              You can easily order your system in any field and our team will
              design and develop it in a creative way
            </h4>
          </div>
        </div>
      </div>
      <div className="col-6">
        <img src={homeBanner} alt="manworking" />
      </div>
    </div>
  );
}

export default Banner;
