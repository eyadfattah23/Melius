import Button from "../common/button"
import Field from "../common/field"
function Contact(){
    return <section className="full_screen_seciton landing_contact flex flex-col justify-center items-center gap-8 w-full" id="contact">
        <h1>Contact Us</h1>
        <p>Have questions or need support? We're here to help.</p>
        <div className="form flex flex-col gap-4">
                            <div className="field flex flex-col gap-2">
                                <div className="container title_fiel">
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
                            <div className="contact_submit">
                            <Button text={"submit"} type={"secondary_filled"}/>
                            </div>
                        </div>
        </section>
}
export default Contact