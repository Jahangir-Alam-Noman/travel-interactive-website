import React from 'react';
import './About.css';
import about from '../../images/whoWeare.png';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <div className="about pt-5 ">
                <h2 className="fw-bolder pt-2 pb-2">Who We Are?</h2>
                <div className="row row-cols-1 row-cols-md-2 g-4 p-5">
                    <div className="col">
                        <div className="card">
                            <img src={about} className="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div className="col">
                        <div className="text-start">
                            <div className="card-body">
                                <h2 className="card-title">
                                    We Are Travel Experts</h2>
                                <p className="card-text">Our advisors have access to our unparalleled relationships with the world’s top luxury hotels, tours and cruise lines, who offer upgrades and travel experiences that are only available when you work with one of our “best of the best” in the industry. Whether you are longing to relax on one of the world’s top beaches, or seeking the travel adventure of a lifetime, working with one of Travel Experts’ independent travel advisors will give you the opportunity to experience the world in ways you previously thought were unimaginable.Your luxury travel advisor will guide you through the exciting planning phase of your adventure.</p>
                                <Link to="/about"><button type="button" className="btn btn-dark text-white">Learn More</button></Link>

                            </div>
                        </div>
                    </div>


                </div>

            </div>

            <section id="what-we-do" className="pb-5 mb-4">
                <div className="container-fluid">
                    <h2 className="fw-bolder pt-2 pb-2">Our Concern</h2>
                    <p className="text-center text-muted h5 pb-4">Our network of independent travel advisors is comprised of entrepreneurs</p>
                    <div className="row mt-5">
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <div className="card">
                                <div className="card-block block-1">
                                    <h5 className="card-title">Personalized Matching</h5>
                                    <p className="card-text">Your luxury travel advisor will guide you through the exciting</p>
                                    <Link to="/about" title="Read more" className="read-more" >
                                        Read more<i className="fa fa-angle-double-right ml-2"></i>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <div className="card">
                                <div className="card-block block-2">
                                    <h5 className="card-title">Variety Of Destinations</h5>
                                    <p className="card-text">With precision and attention to every detail</p>

                                    <Link to="/about" title="Read more" className="read-more" >
                                        Read more<i className="fa fa-angle-double-right ml-2"></i>
                                    </Link>

                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <div className="card">
                                <div className="card-block block-3">
                                    <h5 className="card-title">Highly Qualified Service</h5>
                                    <p className="card-text">Ensure that your next vacation is seamlessly orchestrated.</p>

                                    <Link to="/about" title="Read more" className="read-more" >
                                        Read more<i className="fa fa-angle-double-right ml-2"></i>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <div className="card">
                                <div className="card-block block-4">
                                    <h5 className="card-title">Handpicked Hotels</h5>
                                    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>


                                    <Link to="/about" title="Read more" className="read-more" >
                                        Read more<i className="fa fa-angle-double-right ml-2"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <div className="card">
                                <div className="card-block block-5">
                                    <h5 className="card-title">Best Price Guarantee</h5>
                                    <p className="card-text">You have the peace of mind knowing there</p>


                                    <Link to="/about" title="Read more" className="read-more" >
                                        Read more<i className="fa fa-angle-double-right ml-2"></i>
                                    </Link>


                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 col-xl-4">
                            <div className="card">
                                <div className="card-block block-6">
                                    <h5 className="card-title">24/7 Support</h5>
                                    <p className="card-text">Your travel Experts luxury travel advisor has your back.</p>
                                    <Link to="/about" title="Read more" className="read-more" >
                                        Read more<i className="fa fa-angle-double-right ml-2"></i>
                                    </Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>




    );
};

export default About;
