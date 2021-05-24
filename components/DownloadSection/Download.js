import React, { Component } from 'react';

const initData = {
    heading: "sApp is available for all devices",
    headingText: "sApp is available for all devices, consectetur adipisicing elit. Itaque at harum quam explicabo. Aliquam optio, delectus, dolorem quod neque eos totam. Delectus quae animi tenetur voluptates doloribus commodi dicta modi aliquid deserunt, quis maiores nesciunt autem, aperiam natus.",
    headingTexttwo: "sApp is available for all devices, consectetur adipisicing elit. Vel neque, cumque. Temporibus eligendi veniam, necessitatibus aut id labore nisi quisquam.",
    headingSlug: "* Available on iPhone, iPad and all Android devices",
    playImg: "/img/google-play-black.png",
    appleImg: "/img/app-store-black.png",
}

class Download extends Component {
    state = {
        initData: {}
    }
    componentDidMount(){
        this.setState({
            initData: initData
        })
    }
    render() {
        return (
            <section className="section download-area overlay-dark ptb_100">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        {/* Download Text */}
                        <div className="download-text text-center">
                        <h2 className="text-white">App coming soon to your mobile device</h2>
                        <p className="text-white my-3 d-none d-sm-block">Keep watching our networks and be the first to use it</p>
                        {/* Store Buttons */}
                        <div className="button-group store-buttons d-flex justify-content-center">
                            <a href="/#">
                            <img style={{border:'1px solid white', borderRadius:'6px'}} src={this.state.initData.playImg} alt="" />
                            </a>
                            <a href="/#">
                            <img style={{border:'1px solid white', borderRadius:'6px'}} src={this.state.initData.appleImg} alt="" />
                            </a>
                        </div>
                        {/* <span className="d-inline-block text-white fw-3 font-italic mt-3">{this.state.initData.headingSlug}</span> */}
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Download;