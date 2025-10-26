import { Link } from "react-router-dom"

export default function Contact() {
    return (
        <>
        
            <div className="contactContainer">

                <Link to="/" className="goBack">Back</Link>

                <div className="contactBox">
                    <div className="leftPart">
                        <div className="contactTitle">Get in Touch</div>
                        <div className="contactSubTitle">We'd like to hear from You!</div>
                        <div className="contactParagraph">If you've experienced any problems/difficulty or simply want to get in touch with us, feel free to reach out with the help of the right-side form.</div>
                        <a className="email" href="mailto:podean.beni@gmail.com" title="Email">
                            <i className="fa-solid fa-envelope"></i> podean.beni@gmail.com
                        </a>

                        <div className="everySocialMedia">
                            <a href="https://github.com/benxta4424" title="GitHub" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="https://github.com/benxta4424" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin"></i>
                            </a>
                            <a href="https://github.com/benxta4424" title="Instagram" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                            <a href="https://github.com/benxta4424" title="Facebook" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-facebook"></i>
                            </a>
                        </div>
                    </div>

                    <div className="rightPart">
                        <form action="post">
                            {/* A row for first and last name to sit side-by-side */}
                            <div className="formRow">
                                <div className="inputGroup">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" id="firstName" name="firstName" required />
                                </div>

                                <div className="inputGroup">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input type="text" id="lastName" name="lastName" required />
                                </div>
                            </div>

                            <div className="inputGroup">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required />
                            </div>

                            <div className="inputGroup">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>

                            <button type="submit" className="submitBtn">Send Message</button>
                        </form>
                    </div>

                </div>
            </div>
        
        </>
    )
}