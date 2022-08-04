import React from 'react';
import { CDBFooter,CDBBox } from 'cdbreact';
import icon from "../assets/footer_logo.png";
import fb from "../assets/facebook.svg"
import insta from "../assets/instagram.svg"
import tw from "../assets/Twitter.svg"
import ln from "../assets/Linkedin.svg"

function Footer() {
  return (
    <CDBFooter className="shadow" style={{background: "#20202D", width:"100%"}}>
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: '80%' }}
      >
        <CDBBox>
          <small style={{fontFamily:"Helvetica", color: "#F6F6F6"}} className="ml-2">Besnik Creative Agency.</small>
        </CDBBox>
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              src={icon}
            />
          </a>
        </CDBBox>
        <CDBBox display="flex">
          <div style={{display:"flex",gap:"8px"}}>
            <img src={tw}/>
            <img src={insta}/>
            <img src={fb}/>
            <img src={ln}/>
          </div>

        </CDBBox>
      </CDBBox>
    </CDBFooter>
  );
};

export default Footer;