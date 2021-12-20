import { useState } from 'react';
import './App.css';
import Autor from './components/Autor';
import Quote from './components/Quote';
import quotes from "./quotes.json"

function App() {
  const getNumber=max=> Math.floor(Math.random()*max)
  const colors=["#845EC2","#4B4453", "#B0A8B9", "#C34A36", "#008B74", "#936C00", "#B740AD", "#C493FF", "#2F4858", "#C3F9FF"]
  const [quote, setAutor]= useState(getNumber(quotes.length))
  const [background, setBackground]= useState(getNumber(colors.length))
  const mainQuotes= quotes[quote]
  const getRadomquotes = ()=>{
    setAutor(getNumber(quotes.length))
    setBackground(colors[getNumber(colors.length)])
    
  }
  return (
    <>
    <div className='container' style={{background}} >

    <div className='quote' style={{color:`${background}`}} >
    <i class="fas fa-quote-right"></i>
    <Quote frase={mainQuotes.quote} background={background}/>
    <Autor autor= {mainQuotes.author} background={background}/>
    <button onClick={getRadomquotes} style={{background}}><i class="fas fa-angle-right"></i></button>
    </div>
    </div>
    </>
  );
}

export default App;
