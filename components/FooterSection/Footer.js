import React, { Component } from 'react';

class FooterSection extends Component {
    state = {
        data: {},
        iconList: [],
        footerList_1: [],
        footerList_2: [],
        footerList_3: []
    }
    componentDidMount(){
      
                this.setState({
                    data: {},
                    iconList: [
                        {
                            "id": 1,
                            "link": "facebook",
                            "iconClass": "fab fa-facebook-f"
                        },
                        {
                            "id": 2,
                            "link": "twitter",
                            "iconClass": "fab fa-twitter"
                        },
                        {
                            "id": 3,
                            "link": "google-plus",
                            "iconClass": "fab fa-google-plus-g"
                        },
                        {
                            "id": 4,
                            "link": "vine",
                            "iconClass": "fab fa-vine"
                        }
                    ],
                    footerList_1: [
                        {
                            "id": 1,
                            "text": "Home"
                        },
                        {
                            "id": 2,
                            "text": "About"
                        },
                        {
                            "id": 3,
                            "text": "Carriers"
                        },
                        {
                            "id": 4,
                            "text": "Shippers"
                        },
                        {
                            "id": 5,
                            "text": "Contact"
                        }
                    ],
                    footerList_2: [
                        {
                            "id": 1,
                            "text": "FAQ"
                        },
                        {
                            "id": 2,
                            "text": "Privacy Policy"
                        },
                        {
                            "id": 3,
                            "text": "Support"
                        },
                        {
                            "id": 4,
                            "text": "Terms & Conditions"
                        },
                        {
                            "id": 5,
                            "text": "Contact"
                        }
                    ],
                    footerList_3: [
                        {
                            "id": 1,
                            "image": "/img/google-play-black.png"
                        },
                        {
                            "id": 2,
                            "image": "/img/app-store-black.png"
                        }
                    ]
                })
                // console.log(this.state.data)
           
    }
    render() {
        return (
            <div>
                <div className="height-emulator d-none d-lg-block" />
                <footer className="footer-area footer-fixed">
                    {/* Footer Top */}
                    <div className="footer-top ptb_100">
                        <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-3">
                            {/* Footer Items */}
                            <div className="footer-items">
                                {/* Logo */}
                                <a className="navbar-brand" href="/#">
                                <img className="logo" src='/img/logo.png' alt="" />
                                </a>
                                <p className="mt-2 mb-3">MC-1222900-B<br/>U.S. DOT no. 3600658<br/>ASTRO LOGISTICS<br/>13022 NE 102ND PL<br/>KIRKLAND, WA 98033</p>
                                {/* Social Icons */}
                              
                            </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                            {/* Footer Items */}
                            <div className="footer-items">
                                {/* Footer Title */}
                                <h3 className="footer-title mb-2">Useful Links</h3>
                                <ul>
                                    {this.state.footerList_1.map((item, idx) => {
                                        return(
                                            <li key={`flo_${idx}`} className="py-2"><a href={"/#"+item.text.toLowerCase()}>{item.text}</a></li>
                                        );
                                    })}
                                </ul>
                            </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                            {/* Footer Items */}
                            
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                            {/* Footer Items */}
                            <div className="footer-items">
                                {/* Footer Title */}
                                <h3 className="footer-title mb-2">Download</h3>
                                {/* Store Buttons */}
                                <div className="button-group store-buttons store-black d-flex flex-wrap">
                                    {this.state.footerList_3.map((item, idx) => {
                                        return(
                                            <a key={`flth_${idx}`} href="/#">
                                                <img src={item.image} alt="" />
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="footer-bottom">
                        <div className="container">
                        <div className="row">
                            <div className="col-12">
                            {/* Copyright Area */}
                            <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                                {/* Copyright Left */}
                                <div className="copyright-left">© Copyrights 2021 ASTRO LOGISTICS INC. All rights reserved.</div>
                                {/* Copyright Right */}
                                <div className="copyright-right">Made with <i className="fas fa-heart" /> In <a href="/#">KIRKLAND</a></div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default FooterSection;