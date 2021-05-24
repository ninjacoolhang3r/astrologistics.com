import React, { Component } from 'react';

const initData = {
    heading: "Creative way to Showcase your App",
    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus commodi, voluptate quaerat iure quidem expedita eos a blanditiis sint modi est error veniam facere eum at doloribus amet, nobis ut.",
    btnText: "Get Started",
    heroThumb: "/img/features_thumb.png"
}

class HeroSection extends Component {
    state = {
        data: {}
    }
    componentDidMount(){
        this.setState({
            data: initData
        })
    }
    render() {
        return (
            <section id="home" className="section welcome-area bg-inherit h-100vh overflow-hidden">
                <div className="shapes-container">
                    <div className="bg-shape" />
                </div>
                <div className="container h-100">
                    <div className="row align-items-center h-100">
                    {/* Welcome Intro Start */}
                    <div className="col-12 col-md-7">
                        <div className="welcome-intro">
                        <h1>Need a Quote?</h1>
                        <p className="my-4 pt-1 rounded" style={{backgroundColor:'white'}}>Connect with one of our supply chain experts to find a solution for your logistic needs.
We offer services ranging from Truckload, Intermodal, Air, Ocean, LTL, Customs Brokerage, and more.
Contact us and let us know what you need, and we'll take care of you.</p>
                        <a href="#contact" className="btn">Contact Us</a>
                        </div>
                    </div>
                    <div className="col-12 col-md-5">
                        {/* Welcome Thumb */}
                        <div className="welcome-thumb ml-auto">
                        <img src={this.state.data.heroThumb} alt="" />
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HeroSection;