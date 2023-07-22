import Lottie from "react-lottie"
import bannerAnimation from "../../../assets/lottie/banner.json"
import "./banner.scss"

const Banner = () => {
  return (
    <div className="bannerHomePage bg-white">
      <div className="container banner" id="home">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-sm-12">
            <div className="textContent">
              <h2>
                <span>Developing</span> your system right now !
              </h2>
              <div>
                <h4>
                  You can easily order your system in any field and our team
                  will design and develop it in a creative way.
                </h4>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: bannerAnimation,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },
              }}
              width={350}
              height={300}
              isStopped={false}
              isPaused={false}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
