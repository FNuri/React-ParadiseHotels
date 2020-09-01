import React from 'react'
import ContactForm from '../components/ContactForm'



export default function About() {
  return (
<section>
<div>
<h1 style={{textAlign: "center", padding: 40, fontFamily: "Cherry Swash", fontSize: 50, color: "#23404d"}}><bold>Our Contact Details</bold></h1> 


    
      
    </div>
    <div style={{textAlign: "center",}} >
     <a className="social-link" href="mailto:fowsinur@gmail.com" target="_blank" ><i style={{marginTop: -300, paddingRight: 20, fontSize: 50, color: "#057a96"}} className="fa fa-envelope"></i></a>
     <a className="social-link" href="https://twitter.com/" target="_blank"><i style={{marginTop: -300, paddingRight: 20, fontSize: 50, color: "blue"}} className="fa fa-twitter"></i></a>
     <a className="social-link" href="https://www.facebook.com/" target="_blank"><i style={{marginTop: -300, paddingRight: 20, fontSize: 50, color: "blue"}} className="fa fa-facebook"></i></a>
     <a className="social-link" href="https://www.instagram.com/?hl=en" target="_blank"><i style={{marginTop: -300, paddingRight: 20, fontSize: 50, color: "blue"}}className="fa fa-instagram"></i></a>
     <a className="social-link" href="https://www.linkedin.com/" target="_blank"><i style={{marginTop: -300, paddingRight: 20, fontSize: 50, color: "blue"}}className="fa fa-linkedin-in"></i></a>
     

<div>
<br></br> <br></br>
<i className="fa fa-map" style={{ fontSize: 50, color: "#4c3a5e"}} >  &nbsp;454 High Street, London, England. SW17 9GH.</i>
      
     <br></br> <br></br>
 
     <i className="fa fa-phone  " style={{ fontSize: 50, color: "#10061f"}} > &nbsp;  +447391823062</i>
</div>
<ContactForm/>
    </div>

  

</section>

                 
                
     

  )
}