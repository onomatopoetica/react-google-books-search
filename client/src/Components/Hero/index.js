import React from "react";
import "./assets/style.css";
function Hero() {
    return (
        <div className="container hero-container">
            <div className="row">
                <div className="col-md-6 hero-text d-flex align-items-center  col-sm-12">
                    <h4>
                        <q>
                            {" "}
              Lorem ipsum.
            </q>
                        <small>F. Scott Fitzgerald</small>
                    </h4>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img
                        className="reader-img img-responsive"
                        src={require("./assets/goplaces.png")}
                        alt="Go Places With Books"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;