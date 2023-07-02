import "./footer.scss"

import logo from "../../assets/png/logo.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="top">
                <div className="catch-code">
                    <div className="logo">
                        <img src={logo} alt="Cach Code" />
                    </div>
                    <p>You can easily order your system in any field and our team will design and develop it in a creative way</p>
                </div>
                <div className="sections">
                    <h3>Sections</h3>
                    <p>Full Stack Development</p>
                    <p>Mobile App Development</p>
                    <p>UI UX Design</p>
                    <p>AI Models</p>
                    <p>IoT</p>
                </div>
                <div className="activities">
                    <h3>Activities</h3>
                    <p>Our Projects</p>
                    <p>Reviews</p>
                </div>
                <div className="contact-us">
                    <h3>Contact Us</h3>
                    <p>catchcode.tech@gmail.com</p>
                    <p>Cairo, Egypt</p>
                </div>
                <div className="subscribe">
                    <h3>Subscribe to our newsletter</h3>
                    <p>You can subscribe to our newsletter to catch up with our news services and projects.</p>
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <button>Subscribe</button>
                    </form>
                </div>
            </div>
            <div className="down">
                <p>Copyright &cpy; ©2023 Catch code</p>
                <div className="social-media">

                </div>
            </div>
        </footer>
    )
}

export default Footer