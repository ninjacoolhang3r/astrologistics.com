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
                            "text": "Earn more with us - Talk to any of our broker representatives and learn how you can get paid more to haul freight."
                        },
                        {
                            "id": 2,
                            "iconClass": "fas fa-user",
                            "text": "Our agents are available 24/7 ready to provide assistance."
                        },
                        {
                            "id": 3,
                            "iconClass": "fas fa-clock",
                            "text": "Your time is money, so we're always happy to help."
                        },
                        {
                            "id": 4,
                            "iconClass": "fas fa-phone",
                            "text": "Get dedicated freight at the best possible rates."
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
                        <h2 className="mb-4">The Best Solutions For You</h2>
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
