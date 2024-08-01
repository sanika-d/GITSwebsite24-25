import React from 'react'

const Contact = () => {
  return (
    <>
    <div className='footer' data-aos="zoom-out"
        data-aos-delay="1000">
    <div className="header">
        <h4 style={{"color":"aqua", fontWeight: "25px", fontSize: "40px"}}>For any Query, Just Click & Call</h4>
        <div className="phoneLinks">
        <a  className='contactButton' style={{"marginRight": "40px", "display": "grid", alignItems: "center"}} href="tel:8108061629" target="_blank" rel="noopener noreferrer">Shubham Pawar</a>
        <a  className='contactButton' href="tel:7039107763" target="_blank" style={{"marginRight": "40px","display": "grid", alignItems: "center"}} rel="noopener noreferrer">Sahil Pisal</a>
        <a  className='contactButton' href="tel:9326386397" style={{"marginRight": "40px", "display": "grid", alignItems: "center"}} target="_blank" rel="noopener noreferrer">Nandini Shelke</a>
        <a  className='contactButton' href="tel:8369051061" target="_blank" style={{"marginRight": "40px", "display": "grid", alignItems: "center"}} rel="noopener noreferrer">Hrushabh Patade</a>
        </div>
   <br/>

      </div>

    </div>
    </>
  )
}

export default Contact