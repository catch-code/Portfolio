import homeBanner from "../../../assets/imgs/homeBanner.gif";
import "./banner.scss";
function Banner() {
  return (
    <div className="container  banner" id="home">
      <div className="els"></div>

      <div className="row align-items-center justify-content-between">
        <div className="col-lg-6 col-12">
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
        <div className="col-lg-4 col-12">
          <img src={homeBanner} alt="manworking" />
        </div>
      </div>
    </div>
  );
}

export default Banner;
