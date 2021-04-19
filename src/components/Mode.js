import React,{useState} from 'react';
import Home from './Home.js'



export default function Mode() {
    let col=document.getElementsByClassName("bookhome");
    let [colors,setColor]=useState(col.innerHTML.style.backgroundColor);
   
    function colorChange(){
       if(colors==="white"){
        document.getElementsByClassName("bookhome").innerHTML.style.backgroundColor='black';
           colors=setColor("black");
           
       }else{
        document.getElementsByClassName("bookhome").innerHTML.style.backgroundColor='black';
           colors=setColor("white");
       }
    }

    return (
        <div>
            <h4 onChange={colorChange} style={{backgroundColor:{colors}}}>Black Mode</h4>
        </div>
    )
}
