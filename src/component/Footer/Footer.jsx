import React, { Component } from "react";
import './Footer.css';

class Footer extends Component {
    constructor (props){
        super(props)
    }
  render() {
    return (
      <div className="footer">
        <div className="container-fluid">
          <div className="row footer-content">
            <div className="col-md-4">
              <address>
                <strong>{this.props.kenya}</strong>
                <br />
                <span>Nairobi, Kenya</span>
                <br />
                Belgravi center, 14 Riverside drive,
                <br />
                4th floor,Off Riverside Drive
                <br />
                Hanover Centre, 14 Riverside Drive
                <br />
                6th floor, Off Riverside Drive
                <br />
              </address>
            </div>
            <div className="col-md-4">
              <address>
                <strong>{this.props.ghana}</strong>
                <br />
                <span>Accra, Ghana</span>
                <br />
                One Airport square, Airport City
                <br />
                8th Floor
                <br />
              </address>
            </div>
            <div className="col-md-4">
              <address>
                <strong>{this.props.nigeria}</strong>
                <br />
                <span>Lagos, Nigeria</span>
                <br />
                Sterling Bank Building
                <br />
              </address>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
