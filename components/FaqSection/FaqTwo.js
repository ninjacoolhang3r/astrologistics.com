import React, { Component } from 'react';


class FaqSection extends Component {
    state = {
        show:false,
        data: {},
        faqDataThree: []
    }
    componentDidMount(){
       
                this.setState({
                    data: {},
                    faqDataThree: [
                        {
                            title:'WHAT CAN I SHIP?',
                            content: 'General Merchandise/General Cargo, Branded Goods, Precision Instruments, Machinery (which is not prone to Breakage), Fragile Goods, Bottled Products, (excluding Beverages), Non-Perishable Food, Bottled Beverages, Automobiles, Motorbikes, Household Goods and Personal Effects, Frozen Foods, Frozen Meat, Chemicals & Hazardous Materials, Fine Arts, Steel Sheets, Coils, Bars, Billets and the like, Computers, Electronics, Cell Phones, Telescopes'
                        },
                        {
                            title:'WHAT WARRANTIES DO I HAVE FOR MY SHIPMENTS',
                            content: 'Any shipment that is being shipped with Astro Logistics Inc. is covered by full 100 percent coverage at the price of the product.'
                        },
                        {
                            title:'AFTER COMPLETE A DELIVERY, HOW DO I GET PAID?',
                            content: '30 day pay also quick pay avaiable'
                        },
                        {
                            title:'DOES MY RATE INCLUDE FUEL?',
                            content: 'Yes'
                        },
                        {
                            title:'WHERE CAN I SHIP MY PRODUCTS TO?',
                            content: 'Anywhere in the USA'
                        },
                        {
                            title:'HOW MUCH MONEY CAN I EXPECT TO SAVE USING ASTROLOGISTICS',
                            content: 'With Astro Logistics you are dealing with a personal representative of the costumer, we have a set standard fee for all our costumers. So you get the lowest price in the industry when you ship with us. Our Carriers have the highest standards in the industry. We check with our compliance team weekly to provide the best carriers in the industry.'
                        },
                        {
                            title:'WHEN DO I PAY?',
                            content: 'When freight is delivered'
                        },
                        {
                            title:'WHY TO SHIP WITH US?',
                            content: 'Visibility to both Expedited and Truckload shipments (Must qualify for Expedite by agreeing to Carrier Excellence terms), Post equipment availability, Update shipment status'
                        },
                    ]
                })
              
    }
    render() {
        return (
            <section className="section faq-area ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-7">
                        {/* Section Heading */}
                        <div className="section-heading text-center">
                        <h2 className="text-capitalize">Have Questions? Look Here</h2>
                        {/* <p className="d-none d-sm-block mt-4">{this.state.data.headingText}</p>
                        <p className="d-block d-sm-none mt-4">{this.state.data.headingTexttwo}</p> */}
                        </div>
                    </div>
                    </div>
                    <div className="row justify-content-center">
                    <div className="col-12">
                        {/* FAQ Content */}
                        <div className="faq-content">
                        {/* sApp Accordion */}
                        <div className="accordion" id="sApp-accordion">
                            <div className="row justify-content-center">
                            <div className="col-12 col-md-10 col-lg-8">
                                {/* Single Accordion Item */}
                                {this.state.faqDataThree.map((item, idx) => {
                                    return(
                                        <div key={`ft_${idx}`} className="card border-top-0 border-left-0 border-right-0 border-bottom">
                                            {/* Card Header */}
                                            <div className="card-header bg-inherit border-0 p-0">
                                                <h2 className="mb-0">
                                                <button onClick={()=>this.setState({show:this.state.show === idx+1 ? 0 : idx+1})} className={`btn px-0 py-3 ${idx+1 === this.state.show ? 'collapsed' : ''}`} type="button" data-toggle="collapse" data-target="#collapseOne">
                                                    {item.title}
                                                </button>
                                                </h2>
                                            </div>
                                            <div id="collapseOne" className={`collapse ${idx+1 === this.state.show ? 'show' : ''}`} data-parent="#sApp-accordion">
                                                {/* Card Body */}
                                                <div className="card-body px-0 py-3">
                                                    {item.content}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FaqSection;