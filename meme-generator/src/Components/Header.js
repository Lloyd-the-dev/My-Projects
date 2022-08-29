import React from "react";
import './Header.css'
import meme from './Logo.png'

function Header(){
    return(
        <header>
             <div className="header-right">
                <img src={meme} className="header-logo"/>
             </div>
             <div className="header-left">
                <h1 className="header-username">@ORETHESAVAGE</h1>
             </div>
             
        </header>
    )
}
export default Header