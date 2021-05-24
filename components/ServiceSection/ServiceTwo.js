import React, { Component } from 'react';

class ServiceSection extends Component {
    state = {
        data: {},
        serviceData: []
    }
    componentDidMount(){
       
                this.setState({
                    data: {},
                    serviceData: [
                        {
                            "id": 1,
                            "iconClass": "fa fa-coins",
                            "text": "Save Money with us, request a quotation and discover the best prices."
                        },
                        {
                            "id": 2,
                            "iconClass": "fas fa-user",
                            "text": "Our agents are ready to meet your requirements, and assist you."
                        },
                        {
                            "id": 3,
                            "iconClass": "fas fa-clock",
                            "text": "Your time is gold, that's why we make sure you receive your payload fast."
                        },
                        {
                            "id": 4,
                            "iconClass": "fas fa-phone",
                            "text": "Our support team is available always if you have any issue or question."
                        }
                    ]
                })
                // console.log(this.state.data)
    
    }
    render() {
        return (
            <section id='shippers' className="section service-area bg-inherit overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-between">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        {/* Service Text */}
                        <div className="service-text pt-4 pt-lg-0">
                        <h2 className="mb-4">The most efficient service for you</h2>
                        {/* Service List */}
                        <ul className="service-list">
                            {this.state.serviceData.map((item, idx) => {
                                return(
                                    <div key={`st_${idx}`}>
                                        {/* Single Service */}
                                        <li className="single-service media py-2">
                                        <div className="service-icon pr-4">
                                            <span><i className={item.iconClass} /></span>
                                        </div>
                                        <div className="service-text media-body">
                                            <p>{item.text}</p>
                                        </div>
                                        </li>
                                    </div>
                                );
                            })}
                        </ul>
                        <a href="/contact-page" className="btn btn-bordered mt-4">Learn More</a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 order-1 order-lg-2 d-none d-md-block">
                        {/* Service Thumb */}
                        <div className="service-thumb mx-auto">
                            <img src={'/img/service_thumb_2.png'} alt="" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceSection;