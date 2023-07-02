import "./contact.scss"

const Contact = () => {
    return (
        <div className="contact">
            <h3>We are Open for talking</h3>
            <h4>Fill the form below</h4>
            <form className="contact-form">
                <div>
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Second name" />
                </div>
                <input type="email" placeholder="Email address" />
                <input type="text" placeholder="Subject" />
                <textarea type="text" placeholder="Message" />

                <button>Send message</button>
            </form>
        </div>
    )
}

export default Contact
