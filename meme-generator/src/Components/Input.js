import React from 'react'
import './Input.css'


function Input(){

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemeImages, setAllMemeImages] = React.useState([])
    
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
        
    }
  
    function handleChange(event){
        const {name, value,} = event.target
        setMeme(prevOne => {
            return {
                ...prevOne,
                [name]: value
            }
        })
    }
   
    return(
        <div className='inputs'>
            <div className='input-flex'>
                <input 
                    type="text" 
                    className='input-box' 
                    placeholder='Top text' 
                    onChange={handleChange} 
                    name="topText"
                    value={meme.topText}
                />

                <input 
                    type="text" 
                    className='input-box' 
                    placeholder='Bottom text' 
                    onChange={handleChange}
                    name="bottomText"
                    value={meme.bottomText}
                />
            </div>
            <button className='btn' type='submit' onClick={getMemeImage}>Get a new meme image 🖼</button>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </div>
    )
}

export default Input