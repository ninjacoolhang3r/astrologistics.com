import React, { Component } from 'react';


class FaqSection extends Component {
    state = {
        data: {},
        faqDataThree: []
    }
    componentDidMount(){
       
                this.setState({
                    data: {},
                    faqDataThree: [
                        {
                            title:'WHAT CAN I SHIP?',
                            content: 'asd'
                        },
                        {
                            title:'WHAT WARRANTIES DO I HAVE FOR MY SHIPMENTS',
                            content: 'asd'
                        },
                        {
                            title:'AFTER COMPLETE A DELIVERY, HOW DO I GET PAID?',
                            content: 'asd'
                        },
                        {
                            title:'DOES MY RATE INCLUDE FUEL?',
                            content: 'asd'
                        },
                        {
                            title:'WHERE CAN I SHIP MY PRODUCTS TO?',
                            content: 'asd'
                        },
                        {
                            title:'HOW MUCH MONEY CAN I EXPECT TO SAVE USING ASTROLOGISTICS',
                            content: 'asd'
                        },
                        {
                            title:'WHEN DO I PAY?',
                            content: 'asd'
                        }
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
                                                <button className="btn px-0 py-3" type="button" data-toggle="collapse" data-target="#collapseOne">
                                                    {item.title}
                                                </button>
                                                </h2>
                                            </div>
                                            <div id="collapseOne" className="collapse" data-parent="#sApp-accordion">
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