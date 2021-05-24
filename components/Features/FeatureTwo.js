import React, { Component } from 'react';

class FeatureSection extends Component {
    state = {
        data: {},
        featureDataTwo: []
    }
    componentDidMount(){
        
                this.setState({
                    data: {},
                    featureDataTwo: [
                        {
                            "id": 1,
                            "iconClass": "fa fa-pallet",
                            "title": "Dedicated Fleet Services",
                            "text": "Dedicated private fleet services customized to integrate and streamline transportation networks optimizing costs, efficiencies, and delivering excellent customer service."
                        },
                        {
                            "id": 2,
                            "iconClass": "fa fa-truck-loading",
                            "title": "Last Mile and Home Delivery Services",
                            "text": "Years of experience providing last mile and home delivery services."
                        },
                        {
                            "id": 3,
                            "iconClass": "fa fa-handshake",
                            "title": "Transportation Management",
                            "text": "Scale and capacity management with customized local-to-national transport leveraging Astro Logistic's extensive network of carrier partners."
                        },
                        {
                            "id": 4,
                            "iconClass": "fa fa-warehouse",
                            "title": "Warehouse & Distribution Services",
                            "text": "Best-in-class warehousing, fulfillment, and distribution services encompasses customized solution design, operational excellence, and leading-edge technology so that you and your customers get the service and performance you expect from your logistics partner."
                        },
                        {
                            "id": 5,
                            "iconClass": "fa fa-cog",
                            "title": "Transportation Technology",
                            "text": "Flexible and comprehensive transportation IT solution that synchronizes with your business systems to provide visibility, control, and actionable insights."
                        },
                        {
                            "id": 6,
                            "iconClass": "fa fa-shipping-fast",
                            "title": "Best service",
                            "text": "Ship high-value, time-critical freight with the highest level of service in the industry. From temperature and humidity control for sensitive shipments to geo-fencing technology that tracks valuable freight in transit, we have a solution for any scenario."
                        }
                    ]
                })
                // console.log(this.state.data)
            
    }
    render() {
        return (
            <section id="about" className="section features-area ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-6">
                        {/* Section Heading */}
                        <div className="section-heading text-center">
                        <h2>About</h2>
                        <p className="d-none d-sm-block mt-4">Astros Logistics was founded upon the principles of integrity and honesty. We solve problems
for companies all across the globe, while maintaining great relationships with our carriers.
Contact one of our representatives today and let us problem the solution to your logistics needs.</p>
                        <p className="d-block d-sm-none mt-4">{this.state.data.headingTexttwo}</p>
                        </div>
                    </div>
                    </div>
                    <div className="row">
                    {this.state.featureDataTwo.map((item, idx) => {
                        return(
                            <div key={`ft_${idx}`} className="col-12 col-md-6 col-lg-4">
                                {/* Icon Box */}
                                <div className="icon-box text-center p-4">
                                {/* Featured Icon */}
                                <div className="featured-icon mb-3">
                                    <i className={item.iconClass} style={{fontSize:'50px'}}></i>
                                </div>
                                {/* Icon Text */}
                                <div className="icon-text">
                                    <h3 className="mb-2">{item.title}</h3>
                                    <p>{item.text}</p>
                                </div>
                                </div>
                            </div>
                        );
                    })}
                    </div>
                </div>
            </section>
        );
    }
}

export default FeatureSection;