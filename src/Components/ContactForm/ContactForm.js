import React from "react";
import './ContactForm.css';

export default class MyForm extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <form
                onSubmit={this.submitForm}
                action="https://formspree.io/mlejzwbr"
                method="POST" >
                <div id="contact-form">
                    <div className='section-header'>CONTACT US</div>

                    <div class="field">
                        <input type="text" name="name" id="name" placeholder="Name" />
                    </div>
                    <div class="">
                        <input type="text" name="email" id="email" placeholder="Email" />
                    </div>
                    <div class="">
                        <input type="text" name="subject" id="subject" placeholder="Subject" />
                    </div>
                    <div class="">
                        <textarea name="message" id="message" placeholder="Message"></textarea>
                    </div>
                    <input type="text" name="_gotcha" id="gotcha" />

                    <div class="">
                        <ul class="actions">
                        {status === "SUCCESS" ? <p>Thanks! We will reply shortly</p> : <li><input type="submit" value="Send Message" class="input-button" /></li>}
                        {status === "ERROR" && <p>Ooops! There was an error. Did you fill in all the fields?</p>}
                            
                        { /* <li><input type="reset" value="Clear Form" class="input-button" /></li> */ }
                        </ul>
                    </div>
                    
                </div>
                
            </form>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}