import React, { useState, useEffect } from "react";
import "./App.css";
//import Date from "./components/Date";
import Photo from "./components/Photo";
import axios from 'axios';
import { Button } from "semantic-ui-react";



function App() {
    const[stuff, setData] = useState({});
    
     useEffect(() => {
         axios.get('https://api.nasa.gov/planetary/apod?api_key=aFOyrCyQRJGCrJdSTEO4k23Vxmtk0k0kGQdO55P9&date=2012-03-14')
              .then (res => {
             console.log(res)
        setData(res.data)
         })
                    console.log ('Component', stuff)
    }, []);
    console.log ('Stuff', stuff);      
   
             
  return (
    <div className="App" style={{backgroundColor:'gray'}}>
    <h1 style={{color:'red'}}>{stuff.title}</h1>
<p>{stuff.date}</p>
<Button color="blue">
  Button
</Button>
    <Photo photo={stuff.url}/>
        <p>{stuff.explanation}</p>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    
    </div>
  );
}

export default App;
