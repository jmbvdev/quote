import './App.css';
import Autor from './components/Autor';
import Quote from './components/Quote';
import quotes from "./quotes.json"

function App() {
  const quote= quotes[0]
  return (
    <>
    <div className='quote'>
    <i class="fas fa-quote-right"></i>
    <Quote frase={quote.quote}/>
    <Autor autor= {quote.author}/>
    <button><i class="fas fa-angle-right"></i></button>
    </div>
    </>
  );
}

export default App;
