import React, { Component } from 'react';

class DiscoverSection extends Component {
    state = {
        data: {},
        discoverData: [],
        discoverIcon: []
    }
    componentDidMount(){
        this.setState({
            data: {},
            discoverData: [
                {
                    "id": 1,
                    "iconClass": "fas fa-check",
                    "text": "Your payment process made fast, our mates are important for us."
                },
                {
                    "id": 2,
                    "iconClass": "fas fa-check",
                    "text": "You can contact us always if needed, support is in your hand."
                },
                {
                    "id": 3,
                    "iconClass": "fas fa-check",
                    "text": "The best team communication and personal treatment to build a strong realtionship."
                },
                {
                    "id": 4,
                    "iconClass": "fas fa-check",
                    "text": "Get a good incoming with us, we will be looking for good paid jobs"
                }
            ]
        })         
    }
    render() {
        return (
            <section id='carriers' className="section discover-area bg-gray overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                    <div className="col-12 col-lg-6 order-2 order-lg-1">
                        {/* Discover Thumb */}
                        <div className="service-thumb discover-thumb mx-auto text-center mt-5 mt-lg-0">
                            <img src={'/img/discover_thumb_3.png'} alt="" />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 order-1 order-lg-2">
                        {/* Discover Text */}
                        <div className="discover-text px-0 px-lg-4 pt-4 pt-lg-0">
                        <h2 className="pb-4">Work With Us For a Secure Payment</h2>
                        {/* Check List */}
                        <ul className="check-list">
                            {this.state.discoverData.map((item, idx) => {
                                return(
                                    <div key={`dt_${idx}`}>
                                        <li className="py-2">
                                            {/* List Box */}
                                            <div className="list-box media">
                                                <span className="icon align-self-center"><i className={item.iconClass} /></span>
                                                <span className="media-body pl-2">{item.text}</span>
                                            </div>
                                        </li>
                                    </div>
                                );
                            })}
                        </ul>
                        {/* <div className="icon-box d-flex mt-3">
                        {this.state.discoverIcon.map((item, idx) => {
                                return(
                                    <div key={`il_${idx}`} className="service-icon pr-3">
                                        <span><i className={item.iconClass} /></span>
                                    </div>
                                );
                            })}
                        </div> */}
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default DiscoverSection;