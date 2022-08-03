import React from 'react'
import {IoMdRadioButtonOn} from "react-icons/io"
import group from "../assets/group.png"
import cables from "../assets/cables.png"
import laptop from "../assets/laptop.png"
import play from "../assets/play.png"
import Card from '../components/Card'
import star from "../assets/Star.svg"
import trophy from "../assets/Trophy.svg"
import first from "../assets/first.png"
import github from "../assets/github.png"
import arrowblue from "../assets/arrowblue.svg"
import arrowblack from "../assets/arrowblack.svg"
import arrowwhite from "../assets/arrowwhite.svg"
import Button from 'react-bootstrap/Button';


function Social() {
    const text1 = "More than 2 billion we people over countries use socibooks we to stay in touch with friends."
  return (
    <div>
        <div className='container-social'>
            <div className='social-text-div'>
                <h2>Whats Netboks?</h2>
                <h1>Why Join to Netbook Social Network?</h1>
                <h3>Recent surveys have indicated that small businesses recognise the need they have to connect with consumer.</h3>
                <div className='bullet-list'>
                    <span><i><IoMdRadioButtonOn style={{color:"#217BF4", width:"18px", height:"18px"}}/></i>Groups</span>
                    <span><i><IoMdRadioButtonOn style={{color:"#217BF4", width:"18px", height:"18px"}}/></i>Messages</span>
                    <span><i><IoMdRadioButtonOn style={{color:"#217BF4", width:"18px", height:"18px"}}/></i>Share</span>
                </div>
            </div>
            <div className='social-image-div' >
                <div className='image-icon'>
                    <img style={{marginTop:"25%"}} src={group} className="img-fluid" alt="Responsive image"/>
                    <img src={play}  className="img-fluid play" alt="Responsive image"/>
                </div>
                <div className='column-image-div'>
                    <img src={laptop} className="img-fluid" alt="Responsive image"/>
                    <img src={cables} className="img-fluid" alt="Responsive image"/>
                </div>
            </div>
            
        </div>
        <div className='card-div'>
            <Card title="4.8 Rating" highlighted="+836k " subtitle="Members" text={text1} link="Join Our Community" url={star}
            imageURL={first} className="man-icon" linkName="man-link" arrowURL={arrowblue}
            />
            <Card title="Awwwards" beforeHiglight="Best of " highlighted="2021" subtitle="on Github" text={text1} link="Go To Awards" url={trophy}
            imageURL={github} className="github-icon" subtitleName="github-name" textName="github-text" linkName="github-link" arrowURL={arrowblack}
            />

            <div className='card-text-div'>
                <h2>Our Achievement</h2>
                <h1>We are Connecting You The Digital Life.</h1>
                <h3>The scope the Social Media becomes crucial Is helps the business to directly engage with their needs and wants.</h3>
                <Button className="btn btn-primary me-5 discover-me">Discover me <span style={{paddingLeft:"10px"}}><img src={arrowwhite}/></span></Button>
            </div>
        </div>
    </div>
  )
}

export default Social