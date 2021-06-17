import sean from '../../Images/sean.jpg';
import pascal from '../../Images/pascal.jpg';
import lance from '../../Images/lance.jpg';
import React, { Component } from "react";
import './Carousel.css';

class Carousel extends Component {
    render() {
        return (
            <div
                id="carousel-example-generic"
                className="carousel slide"
                data-ride="carousel"
            >
                <ol className="carousel-indicators">
                    <li
                        data-target="#carousel-example-generic"
                        data-slide-to="0"
                        className="active"
                    ></li>
                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner carousel-images" role="listbox">
                    <div className="item active">
                        <img
                            src={sean}
                            alt="A building"
                            height="50%"
                            className="img-responsive"
                        />
                        <div className="carousel-caption"></div>
                    </div>
                    <div className="item">
                        <img
                            src={pascal}
                            alt="A building"
                            height="50%"
                            className="img-responsive"
                        />
                        <div className="carousel-caption"></div>
                    </div>
                    <div className="item">
                        <img
                            src={lance}
                            alt="A building"
                            height="50%"
                            className="img-responsive"
                        />
                        <div className="carousel-caption"></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Carousel;
