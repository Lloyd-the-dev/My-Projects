import React from "react"
import "./General.css"
import donmoen from "./don moen.jpg";


function General() {
     return <><nav><h1 className="cv">MY CV</h1></nav>
     <img src={donmoen} alt="Don Moen Picture" />
     <h3>Maximillian Jones</h3>
     <h4>Full-Stack Web developer</h4>
      <a href="#">Phone No: +234-909-345-3245</a> <br></br> <br></br>
      <a href="#">E-mail: MaxJones45@gmail.com</a> <br></br> <hr></hr> </>
}

export default General
