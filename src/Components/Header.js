import React from 'react'
import './Header.css'
import CloseBtn from './CloseBtn'
import fortnite from '../Assets/fortnite.png'


function Header() {
  return (
    <div className=''>
       <CloseBtn  />
       <div className='container pt-5'>
        <p className='header_title'>Epic Games : An American video game and software developer and publisher based in Cary, North Carolina.</p>
        <img src={fortnite} className='img-fluid mt-4' alt="" />
        <p className='header_description mt-5'>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
        <div className='text-center mt-5'>
        <button className='Header_btn '>Visit Website</button>
        </div>
        
       </div>
        

    </div>
  )
}

export default Header