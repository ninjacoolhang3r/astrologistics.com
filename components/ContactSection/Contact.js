import React, { Component } from 'react';
import ContactForm from './ContactForm';

class ContactSection extends Component {
    state = {
        data: {},
        iconList: []
    }
    componentDidMount(){
       
                this.setState({
                    data: {},
                    iconList: [
                        {
                            "id": 1,
                            "iconClass": "fas fa-home",
                            "text": "11022 NE 102ND PL KIRKLAND, WA 98033"
                        },
                        {
                            "id": 2,
                            "iconClass": "fas fa-phone-alt",
                            "text": "+1 (425) 654-8896"
                        },
                        {
                            "id": 3,
                            "iconClass": "fas fa-envelope",
                            "text": "brokerage@astrologisticsinc.com"
                        }
                    ]
                })
                // console.log(this.state.data)
          
    }
    render() {
        return (
            <section id="contact" className="contact-area bg-gray ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-6">
                        {/* Section Heading */}
                        <div className="section-heading text-center">
                        <h2 className="text-capitalize">Contact us</h2>
                        <p className="d-none d-sm-block mt-4">Send us a message to get a quote or any information you need.</p>
                   
                        </div>
                    </div>
                    </div>
                    <div className="row justify-content-between">
                    <div className="col-12 col-md-5">
                        {/* Contact Us */}
                        <div className="contact-us">
                     
                            <ul>
                                {this.state.iconList.map((item, idx) => {
                                    return(
                                        <li key={`ci_${idx}`} className="py-2">
                                            <a className="media" href="/#">
                                                <div className="social-icon mr-3">
                                                    <i className={item.iconClass} />
                                                </div>
                                                <span className="media-body align-self-center">{item.text}</span>
                                            </a>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 pt-4 pt-md-0">
                        <ContactForm />
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactSection;
