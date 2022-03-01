import React, {useContext} from 'react';
import "./footer.css";

const Footer = () => {
  return (
    <div className="f">
        <div className="f-bg">
            <div className="f-wrapper">
                <div className="f-bottom">
                    <div className="f-items">
                        <p>Social Links</p>
                        <ul>
                          <li className="items">
                          <img src="https://img.icons8.com/ios-glyphs/30/000000/github.png"/><a href="https://github.com/Dants0">Github</a>
                          </li>
                          <li className="items">
                          <img src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png"/><a href="https://www.instagram.com/dantas_44/">Instagram</a>
                          </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer