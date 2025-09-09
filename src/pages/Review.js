import React from "react"
import ChewiePhoto from '../img/Chewie.jpg'
import RubyPhoto from '../img/Ruby.jpg'
import AlfiePhoto from '../img/Alfie.jpg'
import PearlPhoto from '../img/Pearl.jpg'
import MollyPhoto from '../img/Molly.jpg'
import RosiePhoto from '../img/Rosie.jpg'

export const Chewie = () => {
  return (
    <div class='bodyContainer'>
        <div className='intro'>
          <h1>Super reliable and great communication.</h1>
          <p>Rachel Kerr</p>
        <div className="bgImg" style={{
          backgroundImage: `url(${ChewiePhoto})`,
          backgroundPosition: 'center',
          backgroundSize: '50%',
          backgroundRepeat: 'no-repeat'
        }}>
        </div>
      </div>
    </div>
  )
}

export const Ruby = () => {
  return (
    <div class='bodyContainer'>
      <div className="bgImg" style={{
        backgroundImage: `url(${RubyPhoto})`,
        backgroundPosition: 'center',
        backgroundSize: '50%',
        backgroundRepeat: 'no-repeat'
      }}>

        <div className='intro'>
          <h1>We’ve left ruby with Jess a couple times and she’s always come back very happy. We get loads of photo’s and Ruby gets lots of walks</h1>
          <p>Ross Winzor</p>
        </div>
      </div>
    </div>
  )
}

export const Pearl = () => {
  return (
    <div class='bodyContainer'>
      <div className="bgImg" style={{
        backgroundImage: `url(${PearlPhoto})`,
        backgroundPosition: 'center',
        backgroundSize: '50%',
        backgroundRepeat: 'no-repeat'
      }}>

        <div className='intro'>
          <h1>Jess is great and very reliable. My dog really enjoys her walks and it is great to have someone so local!</h1>
          <p>Michael Derringer</p>
        </div>
      </div>
    </div>
  )
}

export const Alfie = () => {
  return (
    <div class='bodyContainer'>
      <div className="bgImg" style={{
        backgroundImage: `url(${AlfiePhoto})`,
        backgroundPosition: 'center',
        backgroundSize: '50%',
        backgroundRepeat: 'no-repeat'
      }}>

        <div className='intro'>
          <h1>Really happy with Jess. Always there when she says she will be and gets on great with my dog Alfie. Would highly recommend</h1>
          <p>Paul Dempsey</p>
        </div>
      </div>
    </div>
  )
}

export const Rosie = () => {
  return (
    <div class='bodyContainer'>
      <div className="bgImg" style={{
        backgroundImage: `url(${RosiePhoto})`,
        backgroundPosition: 'center',
        backgroundSize: '50%',
        backgroundRepeat: 'no-repeat'
      }}>

        <div className='intro'>
          <h1>Jess has been great in looking after our Labrador Rosie. Always punctual and reliable, dog very happy and settled. Would thoroughly recommend.</h1>
          <p>Martin Bennett</p>
        </div>
      </div>
    </div>
  )
}

export const Molly = () => {
  return (
    <div class='bodyContainer'>
      <div className="bgImg" style={{
        backgroundImage: `url(${MollyPhoto})`,
        backgroundPosition: 'center',
        backgroundSize: '50%',
        backgroundRepeat: 'no-repeat'
      }}>

        <div className='intro'>
          <h1>Jess is brilliant; flexible, personable, 100% reliable, fabulous communication and happy dog! So pleased to have such a great a dog care service so close to me.</h1>
          <p>Jenny mills-thomas</p>
        </div>
      </div>
    </div>
  )
}