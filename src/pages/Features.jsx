import React from 'react'
import CardGroup from '../components/CardGroup';
import user from "../assets/user.svg"
import chat from "../assets/chat.svg"
import group from "../assets/group.svg"
import puzzle from "../assets/puzzle.svg"
import scroll from "../assets/scroll.svg"
import {IoIosListBox} from "react-icons/io"
function Features() {
  return (
    <div className='features-container'>
        <div className='features-text-div'>
            <h3>Our Community</h3>
            <h1>Community Main Feature</h1>
            <h2>The wise man therefore always holds in these matters to this principle of selection.</h2>
        </div>
        <div className='flex-container'>
            <div className='card-container'>
                <CardGroup style={{background:"#287FF5", boxShadow:"0px 10px 44px #6DABFF5C"}} url={user} title="Members, Friends" text="Members, Friends Connection ( like followers ), Private Message"/>
                <CardGroup style={{background:"#F1464D", boxShadow:"0px 8px 44px #F8575E4D"}} url={group} title="Groups" text="Your users can create groups to let other users to join and talk"/>
            </div>
            <div className='card-container'>
                <CardGroup style={{background:"#FFB133", boxShadow: "0px 10px 44px #FABA544D"}} url={chat} title="Forum" text="Forum is ready by BBPress. Your users can make topics and talk."/>
                <CardGroup style={{background:"#287FF5", boxShadow:"0px 10px 44px #6DABFF5C"}} url={puzzle} title="Custom Module" text="You can create Members, Groups Module. We already created 3 modules. It's by drag & drop live builder."/>
            </div>
            <div className='card-container'>
             {/* Couldnt download list icon from adobe */}
                <CardGroup style={{background:"#F1464D", boxShadow:"0px 8px 44px #F8575E4D"}} url={IoIosListBox} title="List Builder" text="Members, Groups list can be modified by drag & drop live builder."/>
                <CardGroup style={{background:"#FFB133",boxShadow: "0px 10px 44px #FABA544D"}} url={scroll} title="List Scroll Effects" text="8 different scroll effects are ready. You can always change by your tastes."/>
            </div>
            
        </div>
    </div>
  )
}

export default Features