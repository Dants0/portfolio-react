import React, { useContext } from 'react';
import "./footer.css";

const Footer = () => {
  return (
    // <div className="f">
      <div className="f-wrapper">
        <div className="f-bottom">
          <div className="f-items">
            <p className="f-links">Social Links</p>
            <ul>
              <li className="items">
                <a href="https://github.com/Dants0" className="a-desc-items"><img src="https://img.icons8.com/ios-glyphs/30/000000/github.png" alt="github" /></a>
              </li>
              <li className="items">
                <a href="https://www.instagram.com/dantas_44/" className="a-desc-items"><img src="https://img.icons8.com/material-outlined/24/000000/instagram-new--v1.png" alt="instagram" /></a>
              </li>
              <li className="items">
                <a href="https://www.linkedin.com/in/guilherme-góes-8b72531b0/" className="a-desc-items"><img className="c-icon" src="https://img.icons8.com/ios-glyphs/344/linkedin-circled--v1.png" alt="linkedin" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    // </div>
  )
}

export default Footer