import huy from '../../Images/huy.jpg';
import gian from '../../Images/gian-paolo.jpg';
import huy1 from '../../Images/huy-gun.jpg';
import adam from '../../Images/adam.jpg';
import React from "react";
import './Plans.css';

const Plans = () => {
    return (
        <div className="container content">
            <div className="row">
                <h2 className="plans">PLANS</h2>
                <div className="col-md-3">
                    <div className="thumbnail">
                        <img src={huy} alt="interior design" />
                        <div className="caption">
                            <h4>VIRTUAL OFFICE</h4>
                            <p>
                                Our virtual office allow your business to get our location
                                address, phone services and also you become a member of our
                                community with benefit such as access to our meeting
                <br />
                                <br />
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="thumbnail">
                        <img src={gian} alt="interior design" />
                        <div className="caption">
                            <h4>CUSTOMIZED OFFICES</h4>
                            <p>
                                Our customized offices offer a great location for your business
                                and you can customize your office to suit your perferences.
                                Also, you become a member of our community with benefits such as
                                access to our meting rooms.
              </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="thumbnail">
                        <img src={huy1} alt="interior design" />
                        <div className="caption">
                            <h4>SERVICED OFFFICES</h4>
                            <p>
                                Our serviced offices offer a great location for your business
                                and we provide service such as internet, utilities and offers
                                from our partners. Also you become a member of our community
                                with benefits such as access to our meeting rooms.
              </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="thumbnail">
                        <img src={adam} alt="interior design" />
                        <div className="caption">
                            <h4>MEETING ROOMS</h4>
                            <p>
                                Our meeting rooms offer a great location for your meeting with
                                your clients or business partners, we provide presentation
                                equipment and coffee. Also you become a member of our community
                                with benefits such as access to our meeting rooms
              </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Plans;

