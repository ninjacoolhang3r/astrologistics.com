import React, { Component } from 'react';

class Work extends Component {
    state = {
        data: {},
        workData: []
    }
    componentDidMount(){
      
                this.setState({
                    data: {},
                    workData: [
                        {
                            "id": 1,
                            "image": "/img/work_thumb_1.png",
                            "title": "Quote and book your order",
                            
                        },
                        {
                            "id": 2,
                            "image": "/img/work_thumb_2.png",
                            "title": "We pick up your cargo",
                            
                        },
                        {
                            "id": 3,
                            "image": "/img/work_thumb_3.png",
                            "title": "Receive your cargo",
                            
                        }
                    ]
                })
       
    }
    render() {
        return (
            <section className="section work-area bg-overlay overflow-hidden ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-6">
                            {/* Work Content */}
                            <div className="work-content text-center">
                                <h2 className="text-white">How we work</h2>
                                <p className="text-white my-3 mt-sm-4 mb-sm-5">Contact us and get the best service, following the next steps</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.state.workData.map((item, idx) => {
                            return(
                                <div key={`w_${idx}`} className="col-12 col-md-4">
                                {/* Single Work */}
                                <div className="single-work text-center p-3">
                                    {/* Work Icon */}
                                    <div className="work-icon">
                                        <img className="avatar-md" src={item.image} alt="" />
                                    </div>
                                    <h3 className="text-white py-3">{item.title}</h3>
                                    <p className="text-white">{item.content}</p>
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

export default Work;