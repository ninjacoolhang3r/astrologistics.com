import React, { Component } from 'react';
import Header from '../components/HeaderSection/Header';

const initData = {
    heading: "This feature is coming soon!",
    content: "Our website is under construction. We'll be here soon with our new awesome site.",
    btnText: "Notify"
}

class ComingSoon extends Component {
    state = {
        initData: []
    }
    componentDidMount(){
        this.setState({
            initData: initData
        })
    }
    render() {
        return (
            <div className="homepage-3 inner inner-pages">
                <div className="main">
                    <Header imageData={"/img/logo-white.png"} />
                    <section id="home" className="section welcome-area inner-area bg-overlay h-100vh overflow-hidden">
                        <div className="container h-100">
                            <div className="row align-items-center justify-content-center h-100">
                                <div className="col-12 col-md-7">
                                    <div className="welcome-intro text-center">
                                        <h1 className="text-white">{this.state.initData.heading}</h1>
                                        <p className="text-white my-4">{this.state.initData.content}</p>
                                        
                                        {/* Subscribe Form */}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default ComingSoon;

export async function getServerSideProps(context){
    return {
        props: {}
    } 
}
