import React from 'react'
import Button from 'react-bootstrap/Button';
import ImageCard from '../components/ImageCard';
import first from "../assets/first-image.png"
import second from "../assets/second-image.png"
import third from "../assets/third-image.png"
import last from "../assets/last-image.png"
function Members() {
  return (
    <div className='members-container'>
        <div  className='features-text-div members-text-div'>
            <h3>Valuable Team</h3>
            <h1>Our Active Members</h1>
            <h2>when an unknown printer took a galley of type and meeting fari scrambled it.</h2>
        </div>
        <div className='background-div'>
            <h2>Newst</h2>
            <h2>Popular</h2>
            <Button style={{marginLeft:"20px"}} className="btn btn-primary me-5 members-btn">Active</Button>
        </div>
        <div className='image-card-div'>
            <ImageCard url={first} name="Fahim Rahman" tag="@rahman"/>
            <ImageCard url={second} name="Kazi Rahman" tag="@Rahman"/>
            <ImageCard url={third} name="Masterero Ali" tag="@Master"/>
            <ImageCard url={last} name="Alia Karon" tag="@Alia"/>
        </div>
    </div>
  )
}

export default Members