import React from 'react'
import "./Contact.css"
import con from '../../assets/contact.png'

function Contact() {
  return (
    <div id='contact'>
        <div className="leftcontact">
            <img src={con} alt="" />
        </div>
        <div className="rightcontact">
            <form action="https://formspree.io/f/moveldpk" method='POST'>
              <input name="Username" type="text"  placeholder='Name'/>
              <input name='Email' type="email" placeholder='Email'/>
              <textarea name="message" id="textarea" placeholder='message me'></textarea>
              <input type="submit" id='btn' value="Submit"/>
            </form>
        </div>
    </div>
  )
}

export default Contact