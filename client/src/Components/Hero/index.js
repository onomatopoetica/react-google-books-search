import React from "react";
import "./assets/style.css";
import image from "./assets/goplaces.png";

function Hero() {
    return (
        <div className="container hero-container">
            <div className="row">
                <div className="col-md-6 hero-text d-flex align-items-center col-sm-12">
                    <h4>
                        <q>
                            {" "}
                            That is part of the beauty of all literature. You discover that your longings are universal longings, that you're not lonely and isolated from anyone. You belong.
            </q>
                        <small> ~ F. Scott Fitzgerald</small>
                    </h4>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img
                        className="reader-img img-responsive"
                        src={image}
                        alt="Go Places With Books"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;