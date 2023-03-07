import { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Background } from './components/Background';
import { Quotebox } from './components/Quotebox';
import { Texto } from './components/Texto';
import { Buttons } from './components/Buttons';


const list = [
  { 
    text: "The greatest glory in living lies not in never falling, but in rising every time we fall", 
    author: "Nelson Mandela",
    color: "#FF5E5B"
  },
  { 
    text: "A rose by any other name would smell as sweet.", 
    author: "William Shakespeare",
    color: "#FFFFEA"
  },
  { 
    text: "Ask not what your country can do for you; ask what you can do for your country.", 
    author: "John Kennedy",
    color: "#D8D8D8"
  },
  { 
    text: "Eighty percent of success is showing up.", 
    author: "Woody Allen",
    color: "#D8D8D8"
  },
  { 
    text: "Genius is one percent inspiration and ninety-nine percent perspiration.", 
    author: "Thomas Edison",
    color: "#D8D8D8"
  },
  { 
    text: "If you are going through hell, keep going.", 
    author: "Winston Churchill",
    color: "#D8D8D8"
  }
]



function App() {
  const [current, setCurrent] = useState(list[0]);
  const handleClick = () => {
    const index = Math.floor(Math.random() * 6)
    setCurrent(list[index])
  }

  return (
    <Background backgroundColor={ current.color }>
      <Quotebox >
        <Texto texto= { current.text } autor = { current.author } />
        <Buttons onClick={handleClick}/>
      </Quotebox>
    </Background>
  );
}

export default App;
