import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import community from "../assets/community.png"
import Button from 'react-bootstrap/Button';


function Community() {
  return (
    <div className='half-container'>
        <div className='left-div'>
        <Button variant="flat">Netbook community</Button>
        <div className='text-div'>
            <h1>
            Your Solutions For Community! 
            </h1>
            <h2>More than 2 billion people in over countries use socibook to stay in touch with friends & family.</h2>
        </div>
        <div className='button-div'>
        <Button className="btn btn-primary me-5 about-more">About More</Button>
        <Button className="btn btn-light me-5" variant="invite">Invite Friend</Button>
        </div>
        </div>
        <div className='right-div'>
            <img src={community} className="img-fluid" alt="Responsive image"/>
        </div>
    </div>
  )
}

export default Community;