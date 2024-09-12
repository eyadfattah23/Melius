import Field from "../common/field"
function Contact(){
    return <div className="landing_contact" id="contact">
        <h1>Contact Us</h1>
        <p>Have questions or need support? We're here to help.</p>
        <div className="form">
                            <div className="field">
                                <div className="container title_field">
                                    <Field
                                        placeholder="Name"
                                        type="text"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <div className="container title_field">
                                    <Field
                                        placeholder="Email"
                                        type="email"
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <div className="container content_field">
                                    <Field
                                        placeholder=""
                                        type="text"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
        </div>
}
export default Contact