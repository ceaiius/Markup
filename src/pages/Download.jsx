import React from 'react'
import mobile from "../assets/mobile.png"
import appStore from "../assets/app-store.png"
import playStore from "../assets/play-store.png"

function DownloadApp() {
  return (
    <div className='download-container'>
        <div className='download-left-div'>
            <h2>Get Our Application</h2>
            <h1>You Can Easily Find This App…!</h1>
            <h3>I say chap that’s suing lavatory chip shop gosh off his smashing boot are you taking the piss posh loo brilliant.</h3>
            <div className='store-buttons'>
                <img className='img-fluid' src={appStore}/>
                <img className='img-fluid' src={playStore}/>
            </div>
        </div>
        <div className='download-right-div'>
            <img className='img-fluid mobile' src={mobile}/>
        </div>
    </div>
  )
}

export default DownloadApp