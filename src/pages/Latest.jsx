import React from 'react'
import cables from "../assets/cables.png"
import laptop from "../assets/laptop.png"
import arrowblue from "../assets/arrowblue.svg"
import arrowblack from "../assets/arrowblack.svg"
function Latest() {
  return (
    <div className='latest-container'>
        <div className='latest-text-div'>
            <h2>Get Our Application</h2>
            <h1>Latest News</h1>
        </div>
        <div className='latest-img-div'>
            {/* The images from adobe were not exportable i think, unless I'm dumb lol */}
            <div>
                <img  src={laptop}/>
                <div className='image-text-div'>
                    <div className='hr-div'>
                        <hr style={{width:"40px"}}></hr>
                    </div>
                    <div className='image-hr-div'>
                    <h2>It Does Not Matter Hows Slowly go as Long</h2>
                    <h3 style={{color: "#656464"}}>Continue Reading <span style={{paddingLeft:"5px"}}><img src={arrowblack}/></span></h3>
                    </div>
                </div>
            </div>
            <div>
                <img  src={laptop}/>
                <div className='image-text-div'>
                    <div className='hr-div'>
                        <hr style={{width:"40px"}}></hr>
                    </div>
                    <div className='image-hr-div'>

                    <h2>Netbook Network Added New Photo Filter</h2>
                    <h3 style={{color: "#217BF4"}}>Continue Reading <span style={{paddingLeft:"5px"}}><img src={arrowblue}/></span></h3>
                    </div>
                </div>
            </div>
            <div>
                <img  src={cables}/>
                <div className='image-text-div'>
                    <div className='hr-div'>
                        <hr style={{width:"40px"}}></hr>
                    </div>
                    <div className='image-hr-div'>
                    <h2>We Optimised Netbooks Better Navigation</h2>
                    <h3 style={{color: "#656464"}}>Continue Reading <span style={{paddingLeft:"5px"}}><img src={arrowblack}/></span></h3>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Latest