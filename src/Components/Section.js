import React from 'react'
import { Card } from 'react-bootstrap'
import maskgroup1 from '../Assets/Mask group.png'
import maskgroup2 from '../Assets/Mask group 2.png'
import maskgroup3 from '../Assets/Mask group3.png'
import './Section.css'

function Section() {
  return (
    <div className='container pt-5'>
    <div className='row mt-5 pt-5 mb-5'>
    <div className='col-md-4'  >    
    <Card className=''>
      <Card.Img  className='' src={maskgroup1}  />
    </Card>
    <p className='mt-4 section_card_decription'>
    Explore large, destructible environments where no two games are ever the same.
    </p>
    </div>
    <div className='col-md-4'  >    
    <Card className=''>
      <Card.Img  className='' src={maskgroup2}  />
    </Card>
    <p className='mt-4 section_card_decription'>
    Team up with friends by sprinting, climbing and smashing your way to earn your Victory Royale
    </p>
    </div>
    <div className='col-md-4 '>    
    <Card className=''>
      <Card.Img  className='' src={maskgroup3}  />
    </Card>
    <p className='mt-4 section_card_decription'>
    Discover even more ways to play across thousands of creator-made game genres
    </p>
    </div>
    </div>
    <div className='mt-5 pt-5'> 
    <p className='contribute_text'>Our Contribution</p>
    <p className='contribute_description'>Our core offering extends beyond mere profit generation; we emphasize the growth and active involvement of our user community. Collaborating with us represents an investment, rather than a mere expenditure. Our dedication to providing distinctive digital interactions guarantees unparalleled benefits for our clientele.</p>
    </div>
    <div className='row mt-5 pt-4'>
        <div className='col-md-3 offset-md-2'>
        <p className='section_M'>5M</p>
        </div>
        <div className='col-md-4 '>
        <p className='section_M'>$500K</p>
        </div>
        <div className='col-md-2 '>
        <p className='section_M'>10X</p>
        </div>
    </div> 
    
    </div>
  )
}

export default Section