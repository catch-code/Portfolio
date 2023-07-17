import "./footer.scss"

import logo from "../../../assets/png/logo.png"

const Footer = () => {
    return (
        <footer className="footer p-3 bg-white ">
            <div className="top d-flex justify-content-evenly flex-row row">
                <div className="catch-code col-12 col-lg-2 mt-3">
                    <div className="logo">
                        <img src={logo} alt="Cach Code" />
                    </div>
                    <p className="mt-3">You can easily order your system in any field and our team will design and develop it in a creative way</p>
                </div>
                <div className="mt-5 col-sm-6 col-lg-2">
                    <h3 className="my-3">Sections</h3>
                    <p>Full Stack Development</p>
                    <p>Mobile App Development</p>
                    <p>UI UX Design</p>
                    <p>AI Models</p>
                    <p>IoT</p>
                </div>
                <div className="mt-5 col-sm-6 col-lg-2">
                    <h3 className="my-3">Activities</h3>
                    <p>Our Projects</p>
                    <p>Reviews</p>
                </div>
                <div className="mt-5 col-sm-6 col-lg-2">
                    <h3 className="my-3">Contact Us</h3>
                    <p>catchcode.tech@gmail.com</p>
                    <p>Cairo, Egypt</p>
                </div>
                <div className="mt-5 col-sm-6 col-lg-2">
                    <h3 className="my-3">Subscribe to our newsletter</h3>
                    <p className="neutral-600">You can subscribe to our newsletter to catch up with our news services and projects.</p>
                    <form>
                        <input className="p-3 bg-white d-block" type="email" placeholder="Enter your email" />
                        <button className="my-3 py-3 text-white px-4">Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="down mt-5">
                <p className="">Copyright &copy; 2023 Catch Code</p>
                <div className="social-media">

                </div>
            </div>
        </footer>
    )
}

export default Footer