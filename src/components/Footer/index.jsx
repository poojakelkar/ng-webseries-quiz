import { Favorite, GitHub, LinkedIn, Twitter } from "@material-ui/icons";
import React from "react";
import "./styles.css";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='text'>
                <p>
                    Made with{" "}
                    <Favorite style={{ color: "red", padding: "0px 2px" }} /> by
                    Pooja Kelkar
                </p>
                <div className='links'>
                    <a href='https://github.com/poojakelkar'>
                        <GitHub />
                    </a>
                    <a href='https://twitter.com/pooja__kelkar'>
                        <Twitter />
                    </a>
                    <a href='https://www.linkedin.com/in/poojakelkar/'>
                        <LinkedIn />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
