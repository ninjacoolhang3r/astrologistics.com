import React, { Component } from "react";
import sendEmail from "../../pages/api/send";


class ContactForm extends Component {

  constructor(props) {
    super(props)
    this.myForm = React.createRef()
  }

  state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    sending: 0
  }

  changHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  handleResponse = (status, msg) => {
    
    if (status === 200) {
      this.setState({
        sending: 2,
        email: '',
        message: '',
        subject: '',
        name: ''
      })
    } else {
      this.setState({
        sending: 3
      })
    }
  }

  submitHangler = async (event) => {
  
    event.preventDefault();
    this.setState({sending: 1})
    this.myForm.current.reset()
   
      
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.state)
      })
      const text = await res.text()
      this.handleResponse(res.status, text)

  }

  render() {
    return (
      <div className="contact-box text-center">
        <form
          ref={this.myForm}
          onSubmit={this.submitHangler}
          className="contact-form"
          noValidate="novalidate"
        >
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Name"
                required="required"
                onChange={this.changHandler}
                value={this.state.name}
                />
              </div>
              <div className="form-group">
                <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                required="required"
                onChange={this.changHandler}
                value={this.state.email}
                />
              </div>
              <div className="form-group">
                <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="Subject"
                required="required"
                onChange={this.changHandler}
                value={this.state.subject}
                />
              </div>
            </div>
            <div className="col-12">
                <div className="form-group">
                    <textarea
                    className="form-control"
                    name="message"
                    placeholder="Message"
                    required="required"
                    onChange={this.changHandler}
                    value={this.state.message}
                    />
                </div>
            </div>
            <div className="col-12">
                <button
                    type="submit"
                    className={`btn btn-lg btn-block mt-3 ${this.state.sending===2 ? 'btn-primary' : this.state.sending===3 ? 'btn-danger' : ''}`} disabled={this.state.sending != 0 ? true : false}>
                      {console.log(this.state)}
                      {
                        this.state.sending===1 ? (
                            <>
                         
                              Sending...
                            </>
                        ) : this.state.sending===2 ? (
                          <>
                       
                            Message Sent
                          </>
                      ) : this.state.sending===3 ? (
                        <>
                     
                          Error sending email
                        </>
                    ) : (
                          <>
                            <span className="text-white pr-3"><i className="fas fa-paper-plane" /></span>
                            Send Message
                          </>
                        )
                      }
                </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactForm;