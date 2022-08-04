import React from 'react'
import Button from 'react-bootstrap/Button';


function Subscribe() {
  return (
    <div className='subscribe-container'>
        <div className='subscribe-div'>

        
        <div className='subscribe-text-div'>
            <h2>Home</h2>
            <h3>Home</h3>
            <h3>Community</h3>
            <h3>Events</h3>
            <h3>Contact</h3>
        </div>
        <div className='subscribe-text-div'>
            <h2>Resources</h2>
            <h3>Blog</h3>
            <h3>News</h3>
            <h3>Guides</h3>
            <h3>Help Center</h3>
        </div>
        <div className='subscribe-text-div'>
            <h2>Community</h2>
            <h3>NewsFeed</h3>
            <h3>Profile</h3>
            <h3>Friends</h3>
            <h3>Forums</h3>
        </div>
        <div className='subscribe-text-div'>
            <h2>Main links</h2>
            <h3>Members</h3>
            <h3>Activity</h3>
            <h3>Groups</h3>
            <h3>Private Group</h3>
        </div>
        <div className='subscribe-right-text-div'>
            <h2>Subscribe Circle Newsletter</h2>
            <h3>Subscribe to be the first one to know about updates. Enter your email</h3>
            <div className='subscribe-background-div'>
                <h2>Email Address</h2>
                <Button  className="btn btn-light subscribe-btn">Subscribe</Button>
                
            </div>
        </div>
        </div>
    </div>
  )
}

export default Subscribe